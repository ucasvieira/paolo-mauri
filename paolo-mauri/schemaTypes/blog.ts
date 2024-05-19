export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'banner',
            title: 'Banner',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'localizedSlug',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'localizedSlug',
        },
    ]
}