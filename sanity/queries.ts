export const heroQuery = `*[_type == "heroSection"][0] {
    slogan,
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

export const solutionsQuery = `*[_type == "solutionsSection"] | order(order asc) {
  title,
  description,
  image {
    asset -> {
      url
    }
  },
  cta {
    label,
    href
  }
}`

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