import React from 'react';
import { AskMode } from '../../services/askClient';
import { ModeSelector } from './ModeSelector';

type ChatInputProps = {
  activeModeLabel: string;
  input: string;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  isDark: boolean;
  isModeMenuOpen: boolean;
  isSending: boolean;
  mode: AskMode;
  modeMenuRef: React.RefObject<HTMLDivElement | null>;
  modeOptions: Array<{ id: AskMode; label: string }>;
  onChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onModeSelect: (mode: AskMode) => void;
  onModeToggle: () => void;
  onSend: () => void;
};

export const ChatInput: React.FC<ChatInputProps> = ({
  activeModeLabel,
  input,
  inputRef,
  isDark,
  isModeMenuOpen,
  isSending,
  mode,
  modeMenuRef,
  modeOptions,
  onChange,
  onKeyDown,
  onModeSelect,
  onModeToggle,
  onSend,
}) => {
  return (
    <div
      className={`rounded-xl px-4 py-2.5 backdrop-blur ${
        isDark
          ? 'border border-white/10 bg-[#1f1f1f]/95 shadow-[0_24px_80px_rgba(0,0,0,0.28)]'
          : 'border border-black/10 bg-white/92 shadow-[0_18px_40px_rgba(15,23,42,0.10)]'
      }`}
    >
      <div className="flex items-end gap-3">
        <button
          type="button"
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
            isDark ? 'bg-white/5 text-[#d1d5db] hover:bg-white/10' : 'bg-black/5 text-[#4b5563] hover:bg-black/10'
          }`}
          aria-label="Add attachment"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5V19" strokeLinecap="round" />
            <path d="M5 12H19" strokeLinecap="round" />
          </svg>
        </button>

        <textarea
          ref={inputRef}
          rows={1}
          placeholder="Ask anything"
          value={input}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={onKeyDown}
          className={`min-h-[40px] max-h-28 flex-1 resize-none overflow-y-auto bg-transparent px-2 py-2 text-[15px] leading-7 outline-none ${
            isDark ? 'text-white placeholder:text-[#9ca3af]' : 'text-[#1d1d1f] placeholder:text-[#9ca3af]'
          }`}
        />

        <div className="flex items-center gap-2">
          <ModeSelector
            activeModeLabel={activeModeLabel}
            isDark={isDark}
            isOpen={isModeMenuOpen}
            mode={mode}
            modeMenuRef={modeMenuRef}
            options={modeOptions}
            onSelect={onModeSelect}
            onToggle={onModeToggle}
          />
          <button
            type="button"
            onClick={onSend}
            disabled={isSending}
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
              isDark
                ? 'bg-white/5 text-[#d1d5db] hover:bg-white/10'
                : 'bg-black/5 text-[#4b5563] hover:bg-black/10'
            }`}
            aria-label="Send message"
          >
            <svg
              className="h-5 w-5 translate-x-[1px] -translate-y-[1px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
