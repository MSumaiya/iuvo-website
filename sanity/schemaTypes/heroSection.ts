export default {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'catchSlogan',
        title: 'Catch Slogan',
        type: 'string'
      },
      {
        name: 'ctas',
        title: 'CTA Buttons',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'label', title: 'Button Label', type: 'string' },
              { name: 'href', title: 'Link URL', type: 'string' }
            ]
          }
        ]
      }
    ]
  }
  