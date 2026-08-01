import { AppInfo, ProjectDomain } from './app';

export type ProjectFilter = 'Featured' | 'All' | ProjectDomain;

export const PROJECT_FILTERS: ProjectFilter[] = ['Featured', 'All', 'AI/ML', 'Web', 'Desktop', 'Backend'];

export const getProjectFilterType = (app: AppInfo): ProjectDomain => app.domain;
