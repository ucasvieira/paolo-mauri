export default {
  name: 'defend',
  title: 'Defend',
  type: 'document',
  fields: [{
      name: 'region',
      title: 'Region',
      type: 'localizedSlug',
      options: {
        source: 'name',
        maxLength: 20,
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'localizedSlug',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'localizedSlug',
      placeholder: 'localizedSlug',
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
      type: 'localizedSlug',
    },
  ],
}
