export default {
  name: 'geopolitic',
  title: 'Geopolitic',
  type: 'document',
  fields: [
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        source: 'name',
        maxLength: 20,
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      placeholder: 'string',
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
      name: 'text',
      title: 'Text',
      type: 'string',
    },
  ],
}
