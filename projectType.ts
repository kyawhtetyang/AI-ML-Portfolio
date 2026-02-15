import { AppInfo } from './types';

export type ProjectFilter = 'Featured' | 'All' | 'AI/ML' | 'Python' | 'Web App' | 'Desktop App';

export const PROJECT_FILTERS: ProjectFilter[] = ['Featured', 'All', 'AI/ML', 'Python', 'Web App', 'Desktop App'];

export const getProjectFilterType = (app: AppInfo): ProjectFilter => {
  const text = `${app.name} ${app.subtitle} ${app.overview} ${app.stack}`.toLowerCase();

  if (text.includes('ai/ml portfolio') || text.includes('aiml portfolio')) {
    return 'AI/ML';
  }

  if (text.includes('fastapi crud')) {
    return 'Python';
  }

  if (text.includes('flask pos inventory')) {
    return 'Python';
  }

  if (text.includes('music app')) {
    return 'Web App';
  }

  if (text.includes('files organizer') || text.includes('file organizer')) {
    return 'Desktop App';
  }

  if (
    text.includes('ml') ||
    text.includes('ai') ||
    text.includes('nlp') ||
    text.includes('cnn') ||
    text.includes('lstm') ||
    text.includes('sbert') ||
    text.includes('recommender') ||
    text.includes('regression')
  ) {
    return 'AI/ML';
  }

  if (
    text.includes('automation') ||
    text.includes('workflow') ||
    text.includes('organizer') ||
    text.includes('inventory')
  ) {
    return 'Desktop App';
  }

  if (
    text.includes('flask') ||
    text.includes('fastapi') ||
    text.includes('api') ||
    text.includes('backend')
  ) {
    return 'Python';
  }

  return 'Web App';
};
