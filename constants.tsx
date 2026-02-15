import { AppInfo, Category } from './types';
import imgAimlPortfolio from './docs/01_AIML_Portfolio.png';
import imgFlaskLoginUser from './docs/02_Flask_LoginUser.png';
import imgFlaskCloudStorage from './docs/03_Flask_Cloud_Storage.png';
import imgFlaskPosInventory from './docs/04_Flask_POS_Inventory.png';
import imgFastApiCrud from './docs/05_FastAPI_CRUD.png';
import imgHousePriceRegression from './docs/06_HousePrice_Regression.png';
import imgArticleAnalyzerSbert from './docs/07_ArticleAnalyzer_SBERT.png';
import imgFakeNewsDetectorBiLstm from './docs/08_FakeNewsDetector_BiLSTM.png';
import imgMovieRecommenderHybrid from './docs/09_MovieRecommender_Hybrid.png';
import imgImageClassifierCnn from './docs/10_ImageClassifier_CNN.png';
import imgAppleMusic from './docs/11_Apple_Music.png';
import imgFileOrganizer from './docs/12_File_Organizer.png';

export const APPS: AppInfo[] = [
  {
    id: '1',
    name: 'AI/ML Portfolio',
    subtitle: 'Portfolio web app showcasing AI and software projects.',
    category: Category.Projects,
    icon: imgAimlPortfolio,
    banner: imgAimlPortfolio,
    overview: 'Personal portfolio experience that presents projects, skills, and collaboration channels clearly.',
    stack: 'Frontend: React + TypeScript\nStyling: Tailwind\nBuild: Vite',
    outcome: 'Created a focused portfolio structure optimized for recruiters and clients.',
    developer: 'Kyaw Htet',
    website: 'https://kyawhtet.com',
    repo: 'https://github.com/kyawhtetyang/AI-ML-Portfolio'
  },
  {
    id: '2',
    name: 'Flask Login User',
    subtitle: 'User authentication and account session flow.',
    category: Category.Projects,
    icon: imgFlaskLoginUser,
    banner: imgFlaskLoginUser,
    overview: 'Authentication module with secure login/logout and protected routes for role-based access.',
    stack: 'Frontend: Jinja2 Templates\nBackend: Flask (Python)\nDatabase: SQLite',
    outcome: 'Delivered a reusable auth foundation for Flask apps with clean session management.',
    developer: 'Kyaw Htet',
    repo: 'https://github.com/kyawhtetyang/Flask_LoginUser'
  },
  {
    id: '3',
    name: 'Flask Cloud Storage',
    subtitle: 'Upload, store, and manage files in cloud-like flow.',
    category: Category.Projects,
    icon: imgFlaskCloudStorage,
    banner: imgFlaskCloudStorage,
    overview: 'File upload and retrieval service with structured storage flow and user-friendly file listing.',
    stack: 'Frontend: Bootstrap\nBackend: Flask (Python)\nStorage: File System',
    outcome: 'Built a lightweight storage dashboard that reduces manual file handling time.',
    developer: 'Kyaw Htet',
    repo: 'https://github.com/kyawhtetyang/Flask_Cloud_Storage'
  },
  {
    id: '4',
    name: 'Flask POS Inventory',
    subtitle: 'Point-of-sale and inventory management dashboard.',
    category: Category.Projects,
    icon: imgFlaskPosInventory,
    banner: imgFlaskPosInventory,
    overview: 'Inventory and transaction tracking for retail workflow with stock visibility and sales updates.',
    stack: 'Frontend: Flask Templates + Charting\nBackend: Flask (Python)\nDatabase: SQLAlchemy/SQLite',
    outcome: 'Improved visibility of stock and sales operations in one central interface.',
    developer: 'Kyaw Htet',
    repo: 'https://github.com/kyawhtetyang/Flask_POS_Inventory'
  },
  {
    id: '5',
    name: 'FastAPI CRUD',
    subtitle: 'REST API backend with CRUD operations.',
    category: Category.Projects,
    icon: imgFastApiCrud,
    banner: imgFastApiCrud,
    overview: 'Backend service with clean CRUD endpoints and maintainable API structure.',
    stack: 'Backend: FastAPI + Pydantic (Python)\nDatabase: SQLite',
    outcome: 'Provided a reliable API template for rapid backend prototyping.',
    developer: 'Kyaw Htet',
    repo: 'https://github.com/kyawhtetyang/FastAPI_CRUD'
  },
  {
    id: '6',
    name: 'House Price Regression',
    subtitle: 'Machine learning model for housing price prediction.',
    category: Category.Projects,
    icon: imgHousePriceRegression,
    banner: imgHousePriceRegression,
    overview: 'Regression workflow for estimating property price from key housing features.',
    stack: 'ML/Engine: Scikit-learn Regression + EDA\nBackend: Python Notebook/Pipeline',
    outcome: 'Built a reproducible ML pipeline for real-estate price modeling.',
    developer: 'Kyaw Htet',
    repo: 'https://github.com/kyawhtetyang'
  },
  {
    id: '7',
    name: 'Article Analyzer (SBERT)',
    subtitle: 'Semantic article analysis using SBERT embeddings.',
    category: Category.Projects,
    icon: imgArticleAnalyzerSbert,
    banner: imgArticleAnalyzerSbert,
    overview: 'Semantic similarity engine for comparing article meaning and clustering related content.',
    stack: 'ML/Engine: SBERT + Transformers + Pandas\nBackend: Flask (Python)\nPackaging: Docker',
    outcome: 'Enabled better article matching and semantic ranking for content analysis tasks.',
    developer: 'Kyaw Htet',
    featured: true,
    repo: 'https://github.com/kyawhtetyang/ArticleAnalyzer_SBERT'
  },
  {
    id: '8',
    name: 'Fake News Detector (BiLSTM)',
    subtitle: 'NLP classification model for fake news detection.',
    category: Category.Projects,
    icon: imgFakeNewsDetectorBiLstm,
    banner: imgFakeNewsDetectorBiLstm,
    overview: 'Sequence model that classifies news content using language patterns to detect misinformation.',
    stack: 'ML/Engine: TensorFlow BiLSTM + NLP Pipeline\nBackend: Flask (Python)\nPackaging: Docker',
    outcome: 'Created an end-to-end text classification pipeline for credibility screening experiments.',
    developer: 'Kyaw Htet',
    featured: true,
    website: 'https://fake-news.kyawhtet.com',
    repo: 'https://github.com/kyawhtetyang/FakeNewsDetector_BiLSTM'
  },
  {
    id: '9',
    name: 'Movie Recommender (Hybrid)',
    subtitle: 'Hybrid recommendation engine for movie suggestions.',
    category: Category.Projects,
    icon: imgMovieRecommenderHybrid,
    banner: imgMovieRecommenderHybrid,
    overview: 'Recommendation engine combining collaborative and content-based strategies for personalized results.',
    stack: 'Frontend: Flask Templates\nBackend: Flask (Python)\nML/Engine: Hybrid Recommender (Scikit-learn)\nDatabase: SQLite',
    outcome: 'Improved recommendation relevance by blending multiple ranking signals.',
    developer: 'Kyaw Htet',
    featured: true,
    repo: 'https://github.com/kyawhtetyang/MovieRecommender_Hybrid'
  },
  {
    id: '10',
    name: 'Image Classifier (CNN)',
    subtitle: 'Convolutional neural network for image classification.',
    category: Category.Projects,
    icon: imgImageClassifierCnn,
    banner: imgImageClassifierCnn,
    overview: 'Computer vision classifier for image categories with model training and inference workflow.',
    stack: 'ML/Engine: PyTorch CNN + OpenCV\nBackend: Python Inference Pipeline',
    outcome: 'Delivered a practical baseline model for image recognition experimentation.',
    developer: 'Kyaw Htet',
    repo: 'https://github.com/kyawhtetyang/ImageClassifier_CNN'
  },
  {
    id: '11',
    name: 'Music App',
    subtitle: 'Apple-inspired music interface and interactions.',
    category: Category.Projects,
    icon: imgAppleMusic,
    banner: imgAppleMusic,
    overview: 'Frontend experience inspired by Apple Music with polished navigation and visual hierarchy.',
    stack: 'Frontend: React + TypeScript\nBackend: FastAPI\nDatabase/Storage: Postgres + Cloudflare R2',
    outcome: 'Demonstrated high-fidelity UI implementation and design-system consistency.',
    developer: 'Kyaw Htet',
    featured: true,
    website: 'https://music.kyawhtet.com',
    repo: 'https://github.com/kyawhtetyang/Music_App'
  },
  {
    id: '12',
    name: 'Files Organizer',
    subtitle: 'Smart local file organizer for daily workflow.',
    category: Category.Projects,
    icon: imgFileOrganizer,
    banner: imgFileOrganizer,
    overview: 'Desktop automation utility that organizes files using rule-based sorting for cleaner workspace management, built with a Tauri app shell.',
    stack: 'Frontend: React + TypeScript\nBackend: FastAPI (Python)\nEngine: File Automation Rules\nDesktop/Packaging: Tauri (.dmg)',
    outcome: 'Reduced repetitive manual organization and improved daily workflow speed.',
    developer: 'Kyaw Htet',
    featured: true,
    website: 'https://files.kyawhtet.com/',
    repo: 'https://github.com/kyawhtetyang/File_Organizer',
    downloadUrl: 'https://github.com/kyawhtetyang/File_Organizer/releases/download/v0.2.0/File.Organizer_0.2.0_aarch64.dmg'
  }
];
