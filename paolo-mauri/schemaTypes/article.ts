export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
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
            name: 'banner',
            title: 'Banner',
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
        {
            name: 'image2',
            title: 'Text Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'date',
            title: 'Date',
            type: 'localizedSlug',
            dateFormate: 'string',
            placeholder: 'localizedSlug',
        }

    ]
}