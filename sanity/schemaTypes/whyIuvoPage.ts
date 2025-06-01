// schemas/whyIuvoPage.ts
export default {
  name: 'whyIuvoPage',
  title: 'Why iUvo Page',
  type: 'document',
  fields: [
    { name: 'heroTitle', title: 'Hero Title', type: 'string' },
    { name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string' },
    { name: 'heroDescription', title: 'Hero Description', type: 'text' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },

    { name: 'aboutTitle', title: 'About Title', type: 'string' },
    { name: 'aboutSubTitle', title: 'About Sub Title', type: 'string' },
    { name: 'aboutText', title: 'About Text', type: 'text' },
    { name: 'aboutImage', title: 'About Image', type: 'image' },

    {
      name: 'team',
      title: 'Leadership Team',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'role', type: 'string', title: 'Role' },
            { name: 'image', type: 'image', title: 'Photo' },
          ],
        },
      ],
    },

    { name: 'mission', title: 'Mission', type: 'text' },
    { name: 'vision', title: 'Vision', type: 'text' },

    {
      name: 'sections',
      title: 'Info Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'text', type: 'text' },
            { name: 'image', type: 'image' },
          ],
        },
      ],
    },
  ],
}
