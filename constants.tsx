
import { AppInfo, Category } from './types';
import musicAppIcon from './docs/music-app-icon.svg';
import filesOrganizerImage from './docs/files-organizer.png';

export const APPS: AppInfo[] = [
  {
    id: '1',
    name: 'Music App',
    subtitle: 'Apple-inspired local music streaming.',
    category: Category.Projects,
    rating: 4.9,
    reviewsCount: '1.4K',
    icon: musicAppIcon,
    banner: 'https://picsum.photos/seed/music_app_banner/800/400',
    description: 'A premium music experience inspired by Apple Music with album browsing, playback controls, and clean glass UI patterns.',
    developer: 'Kyaw Htet',
    website: 'https://music.kyawhtet.com',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '2',
    name: 'Files Organizer',
    subtitle: 'Smart file management for daily workflow.',
    category: Category.Projects,
    rating: 4.8,
    reviewsCount: '860',
    icon: filesOrganizerImage,
    banner: filesOrganizerImage,
    description: 'Organize, sort, and manage files quickly with a clean interface built for productivity and fast navigation.',
    developer: 'Kyaw Htet',
    website: 'https://files.kyawhtet.com/',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '3',
    name: 'Slack',
    subtitle: 'Team communication.',
    category: Category.Work,
    rating: 4.2,
    reviewsCount: '450K',
    icon: 'https://picsum.photos/seed/slack/200/200',
    banner: 'https://picsum.photos/seed/slack_banner/800/400',
    description: 'Slack brings team communication and collaboration into one place so you can get more work done, whether you belong to a large enterprise or a small business.',
    developer: 'Slack Technologies, Inc.',
    price: 'Get',
    ageRating: '4+'
  },
  {
    id: '4',
    name: 'Things 3',
    subtitle: 'Get things done.',
    category: Category.Work,
    rating: 4.9,
    reviewsCount: '35K',
    icon: 'https://picsum.photos/seed/things/200/200',
    banner: 'https://picsum.photos/seed/things_banner/800/400',
    description: 'The award-winning personal task manager that helps you achieve your goals through a simple and beautiful design.',
    developer: 'Cultured Code GmbH & Co. KG',
    price: '$9.99',
    ageRating: '4+'
  },
  {
    id: '5',
    name: 'Instagram',
    subtitle: 'Share your moments.',
    category: Category.Social,
    rating: 4.5,
    reviewsCount: '15M',
    icon: 'https://picsum.photos/seed/insta/200/200',
    banner: 'https://picsum.photos/seed/insta_banner/800/400',
    description: 'Bringing you closer to the people and things you love. Connect with friends, share what you’re up to, or see what\'s new from others all over the world.',
    developer: 'Instagram, Inc.',
    price: 'Get',
    ageRating: '12+'
  },
  {
    id: '6',
    name: 'VSCO',
    subtitle: 'Photo & Video Editor.',
    category: Category.Create,
    rating: 4.7,
    reviewsCount: '1.2M',
    icon: 'https://picsum.photos/seed/vsco/200/200',
    banner: 'https://picsum.photos/seed/vsco_banner/800/400',
    description: 'VSCO is a place where expression matters most. We offer creative photo and video editing tools, inspiration, and a place for you to be you.',
    developer: 'Visual Supply Company',
    price: 'Get',
    ageRating: '4+'
  },
  {
    id: '7',
    name: 'Xcode Cloud',
    subtitle: 'Continuous integration.',
    category: Category.Develop,
    rating: 4.4,
    reviewsCount: '5K',
    icon: 'https://picsum.photos/seed/xcode/200/200',
    banner: 'https://picsum.photos/seed/xcode_banner/800/400',
    description: 'Accelerate the development and delivery of high-quality apps by bringing together cloud-based tools that help you build, test, and deliver.',
    developer: 'Apple',
    price: 'Get',
    ageRating: '4+'
  },
  {
    id: '8',
    name: 'Netflix',
    subtitle: 'Watch TV Shows & Movies.',
    category: Category.Entertainment,
    rating: 4.3,
    reviewsCount: '10M',
    icon: 'https://picsum.photos/seed/netflix/200/200',
    banner: 'https://picsum.photos/seed/netflix_banner/800/400',
    description: 'Looking for the most talked about TV shows and movies from the around the world? They’re all on Netflix.',
    developer: 'Netflix, Inc.',
    price: 'Get',
    ageRating: '12+'
  }
];
