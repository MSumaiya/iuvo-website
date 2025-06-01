export default {
    name: 'howItWorks',
    title: 'How It Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'buttonLabel',
        title: 'Button Label',
        type: 'string',
      },
      {
        name: 'buttonLink',
        title: 'Button Link',
        type: 'url',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };