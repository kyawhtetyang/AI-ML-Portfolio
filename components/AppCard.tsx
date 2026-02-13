
import React from 'react';
import { AppInfo } from '../types';

interface AppCardProps {
  app: AppInfo;
  onClick: (app: AppInfo) => void;
  variant?: 'grid' | 'row' | 'featured';
}

export const AppCard: React.FC<AppCardProps> = ({ app, onClick, variant = 'grid' }) => {
  if (variant === 'featured') {
    return (
      <div 
        onClick={() => onClick(app)}
        className="relative group cursor-pointer w-full h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden transition-transform duration-300 active:scale-[0.98]"
      >
        <img 
          src={app.banner} 
          alt={app.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">{app.category}</p>
          <h3 className="text-white text-2xl font-bold mb-1 leading-tight">{app.name}</h3>
          <p className="text-white/80 text-sm line-clamp-1">{app.subtitle}</p>
        </div>
      </div>
    );
  }

  if (variant === 'row') {
    return (
      <div 
        onClick={() => onClick(app)}
        className="flex items-center gap-4 py-3 group cursor-pointer border-b border-gray-100 last:border-0 hover:bg-black/5 rounded-xl px-2 transition-colors"
      >
        <img 
          src={app.icon} 
          alt={app.name} 
          className="w-14 h-14 rounded-[22%] object-cover shadow-sm border border-black/5"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold truncate text-gray-900">{app.name}</h4>
          <p className="text-xs text-gray-500 truncate">{app.subtitle}</p>
        </div>
        <button className="px-5 py-1 bg-gray-100 text-blue-600 font-bold rounded-full text-sm hover:bg-gray-200 transition-colors">
          {app.price}
        </button>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(app)}
      className="flex flex-col gap-2 group cursor-pointer active:scale-[0.98] transition-transform"
    >
      <div className="relative aspect-square overflow-hidden rounded-[22%] border border-black/5 shadow-sm group-hover:shadow-md transition-shadow">
        <img 
          src={app.icon} 
          alt={app.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-900 truncate leading-tight">{app.name}</h4>
        <p className="text-xs text-gray-500 truncate">{app.category}</p>
      </div>
      <button className="mt-1 w-full md:w-auto self-start px-4 py-1 bg-gray-100 text-blue-600 font-bold rounded-full text-xs hover:bg-gray-200 transition-colors">
        {app.price}
      </button>
    </div>
  );
};
