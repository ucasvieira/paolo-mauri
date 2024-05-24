export default {
    name: 'homeinfo',
    title: 'Home info',
    type: 'document',
    fields: [{
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Text',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'button',
        title: 'Button text',
        type: 'string',
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
    }
    ],
  }
  