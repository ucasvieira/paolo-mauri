export default {
    name: 'podcast',
    title: 'Podcast',
    type: 'document',
    fields: [
        {
           name: 'video',
           title: 'video',
           type: 'file',
           of: [{ type: 'file' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        }

    ]
}