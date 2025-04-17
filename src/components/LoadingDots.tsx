
import React from 'react';

const LoadingDots: React.FC = () => {
  return (
    <div className="flex space-x-1 items-center">
      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
    </div>
  );
};

export default LoadingDots;
