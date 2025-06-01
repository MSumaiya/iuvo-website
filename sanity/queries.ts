export const heroQuery = `*[_type == "heroSection"][0] {
    catchSlogan,
    backgroundImage {
      asset-> {
        url
      }
    },
    ctas[] {
      label,
      href
    }
  }`

  // Navigation Query (up to 5 dynamic items)
export const navQuery = `*[_type == "navigationItem"] | order(order asc)[0...5] {
  label,
  slug
}`

export const solutionsQuery = `*[_type == "solutionsSection"] | order(_createdAt asc){
  _id,
  title,
  description,
  image {
    asset->{
      url
    }
  }
}`;

export const companySectionQuery = `*[_type == "companySection"][0] {
  heading,
  description,
  image {
    asset-> {
      url
    }
  },
  cta {
    label,
    href
  }
}`

export const howItWorksQuery = `*[_type == "howItWorks"][0]{
  title,
  description,
  buttonLabel,
  buttonLink,
  image {
    asset-> {
      url
    }
  }
}`;

export const healthDataQuery = `*[_type == "healthData"][0]{
  title,
  description,
  buttonLabel,
  buttonLink,
  image {
    asset-> {
      url
    }
  }
}`;

export const kickstarterSectionQuery = `
  *[_type == "kickstarterSection"][0]{
    title,
    description,
    buttonLabel,
    buttonUrl,
    backgroundImage {
      asset->{
        _id,
        url
      }
    }
  }
`;
/* export const whyIuvoPageQuery = `*[_type == "whyIuvoPage"][0] {
  heroTitle,
  heroSubtitle,
  heroImage,
  features[] {
    title,
    description,
    icon
  },
  testimonial {
    quote,
    author,
    authorTitle,
    authorImage
  }
}`; */

export const whyIuvoPageQuery = `*[_type == "whyIuvoPage"][0] {
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage {
    asset->{
      url
    }
  },
  aboutTitle,
  aboutText,
  aboutSubTitle,
  aboutImage {
    asset->{
      url
    }
  },
  team[] {
    name,
    role,
    image {
      asset->{
        url
      }
    }
  },
  mission,
  vision,
  sections[] {
    title,
    text,
    image {
      asset->{
        url
      }
    }
  }
}`;

// sanity/queries.ts

export const solutionsPageQuery = `*[_type == "solutionsPage"][0]{
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage {
    asset->{url}
  },
  howItWorksTitle,
  howItWorksSubtitle,
  howItWorksSteps[] {
    title,
    description,
    image {
      asset->{url}
    }
  },
  builtToAdaptText
}`;

export const healthDataPageQuery = `
  *[_type == "healthDataPage"][0] {
    title,
    subtitle,
    description,
    backgroundImage {
      asset -> {
        url
      }
    }
  }
`;

export const investorRelationsQuery = `*[_type == "investorRelationsPage"][0]{
  sections[]{
    title,
    description,
    buttonText,
    buttonUrl,
    "imageUrl": image.asset->url
  }
}`;


export const homepageQuery = `
  *[_type == "homePage"][0]{
    _id,
    hero->{
      _id,
      catchSlogan,
      backgroundImage {
        asset->{
          url
        }
      }
    },
    sections[]->{
      _id,
      _type,
      title,
      description,
      order,
      image {
        asset->{
          url
        }
      },
      cta {
        label,
        href
      },
      items[] {
        title,
        description,
        image {
          asset->{
            url
          }
        }
      }
    }
  }
`;







export const getAllPagesQuery = `
  *[_type == "page"]{
    _id,
    title,
    "slug": slug.current
  }
`;