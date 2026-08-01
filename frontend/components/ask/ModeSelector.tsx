import React from 'react';
import { AskMode } from '../../services/askClient';

type ModeSelectorProps = {
  activeModeLabel: string;
  isDark: boolean;
  isOpen: boolean;
  mode: AskMode;
  modeMenuRef: React.RefObject<HTMLDivElement | null>;
  options: Array<{ id: AskMode; label: string }>;
  onSelect: (mode: AskMode) => void;
  onToggle: () => void;
};

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  activeModeLabel,
  isDark,
  isOpen,
  mode,
  modeMenuRef,
  options,
  onSelect,
  onToggle,
}) => {
  return (
    <div className="relative" ref={modeMenuRef}>
      <button
        type="button"
        onClick={onToggle}
        className={`inline-flex h-9 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors ${
          isDark ? 'bg-white/5 text-[#d1d5db] hover:bg-white/10' : 'bg-black/5 text-[#4b5563] hover:bg-black/10'
        }`}
      >
        <span>{activeModeLabel}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 8L10 13L15 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen ? (
        <div
          className={`absolute bottom-12 right-0 z-30 min-w-[190px] overflow-hidden rounded-xl border py-2 shadow-[0_18px_50px_rgba(0,0,0,0.18)] ${
            isDark ? 'border-white/10 bg-[#1f1f1f]' : 'border-black/10 bg-white'
          }`}
        >
          {options.map((option) => {
            const active = option.id === mode;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelect(option.id)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                  active
                    ? isDark
                      ? 'bg-white/8 text-white'
                      : 'bg-black/[0.05] text-[#1d1d1f]'
                    : isDark
                      ? 'text-[#d1d5db] hover:bg-white/[0.05]'
                      : 'text-[#4b5563] hover:bg-black/[0.03]'
                }`}
              >
                <span>{option.label}</span>
                {active ? <span className="text-xs uppercase tracking-[0.16em]">On</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
