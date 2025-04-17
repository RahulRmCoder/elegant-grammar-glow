
import React from 'react';
import GrammarCheck from './GrammarCheck';
import ThemeToggle from './ThemeToggle';
import { Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ChatInterface: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="border-b bg-card">
        <div className="container flex items-center justify-between p-4 h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h1 className="font-playfair text-xl font-semibold text-gradient">GrammarGuru</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="flex-1 container flex flex-col md:flex-row md:items-stretch overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden md:pr-0 md:pb-4">
          <div className="py-8 md:py-12 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold mb-4">
              Perfect Your <span className="text-gradient">Writing</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Get real-time grammar and style suggestions powered by advanced AI. Just type your text and get instant feedback.
            </p>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="flex-1 overflow-hidden rounded-lg border bg-card shadow-sm">
            <GrammarCheck />
          </div>
        </div>
      </main>
      
      <footer className="py-4 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Powered by Lyzr AI API ✨ {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default ChatInterface;
