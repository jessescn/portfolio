import Prismic from '@prismicio/client'

export function getPrismicClient(){
    const prismic = Prismic.client(
        process.env.PRISMIC_URL
    )

    return prismic
}