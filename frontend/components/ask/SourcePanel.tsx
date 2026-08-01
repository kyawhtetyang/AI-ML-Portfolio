import React from 'react';
import { AskSource } from '../../services/askClient';

type SourcePanelProps = {
  isDark: boolean;
  sources: AskSource[];
};

export const SourcePanel: React.FC<SourcePanelProps> = ({ isDark, sources }) => {
  if (!sources.length) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div
        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
          isDark ? 'text-[#9ca3af]' : 'text-[#6b7280]'
        }`}
      >
        Sources
      </div>
      <div className="grid gap-2">
        {sources.map((source, sourceIndex) => (
          <div
            key={`${source.path}-${sourceIndex}`}
            className={`rounded-2xl border px-4 py-3 ${
              isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.03]'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                {source.title}
              </div>
              <div
                className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                  isDark ? 'bg-white/8 text-[#d1d5db]' : 'bg-black/[0.06] text-[#4b5563]'
                }`}
              >
                {source.category}
              </div>
            </div>
            <div className={`mt-2 text-xs leading-6 ${isDark ? 'text-[#cbd5e1]' : 'text-[#4b5563]'}`}>
              {source.excerpt}
            </div>
            <div className={`mt-2 text-[11px] ${isDark ? 'text-[#9ca3af]' : 'text-[#6b7280]'}`}>
              {source.path}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
