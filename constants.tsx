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
    icon: icon01,
    banner: icon01,
    overview: 'Authentication module with secure login/logout and protected routes for role-based access.',
    stack: 'Python, Flask, SQLite, Jinja2',
    outcome: 'Delivered a reusable auth foundation for Flask apps with clean session management.',
    developer: 'Kyaw Htet'
  },
  {
    id: '2',
    name: 'Flask Cloud Storage',
    subtitle: 'Upload, store, and manage files in cloud-like flow.',
    category: Category.Projects,
    icon: icon02,
    banner: icon02,
    overview: 'File upload and retrieval service with structured storage flow and user-friendly file listing.',
    stack: 'Python, Flask, File I/O, Bootstrap',
    outcome: 'Built a lightweight storage dashboard that reduces manual file handling time.',
    developer: 'Kyaw Htet'
  },
  {
    id: '3',
    name: 'Flask POS Inventory',
    subtitle: 'Point-of-sale and inventory management dashboard.',
    category: Category.Projects,
    icon: icon03,
    banner: icon03,
    overview: 'Inventory and transaction tracking for retail workflow with stock visibility and sales updates.',
    stack: 'Python, Flask, SQLAlchemy, Charting',
    outcome: 'Improved visibility of stock and sales operations in one central interface.',
    developer: 'Kyaw Htet'
  },
  {
    id: '4',
    name: 'Fake News Detector (BiLSTM)',
    subtitle: 'NLP classification model for fake news detection.',
    category: Category.Projects,
    icon: icon04,
    banner: icon04,
    overview: 'Sequence model that classifies news content using language patterns to detect misinformation.',
    stack: 'Python, TensorFlow, BiLSTM, NLP',
    outcome: 'Created an end-to-end text classification pipeline for credibility screening experiments.',
    developer: 'Kyaw Htet'
  },
  {
    id: '5',
    name: 'Article Analyzer (SBERT)',
    subtitle: 'Semantic article analysis using SBERT embeddings.',
    category: Category.Projects,
    icon: icon05,
    banner: icon05,
    overview: 'Semantic similarity engine for comparing article meaning and clustering related content.',
    stack: 'Python, SBERT, Transformers, Pandas',
    outcome: 'Enabled better article matching and semantic ranking for content analysis tasks.',
    developer: 'Kyaw Htet'
  },
  {
    id: '6',
    name: 'Movie Recommender (Hybrid)',
    subtitle: 'Hybrid recommendation engine for movie suggestions.',
    category: Category.Projects,
    icon: icon06,
    banner: icon06,
    overview: 'Recommendation engine combining collaborative and content-based strategies for personalized results.',
    stack: 'Python, Scikit-learn, Recommender Systems',
    outcome: 'Improved recommendation relevance by blending multiple ranking signals.',
    developer: 'Kyaw Htet'
  },
  {
    id: '7',
    name: 'Image Classifier (CNN)',
    subtitle: 'Convolutional neural network for image classification.',
    category: Category.Projects,
    icon: icon07,
    banner: icon07,
    overview: 'Computer vision classifier for image categories with model training and inference workflow.',
    stack: 'Python, PyTorch, CNN, OpenCV',
    outcome: 'Delivered a practical baseline model for image recognition experimentation.',
    developer: 'Kyaw Htet'
  },
  {
    id: '8',
    name: 'FastAPI CRUD',
    subtitle: 'REST API backend with CRUD operations.',
    category: Category.Projects,
    icon: icon08,
    banner: icon08,
    overview: 'Backend service with clean CRUD endpoints and maintainable API structure.',
    stack: 'Python, FastAPI, Pydantic, SQLite',
    outcome: 'Provided a reliable API template for rapid backend prototyping.',
    developer: 'Kyaw Htet'
  },
  {
    id: '9',
    name: 'AI/ML Portfolio',
    subtitle: 'Portfolio web app showcasing AI and software projects.',
    category: Category.Projects,
    icon: icon09,
    banner: icon09,
    overview: 'Personal portfolio experience that presents projects, skills, and collaboration channels clearly.',
    stack: 'React, TypeScript, Tailwind, Vite',
    outcome: 'Created a focused portfolio structure optimized for recruiters and clients.',
    developer: 'Kyaw Htet'
  },
  {
    id: '10',
    name: 'House Price Regression',
    subtitle: 'Machine learning model for housing price prediction.',
    category: Category.Projects,
    icon: icon10,
    banner: icon10,
    overview: 'Regression workflow for estimating property price from key housing features.',
    stack: 'Python, Scikit-learn, Regression, EDA',
    outcome: 'Built a reproducible ML pipeline for real-estate price modeling.',
    developer: 'Kyaw Htet'
  },
  {
    id: '11',
    name: 'Files Organizer',
    subtitle: 'Smart local file organizer for daily workflow.',
    category: Category.Projects,
    icon: icon11,
    banner: icon11,
    overview: 'Automation utility that organizes files using rule-based sorting for cleaner workspace management.',
    stack: 'Python, Automation, File System',
    outcome: 'Reduced repetitive manual organization and improved daily workflow speed.',
    developer: 'Kyaw Htet',
    website: 'https://files.kyawhtet.com/'
  },
  {
    id: '12',
    name: 'Apple Music Frontend',
    subtitle: 'Apple-inspired music interface and interactions.',
    category: Category.Projects,
    icon: icon12,
    banner: icon12,
    overview: 'Frontend experience inspired by Apple Music with polished navigation and visual hierarchy.',
    stack: 'React, TypeScript, UI Architecture',
    outcome: 'Demonstrated high-fidelity UI implementation and design-system consistency.',
    developer: 'Kyaw Htet',
    website: 'https://music.kyawhtet.com'
  }
];
