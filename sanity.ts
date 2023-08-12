import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'h64iza6v',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-08-08',


})
const builder = imageUrlBuilder(client)

export const urlFor = (source: any)=> builder.image(source);

export default client;

