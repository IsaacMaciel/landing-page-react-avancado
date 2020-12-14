import { Question } from 'components/SectionFaq/styles'

export type Image = {
  url: string
  alternativeText: string
}
export type LogoProps = Image
export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProps = {
  title: string
  description: string
  image: Image
}
export type TechIcon = {
  id: string
  icon: {
    name: string
    url: string
  }
  title: string
}

export type SectionTechsProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: {
    id: string
    title: string
  }[]
}
export type SectionModulesProps = {
  title: string
  modules: {
    id: string
    title: string
    subtitle: string
    description: string
  }[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}
export type SocialLink = {
  title: string
  url: string
}
export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}
export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  id: string
  name: string
  photo: Image
  text: string
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  answer: string
  questions: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProps
  sectionTech: SectionTechsProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
