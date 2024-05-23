export default {
    name: 'podcast',
    title: 'Podcast',
    type: 'document',
    fields: [
        {
           name: 'video',
           title: 'video',
           type: 'file',
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
