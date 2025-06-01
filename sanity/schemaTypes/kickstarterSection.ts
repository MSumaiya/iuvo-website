export default {
    name: 'kickstarterSection',
    title: 'Kickstarter Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'buttonLabel',
        title: 'Button Label',
        type: 'string',
      },
      {
        name: 'buttonUrl',
        title: 'Button URL',
        type: 'url',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  