export interface ICourseCard {
  title: string;
  tag: string;
  tagColor: string;
  rating: string;
  desc: string;
  duration: string;
  lessons: string;
  price: string;
  oldPrice?: string;
  img: string;
}

export interface ICategory {
  label: string;
  count: number;
}

export interface ISortOption {
  label: string;
  value: string;
}
