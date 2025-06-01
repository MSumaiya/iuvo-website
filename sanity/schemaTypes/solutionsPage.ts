export default {
  name: 'solutionsPage',
  title: 'Solutions',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'smartWearablesIcons',
      title: 'Smart Wearables Icons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            {
              name: 'icon',
              type: 'image',
              title: 'Icon Image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: 'smartWearablesDescription',
      title: 'Smart Wearables Description',
      type: 'text',
    },
    {
      name: 'smartWearablesNote',
      title: 'Smart Wearables Note',
      type: 'text',
    },
    {
      name: 'howItWorksTitle',
      title: 'How It Works Title',
      type: 'string',
    },
    {
      name: 'howItWorksSubtitle',
      title: 'How It Works Subtitle',
      type: 'string',
    },
    {
      name: 'howItWorksSteps',
      title: 'How It Works Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: 'builtToAdaptText',
      title: 'Built to Adapt Text',
      type: 'text',
    },
  ],
};
