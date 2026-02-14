import { AppInfo, Category } from './types';
import icon01 from './docs/01_Flask_LoginUser.jpg';
import icon02 from './docs/02_Flask_Cloud_Storage.jpg';
import icon03 from './docs/03_Flask_POS_Inventory.png';
import icon04 from './docs/04_FakeNewsDetector_BiLSTM.png';
import icon05 from './docs/05_ArticleAnalyzer_SBERT.jpg';
import icon06 from './docs/06_MovieRecommender_Hybrid.jpg';
import icon07 from './docs/07_ImageClassifier_CNN.jpg';
import icon08 from './docs/08_FastAPI_CRUD.jpg';
import icon09 from './docs/09_AIML_Portfolio.jpg';
import icon10 from './docs/10_HousePrice_Regression.png';
import icon11 from './docs/12_File_Organizer.png';
import icon12 from './docs/12_Apple_Music.jpg';

export const APPS: AppInfo[] = [
  {
    id: '1',
    name: 'Flask Login User',
    subtitle: 'User authentication and account session flow.',
    category: Category.Projects,
    rating: 4.8,
    reviewsCount: '210',
    icon: icon01,
    banner: icon01,
    description: 'A Flask-based authentication app with login, logout, and protected routes for user-level access control.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '2',
    name: 'Flask Cloud Storage',
    subtitle: 'Upload, store, and manage files in cloud-like flow.',
    category: Category.Projects,
    rating: 4.7,
    reviewsCount: '180',
    icon: icon02,
    banner: icon02,
    description: 'A Flask app that provides file upload, listing, and retrieval features for a lightweight cloud storage experience.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '3',
    name: 'Flask POS Inventory',
    subtitle: 'Point-of-sale and inventory management dashboard.',
    category: Category.Projects,
    rating: 4.9,
    reviewsCount: '320',
    icon: icon03,
    banner: icon03,
    description: 'A POS and inventory system built with Flask for tracking products, stock levels, and transaction records.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '4',
    name: 'Fake News Detector (BiLSTM)',
    subtitle: 'NLP classification model for fake news detection.',
    category: Category.Projects,
    rating: 4.8,
    reviewsCount: '260',
    icon: icon04,
    banner: icon04,
    description: 'A BiLSTM-based model that classifies news content to help identify potentially fake or misleading articles.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '5',
    name: 'Article Analyzer (SBERT)',
    subtitle: 'Semantic article analysis using SBERT embeddings.',
    category: Category.Projects,
    rating: 4.7,
    reviewsCount: '190',
    icon: icon05,
    banner: icon05,
    description: 'An NLP project using SBERT to compare, score, and analyze article meaning with semantic similarity techniques.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '6',
    name: 'Movie Recommender (Hybrid)',
    subtitle: 'Hybrid recommendation engine for movie suggestions.',
    category: Category.Projects,
    rating: 4.8,
    reviewsCount: '275',
    icon: icon06,
    banner: icon06,
    description: 'A hybrid recommendation model combining collaborative and content-based filtering for personalized movie suggestions.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '7',
    name: 'Image Classifier (CNN)',
    subtitle: 'Convolutional neural network for image classification.',
    category: Category.Projects,
    rating: 4.9,
    reviewsCount: '340',
    icon: icon07,
    banner: icon07,
    description: 'A CNN-based image classification project with training, evaluation, and prediction workflow for visual categories.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '8',
    name: 'FastAPI CRUD',
    subtitle: 'REST API backend with CRUD operations.',
    category: Category.Projects,
    rating: 4.7,
    reviewsCount: '230',
    icon: icon08,
    banner: icon08,
    description: 'A FastAPI service implementing CRUD endpoints with clean API structure and practical backend patterns.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '9',
    name: 'AI/ML Portfolio',
    subtitle: 'Portfolio web app showcasing AI and software projects.',
    category: Category.Projects,
    rating: 4.9,
    reviewsCount: '410',
    icon: icon09,
    banner: icon09,
    description: 'A curated portfolio interface presenting practical AI/ML and software projects with clean UX and project-first storytelling.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '10',
    name: 'House Price Regression',
    subtitle: 'Machine learning model for housing price prediction.',
    category: Category.Projects,
    rating: 4.8,
    reviewsCount: '295',
    icon: icon10,
    banner: icon10,
    description: 'A regression modeling project for predicting house prices based on key property features and data preprocessing.',
    developer: 'Kyaw Htet',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '11',
    name: 'Files Organizer',
    subtitle: 'Smart local file organizer for daily workflow.',
    category: Category.Projects,
    rating: 4.8,
    reviewsCount: '365',
    icon: icon11,
    banner: icon11,
    description: 'A utility app for organizing local files by rule-based sorting to improve productivity and reduce manual work.',
    developer: 'Kyaw Htet',
    website: 'https://files.kyawhtet.com/',
    price: 'Open',
    ageRating: '4+'
  },
  {
    id: '12',
    name: 'Apple Music Frontend',
    subtitle: 'Apple-inspired music interface and interactions.',
    category: Category.Projects,
    rating: 4.9,
    reviewsCount: '520',
    icon: icon12,
    banner: icon12,
    description: 'A music frontend inspired by Apple design language, featuring polished layout, visual hierarchy, and smooth interactions.',
    developer: 'Kyaw Htet',
    website: 'https://music.kyawhtet.com',
    price: 'Open',
    ageRating: '4+'
  }
];
