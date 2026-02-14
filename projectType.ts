import { AppInfo } from './types';

export type ProjectFilter = 'All' | 'AI/ML' | 'Python' | 'Web App' | 'Automation';

export const PROJECT_FILTERS: ProjectFilter[] = ['All', 'AI/ML', 'Python', 'Web App', 'Automation'];

export const getProjectFilterType = (app: AppInfo): ProjectFilter => {
  const text = `${app.name} ${app.subtitle} ${app.overview} ${app.stack}`.toLowerCase();

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
    return 'Automation';
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
