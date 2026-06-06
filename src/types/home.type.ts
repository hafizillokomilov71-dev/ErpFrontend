import type { SVGProps } from "react";

export type IconComponent = (
  props: SVGProps<SVGSVGElement>,
) => React.ReactElement;

export interface INavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface IStat {
  icon: IconComponent;
  value: string;
  label: string;
  color: string;
}

export interface ICourse {
  title: string;
  tag: string;
  tagColor: string;
  rating: string;
  reviews: string;
  desc: string;
  teacher: string;
  price: string;
  img: string;
}

export interface IFeature {
  icon: IconComponent;
  title: string;
  desc: string;
  color: string;
}

export interface ITeacher {
  name: string;
  role: string;
  bio: string;
  stats: [string, string][];
  img: string;
}

export interface ITestimonial {
  text: string;
  name: string;
  role: string;
  img: string;
}

export interface IFaq {
  q: string;
  a: string;
}

export interface IFooterColumn {
  title: string;
  links: string[];
}
