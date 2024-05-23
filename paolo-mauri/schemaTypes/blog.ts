export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string',
            dateFormate: 'string',
            placeholder: 'string',
        },
        {
            name: 'text',
            title: 'First_Text',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'image',
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

    ]
}
