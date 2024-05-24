export default {
    name: 'podinfo',
    title: 'Podcast Information',
    type: 'document',
    fields: [
        {
            name: 'text',
            title: 'First_Text',
            type: 'text',
        },
        {
            name: 'language',
            title: 'Language',
            type: 'string',
            initialValue: 'en',
            options: {
                list: [
                    { title: 'it', value: 'it' },
                    { title: 'en', value: 'en' }
                ],
                layout: 'radio'
            }
        },
    ]
}
