import { GetStaticProps } from "next"
import Link from "next/link"

import { Content } from "../../styles/posts/styles"
import { Title } from "../../components/design/Title"
import { PageContainer } from "../../components/design/PageContainer"

import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { useEffect } from "react"

type Post = {
    slug: string,
    title: string,
    excerpt: string,
    updatedAt: string,
}

interface PostsProps {
    posts: Post[],
    setShowMenu: (show: boolean) => void
}

export default function Posts({ posts, setShowMenu }:PostsProps){

    useEffect(()=> {
        setShowMenu(false)
    },[])
    

    return (
        <PageContainer>
            <Title fontSize={2.2}>
                What i've been writing
            </Title>
            <Content>
                { posts.length == 0 ? (<h2>No posts for now 😢</h2>) : posts.map(post => (
                    <Link key={post.slug} href={`/posts/${post.slug}`}>
                        <a>
                            <time>{post.updatedAt}</time>
                            <h1>{post.title}</h1>
                            <p>{post.excerpt}</p>
                        </a>
                    </Link>
                ))}
            </Content>
        </PageContainer>
    )
}

export const getStaticProps: GetStaticProps = async() => {
    const prismic = getPrismicClient()
    const response = await prismic.query([
        Prismic.Predicates.at("document.type", "posts")],
        {
            fetch: ['posts.title', 'posts.content'],
            pageSize: 100
        })

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === "paragraph")?.text ?? "",
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props : {
            posts
        },
        revalidate: 1
    }
}