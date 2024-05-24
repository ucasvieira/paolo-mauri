export default {
    name: 'footer',
    title: 'FooterData',
    type: 'document',
    fields: [
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
        {
            name: 'textInputs',
            title: 'Text_Inputs',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ]
}
