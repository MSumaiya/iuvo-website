/* eslint-disable import/no-anonymous-default-export */
// schemas
export default {
  name: 'healthDataPage',
  title: 'Health Data Page',
  type: 'document',
  fields: [
    // HERO
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },

    // Complete Healthcare Intelligence
    { name: 'intelligenceHeading', title: 'Intelligence Heading', type: 'string' },
    { name: 'intelligenceIntro', title: 'Intelligence Intro', type: 'text' },
    {
      name: 'intelligenceItems',
      title: 'Intelligence Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'text', title: 'Text', type: 'text' },
            { name: 'icon', title: 'Icon (optional)', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },

    // Beyond Data Collection
    { name: 'beyondHeading', title: 'Beyond Heading', type: 'string' },
    { name: 'beyondIntro', title: 'Beyond Intro', type: 'text' },
    {
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },     // e.g., "35%"
            { name: 'label', title: 'Label', type: 'string' },     // e.g., "Faster insights"
            { name: 'sublabel', title: 'Sub Label', type: 'string' }, // optional
            { name: 'icon',     title: 'Icon',     type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },

    // Dark CTA banner

      { name: 'ctaLine', title: 'CTA Line', type: 'string' },
      { name: 'ctaSubline', title: 'CTA Subline', type: 'text' },
      { name: 'ctaBackground', title: 'CTA Background', type: 'image', options: { hotspot: true } },


    // What's New in Our Evolution
    { name: 'evolutionHeading', title: 'Evolution Heading', type: 'string' },
    { name: 'evolutionIntro', title: 'Evolution Intro', type: 'text' },
    { name: 'evolutionSubheading', title: 'Evolution Subheading', type: 'string' },   // e.g., "Core Components Include:"
    {
     name: 'evolutionBullets',
     title: 'Evolution Bullets',
     type: 'array',
     of: [{ type: 'string' }],
    },
  ],
};
