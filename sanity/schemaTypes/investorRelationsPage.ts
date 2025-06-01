export default {
  name: 'investorRelationsPage',
  title: 'Investor Relations Page',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
            { name: 'buttonUrl', title: 'Button URL', type: 'url' },
          ],
        },
      ],
    },
  ],
};
