import React from 'react';
import { AskSource } from '../../services/askClient';
import { SourcePanel } from './SourcePanel';

export type ChatMessage = {
  role: 'assistant' | 'user';
  text: string;
  sources?: AskSource[];
};

type MessageListProps = {
  isDark: boolean;
  messages: ChatMessage[];
};

const toPlainAssistantText = (text: string) =>
  text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1');

export const MessageList: React.FC<MessageListProps> = ({ isDark, messages }) => {
  return (
    <div className="space-y-6">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-[88%] space-y-3 md:max-w-[78%] ${message.role === 'user' ? '' : 'rounded-2xl'}`}>
            <div
              className={`rounded-xl text-[15px] whitespace-pre-wrap break-words ${
                message.role === 'user'
                  ? isDark
                    ? 'bg-white/[0.08] px-5 py-3 leading-7 text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)]'
                    : 'bg-[#e5e7eb] px-5 py-3 leading-7 text-[#1d1d1f] shadow-[0_12px_28px_rgba(15,23,42,0.08)]'
                  : isDark
                    ? 'bg-transparent px-0 py-0 leading-8 text-[#f3f4f6]'
                    : 'bg-transparent px-0 py-0 leading-8 text-[#1d1d1f]'
              }`}
            >
              {message.role === 'assistant' ? toPlainAssistantText(message.text) : message.text}
            </div>

            {message.role === 'assistant' ? (
              <SourcePanel isDark={isDark} sources={message.sources ?? []} />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};
