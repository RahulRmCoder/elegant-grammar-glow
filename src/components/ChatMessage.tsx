
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, User, Bot } from 'lucide-react';

export interface ChatMessageProps {
  content: string;
  isUser: boolean;
  timestamp?: string;
  status?: 'received' | 'processing' | 'error';
  corrections?: Array<{
    original: string;
    suggestion: string;
    explanation?: string;
  }>;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  isUser,
  timestamp,
  status = 'received',
  corrections = []
}) => {
  const hasCorrections = corrections.length > 0;
  
  return (
    <div 
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div 
        className={cn(
          "flex items-start max-w-[80%] md:max-w-[70%]",
          isUser ? "flex-row" : "flex-row-reverse"
        )}
      >
        <div 
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full shrink-0",
            isUser ? "bg-primary/10 ml-2" : "bg-secondary mr-2"
          )}
        >
          {isUser ? <User className="w-4 h-4 text-primary" /> : <Bot className="w-4 h-4" />}
        </div>
        
        <div>
          <div 
            className={cn(
              "rounded-2xl p-4", 
              isUser ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground border"
            )}
          >
            <div className="text-sm sm:text-base font-medium leading-relaxed">
              {content}
            </div>
            
            {hasCorrections && !isUser && (
              <div className="mt-3 border-t border-border/30 pt-3 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wide mb-2">Suggested Corrections:</h4>
                {corrections.map((correction, index) => (
                  <div key={index} className="text-sm bg-secondary/50 rounded-lg p-2 space-y-1">
                    <div className="flex items-start">
                      <div className="line-through text-muted-foreground font-medium">{correction.original}</div>
                      <div className="mx-2">→</div>
                      <div className="text-green-500 dark:text-green-400 font-medium">{correction.suggestion}</div>
                    </div>
                    {correction.explanation && (
                      <div className="text-xs text-muted-foreground pt-1">{correction.explanation}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex items-center mt-1 space-x-2">
            {timestamp && (
              <span className="text-xs text-muted-foreground">{timestamp}</span>
            )}
            {!isUser && status === 'received' && (
              <Check className="h-3 w-3 text-green-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
