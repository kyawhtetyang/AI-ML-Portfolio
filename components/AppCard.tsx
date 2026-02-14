import React from 'react';
import { AppInfo } from '../types';

interface AppCardProps {
  app: AppInfo;
  onClick: (app: AppInfo) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
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
