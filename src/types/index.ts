// Component Prop Types
import { SCROLL_DIRECTION } from "@/utils/constants";

export interface SectionProps {
  id?: string;
}

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

export interface FeatureCardPropsWithIndex extends FeaturedCardProps {
  index: number;
}

//Data Model Types

export interface ServiceCardData {
  key: string;
  svgSrc: string;
  heading: string;
  content: string;
  bgColor: string;
}

export interface TestimonialData {
  key: string;
  feedback: string;
  name: string;
  designation: string;
  company: string;
  starRating: string;
  project: string;
  country: string;
  brandLogo: string;
}

export interface StoryData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  label: string;
}

export interface InsightData {
  key: number;
  imgSrc: string;
  heading: string;
  text: string;
}

export interface TechCategory {
  id: string;
  title: string;
  items: string[];
}

export interface NavItem {
  id: string;
  label: string;
  target: string;
}

export interface StatData {
  value: string;
  label: string;
}

export type ScrollDirection =
  (typeof SCROLL_DIRECTION)[keyof typeof SCROLL_DIRECTION];
