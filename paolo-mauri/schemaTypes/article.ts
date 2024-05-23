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
            type: 'string',
        },
        {
            name: 'text',
            title: 'First_Text',
            type: 'array',
            of: [{ type: 'block' }],
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
            name: 'text2',
            title: 'Second_Text',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string',
            dateFormate: 'string',
            placeholder: 'string',
        }

    ]
}
