export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'reference',
      to: [{ type: 'heroSection' }],
    },
    {
      name: 'sections',
      title: 'Homepage Sections',
      type: 'array',
      of: [
        {
          name: 'solutionsRef',
          type: 'reference',
          title: 'Solutions Section',
          to: [{ type: 'solutionsSection' }],
        },
        {
          name: 'companyRef',
          type: 'reference',
          title: 'Company Section',
          to: [{ type: 'companySection' }],
        },
        {
          name: 'kickstarterRef',
          type: 'reference',
          title: 'Kickstarter Section',
          to: [{ type: 'kickstarterSection' }],
        },
        {
          name: 'healthRef',
          type: 'reference',
          title: 'Health Data Section',
          to: [{ type: 'healthData' }],
        },
        {
          name: 'genericRef',
          type: 'reference',
          title: 'Generic Section',
          to: [{ type: 'section' }],
        },
      ],
    },
  ],
};
