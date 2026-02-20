export interface ProductServiceCardProps {
  svgSrc: string;
  heading: string;
  content: string;
  bgColor?: string;
}

export interface TestimonialCardsProps {
  feedback: string;
  name: string;
  designation: string;
  company: string;
  starRating: string;
  project: string;
  country: string;
  brandLogo: string;
}

export interface FeaturedCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export interface SectionProps {
  id?: string;
}

export interface FeatureCardPropsWithIndex extends FeaturedCardProps {
  index: number;
}
