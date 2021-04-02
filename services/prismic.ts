import Prismic from '@prismicio/client'

export function getPrismicClient(){
    const prismic = Prismic.client(
        process.env.NEXT_PUBLIC_PRISMIC_URL
    )

    return prismic
}