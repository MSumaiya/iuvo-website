export default {
    name: 'companySection',
    title: 'Company Section',
    type: 'document',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      {
        name: 'cta',
        title: 'CTA',
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'href', title: 'Link', type: 'string' }
        ]
      }
    ]
  }
  