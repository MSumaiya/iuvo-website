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

/* export const healthDataPageQuery = `
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
`; */

/* export const healthDataPageQuery = `
*[_type == "healthDataPage"][0]{
  title,
  subtitle,
  description,
  "backgroundImageUrl": backgroundImage.asset->url,

  intelligenceHeading,
  intelligenceItems[]{
    _key,
    title,
    text,
    "iconUrl": icon.asset->url
  },

  beyondHeading,
  bullets,
  metrics[]{
    _key,
    value,
    label,
    sublabel
  },

  ctaLine,
  "ctaBackgroundUrl": ctaBackground.asset->url,

  evolutionHeading,
  evolutionIntro,
  evolutionItems[]{
    _key,
    title,
    text
  }
}
`;
 */
/* 
export const healthDataPageQuery = `
*[_type == "healthDataPage"][0]{
  title,
  subtitle,
  description,
  "backgroundImageUrl": backgroundImage.asset->url,

  intelligenceHeading,
  intelligenceItems[]{
    _key,
    title,
    text,
    "iconUrl": icon.asset->url
  }
}
`; */
/* export const healthDataPageQuery = `
*[_type == "healthDataPage"][0]{
  title,
  subtitle,
  description,
  "backgroundImageUrl": backgroundImage.asset->url,

  intelligenceHeading,
  intelligenceIntro, 
  intelligenceItems[]{
    _key,
    title,
    text,
    "iconUrl": icon.asset->url
  },

  // CTA banner fields
  ctaLine,
  ctaSubline,
  "ctaBackgroundUrl": ctaBackground.asset->url
}
`; */
export const healthDataPageQuery = `
*[_type == "healthDataPage"][0]{
  // Hero
  title,
  subtitle,
  description,
  "backgroundImageUrl": backgroundImage.asset->url,

  // Intelligence section
  intelligenceHeading,
  intelligenceIntro,
  intelligenceItems[]{
    _key,
    title,
    text,
    "iconUrl": icon.asset->url
  },

  // CTA banner
  ctaLine,
  ctaSubline,
  "ctaBackgroundUrl": ctaBackground.asset->url,

  // Beyond Data Collection
  beyondHeading,
  beyondIntro,
  bullets,
  metrics[]{
    _key,
    value,
    label,
    sublabel,
    "iconUrl": icon.asset->url
  },

  // What's New in Our Evolution
  evolutionHeading,
  evolutionIntro,
  evolutionSubheading,
  evolutionBullets
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

/* export const vision2030PageQuery = `
*[_type == "vision2030Page"][0]{
  title,
  "heroImageUrl": heroImage.asset->url,
  lastUpdated,
  sections[] {
    heading,
    content
  }
}
`; */

// sanity/queries.ts
export const vision2030PageQuery = `
*[_type == "vision2030Page"][0]{
  title,
  lastUpdated,
  "heroImageUrl": heroImage.asset->url,
  sections[]{
    heading,
    paragraphs,     // <- array of text
    bullets         // <- array of string
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