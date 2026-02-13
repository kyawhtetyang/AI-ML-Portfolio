
import React, { useEffect, useState } from 'react';
import { AppInfo, Review } from '../types';
import { generateAppInsights } from '../services/geminiService';

interface AppDetailModalProps {
  app: AppInfo | null;
  onClose: () => void;
}

export const AppDetailModal: React.FC<AppDetailModalProps> = ({ app, onClose }) => {
  const [insights, setInsights] = useState<{ editorial: string; reviews: Review[] } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (app) {
      setLoading(true);
      setInsights(null);
      generateAppInsights(app).then((data) => {
        setInsights(data);
        setLoading(false);
      });
    }
  }, [app]);

  if (!app) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        {/* Header - Sticky */}
        <div className="flex items-center justify-between p-4 md:p-6 bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <img src={app.icon} alt={app.name} className="w-16 h-16 rounded-[22%] shadow-md" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">{app.name}</h2>
              <p className="text-sm text-gray-500">{app.developer}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-6 py-1.5 bg-blue-600 text-white font-bold rounded-full text-sm hover:bg-blue-700 transition-colors">
              {app.price}
            </button>
            <button 
              onClick={onClose}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {/* Quick Stats */}
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100 text-center">
            <div className="flex-1 border-r border-gray-100 px-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Rating</p>
              <p className="text-lg font-bold text-gray-700">{app.rating} ★</p>
              <p className="text-[10px] text-gray-400">{app.reviewsCount} Reviews</p>
            </div>
            <div className="flex-1 border-r border-gray-100 px-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Age</p>
              <p className="text-lg font-bold text-gray-700">{app.ageRating}</p>
              <p className="text-[10px] text-gray-400">Years Old</p>
            </div>
            <div className="flex-1 px-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Category</p>
              <p className="text-lg font-bold text-gray-700 truncate">{app.category}</p>
              <p className="text-[10px] text-gray-400">Developer</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {app.description}
              </p>
              {app.website && (
                <a
                  href={app.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-4 px-4 py-2 rounded-full bg-[#fa233b] text-white text-sm font-semibold hover:bg-[#d91e33] transition-colors"
                >
                  Visit Website
                </a>
              )}
            </section>

            {/* AI Editorial Section */}
            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">AI Insights</span>
                <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Why We Love This</h3>
              </div>
              {loading ? (
                <div className="animate-pulse space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ) : (
                <p className="text-gray-700 italic font-medium">
                  {insights?.editorial}
                </p>
              )}
            </section>

            {/* Reviews Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Ratings & Reviews</h3>
                <button className="text-blue-600 text-sm font-medium hover:underline">See All</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? (
                   [1, 2, 3].map(i => (
                    <div key={i} className="p-4 bg-gray-50 rounded-xl h-32 animate-pulse" />
                   ))
                ) : (
                  insights?.reviews.map((review, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-sm truncate mr-2">{review.title}</h4>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-3 h-3 ${i < review.rating ? 'text-orange-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {review.content}
                      </p>
                      <p className="mt-3 text-[10px] text-gray-400 font-medium">By {review.author}</p>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
