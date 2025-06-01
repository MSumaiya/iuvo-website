export default {
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'document',
    fields: [
      {
        name: 'label',
        title: 'Label',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required()
      },
      {
        name: 'slug',
        title: 'URL Slug',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required()
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        validation: (Rule: { required: () => any; }) => Rule.required()
      }
    ]
  }