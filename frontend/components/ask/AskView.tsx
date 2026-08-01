import React, { useEffect, useRef, useState } from 'react';
import { AskMode, sendAskMessage } from '../../services/askClient';
import { ThemeMode } from '../../state/userSettings';
import { ChatInput } from './ChatInput';
import { ChatMessage, MessageList } from './MessageList';

const getInitialMessages = (): Record<AskMode, ChatMessage[]> => ({
  chat: [],
  portfolio: [],
  research: [],
});

const MODE_OPTIONS: Array<{ id: AskMode; label: string }> = [
  { id: 'chat', label: 'Quick Chat' },
  { id: 'portfolio', label: 'Portfolio Q&A' },
  { id: 'research', label: 'Deep Research' },
];

type AskViewProps = {
  theme: ThemeMode;
};

export const AskView: React.FC<AskViewProps> = ({ theme }) => {
  const [messagesByMode, setMessagesByMode] = useState<Record<AskMode, ChatMessage[]>>(getInitialMessages);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<AskMode>('chat');
  const [isModeMenuOpen, setIsModeMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const modeMenuRef = useRef<HTMLDivElement | null>(null);
  const isDark = theme === 'dark';
  const messages = messagesByMode[mode];
  const hasMessages = messages.length > 0;
  const bottomCoverClass = isDark ? 'bg-[#0f1115]' : 'bg-[#f5f5f7]';
  const activeModeLabel = MODE_OPTIONS.find((option) => option.id === mode)?.label ?? 'Quick Chat';

  useEffect(() => {
    if (!isSending) {
      inputRef.current?.focus();
    }
  }, [isSending]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!modeMenuRef.current?.contains(event.target as Node)) {
        setIsModeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({
        block: 'end',
      });
    });
  }, [messages, isSending]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    setMessagesByMode((current) => ({
      ...current,
      [mode]: [...current[mode], { role: 'user', text: trimmed }],
    }));
    setInput('');
    setIsSending(true);

    try {
      const result = await sendAskMessage(trimmed, mode);
      setMessagesByMode((current) => ({
        ...current,
        [mode]: [
          ...current[mode],
          {
            role: 'assistant',
            text: result.answer,
            sources: result.used_sources,
          },
        ],
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong while contacting the Ask backend.';
      setMessagesByMode((current) => ({
        ...current,
        [mode]: [
          ...current[mode],
          {
            role: 'assistant',
            text: `I couldn't reach the ${activeModeLabel} backend path yet. ${message}`,
          },
        ],
      }));
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void handleSend();
    }
  };

  return (
    <div className={`${hasMessages ? 'pb-32 md:pb-28' : 'pb-0'} -mx-4 md:-mx-6 lg:-mx-6`}>
      <section className="flex h-[calc(100vh-9.5rem)] min-h-0 flex-col overflow-hidden">
        <div
          ref={messagesContainerRef}
          className={`ask-scrollbar-hidden min-h-0 flex-1 overflow-y-auto ${hasMessages ? 'pb-28 md:pb-32' : 'pb-0'}`}
        >
          <div className={`mx-auto w-full max-w-4xl px-6 md:px-8 ${hasMessages ? 'pt-16 md:pt-20' : 'pt-0'}`}>
            <MessageList isDark={isDark} messages={messages} />
            <div ref={messagesEndRef} aria-hidden="true" />
          </div>
        </div>
      </section>

      <div
        className={`left-0 right-0 z-20 px-4 md:left-20 md:px-8 lg:left-64 ${
          hasMessages ? 'fixed bottom-12 pb-2 md:bottom-0 md:pb-3' : 'absolute inset-y-0 flex items-center justify-center'
        }`}
      >
        {hasMessages ? (
          <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 ${bottomCoverClass} md:h-28`} />
        ) : null}
        <div className="mx-auto w-full max-w-4xl">
          {!hasMessages ? (
            <div className="mb-8 text-center">
              <h2 className={`text-4xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                What are you working on?
              </h2>
            </div>
          ) : null}

          <ChatInput
            activeModeLabel={activeModeLabel}
            input={input}
            inputRef={inputRef}
            isDark={isDark}
            isModeMenuOpen={isModeMenuOpen}
            isSending={isSending}
            mode={mode}
            modeMenuRef={modeMenuRef}
            modeOptions={MODE_OPTIONS}
            onChange={setInput}
            onKeyDown={handleKeyDown}
            onModeSelect={(nextMode) => {
              setMode(nextMode);
              setIsModeMenuOpen(false);
            }}
            onModeToggle={() => setIsModeMenuOpen((current) => !current)}
            onSend={() => {
              void handleSend();
            }}
          />

          <div className={`mt-3 flex items-center justify-center text-xs ${isDark ? 'text-[#6b7280]' : 'text-gray-500'}`}>
            {isSending ? `Thinking in ${activeModeLabel}...` : `${activeModeLabel} can make mistakes. Check important info.`}
          </div>
        </div>
      </div>
    </div>
  );
};
