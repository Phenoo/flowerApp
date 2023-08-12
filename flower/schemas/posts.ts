
export default {
    name: 'posts',
    title: 'Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection: any) {
            const { author } = selection
            return {...selection, subtitle: author && `by ${author}` }
        },
    },
}