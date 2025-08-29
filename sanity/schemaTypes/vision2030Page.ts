/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  name: 'vision2030Page',
  title: 'Vision 2030 Page',
  type: 'document',
  fields: [
    // Page title (H1)
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },

    // Hero image
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },

    // Last updated stamp (optional, for display)
    { name: 'updatedAt', title: 'Last Updated', type: 'datetime' },

    // Content sections
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            {
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
              description: 'Each item renders as its own paragraph.',
            },
            {
              name: 'bullets',
              title: 'Bullets',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Optional bullet list for this section.',
            },
          ],
          preview: {
            select: { title: 'heading' },
            prepare: ({ title }: { title?: string }) => ({
              title: title || 'Untitled section',
            }),
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'title', media: 'heroImage' },
  },
};
