const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }
  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }
  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        url
        alternativeText
      }
    }
  }
  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        id
        icon {
          name
          url
        }
        title
      }
    }
  }
  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        id
        title
      }
    }
  }
  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        id
        title
        subtitle
        description
      }
    }
  }
  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }
  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }
  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        id
        photo {
          alternativeText
          url
        }
        name
        description
        role
        socialLinks {
          title
          url
        }
      }
    }
  }
  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        id
        name
        photo {
          alternativeText
          url
        }
        text
      }
    }
  }
  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        answer
        question
      }
    }
  }
  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`

export default GET_LANDING_PAGE
