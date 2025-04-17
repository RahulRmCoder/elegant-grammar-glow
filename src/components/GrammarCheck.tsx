
import React, { useState, useRef, useEffect } from 'react';
import { useLyzrApi } from '@/hooks/useLyzrApi';
import ChatMessage from './ChatMessage';
import LoadingDots from './LoadingDots';
import { Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
  corrections?: Array<{
    original: string;
    suggestion: string;
    explanation?: string;
  }>;
}

const GrammarCheck: React.FC = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your grammar assistant. Send me any text, and I'll help check your grammar and suggest improvements.",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const { checkGrammar, loading } = useLyzrApi();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim() || loading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setText('');
    
    try {
      const result = await checkGrammar(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: result.response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        corrections: result.corrections
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error during grammar check:", error);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              content={msg.content}
              isUser={msg.isUser}
              timestamp={msg.timestamp}
              corrections={msg.corrections}
            />
          ))}
          {loading && (
            <div className="flex justify-start mb-4">
              <div className="bg-card text-card-foreground border rounded-2xl p-4">
                <LoadingDots />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-4 bg-background">
        <div className="flex items-end space-x-2">
          <div className="flex-1 relative">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to check grammar..."
              className="resize-none min-h-[80px] pr-12 bg-card border"
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute bottom-2 right-2 rounded-full"
              disabled={loading || !text.trim()}
            >
              {loading ? (
                <Sparkles className="h-4 w-4 animate-pulse-subtle" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-2 text-center">
          Press Enter to send, Shift+Enter for a new line
        </div>
      </form>
    </div>
  );
};

export default GrammarCheck;
