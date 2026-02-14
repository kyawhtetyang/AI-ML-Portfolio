export enum Category {
  Discover = 'Discover',
  Projects = 'Projects',
  Chat = 'Chat'
}

export interface AppInfo {
  id: string;
  name: string;
  subtitle: string;
  category: Category;
  icon: string;
  banner: string;
  overview: string;
  stack: string;
  outcome: string;
  developer: string;
  featured?: boolean;
  website?: string;
  repo?: string;
  downloadUrl?: string;
}
