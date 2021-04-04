import { GetStaticProps } from "next"
import Link from "next/link"

import { Container, Content } from "../../styles/posts/styles"

import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

type Post = {
    slug: string,
    title: string,
    excerpt: string,
    updatedAt: string,
}

interface PostsProps {
    posts: Post[]
}

export default function Posts({ posts }:PostsProps){
    return (
        <Container>
            <h1>
                What i've been writing
                <div></div>
            </h1>
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
        </Container>
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
        revalidate: 60 * 60 * 24
    }
}