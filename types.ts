export enum Category {
  Discover = 'Discover',
  Projects = 'Projects',
  Contact = 'Contact',
  Chat = 'Chat'
}

export interface AppInfo {
  id: string;
  name: string;
  subtitle: string;
  category: Category;
  rating: number;
  reviewsCount: string;
  icon: string;
  banner: string;
  description: string;
  developer: string;
  website?: string;
  price: string;
  ageRating: string;
}

export interface Review {
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
}
