
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface LyzrResponse {
  data: {
    response: string;
    corrections?: Array<{
      original: string;
      suggestion: string;
      explanation?: string;
    }>;
  };
}

export function useLyzrApi() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const checkGrammar = useCallback(async (text: string) => {
    if (!text.trim()) {
      return { response: "", corrections: [] };
    }

    setLoading(true);
    try {
      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-iPEOmf2biknSikwsVOh0xbDtT5nNkUx6'
        },
        body: JSON.stringify({
          user_id: "rahulrajasekharanmenon64325@gmail.com",
          agent_id: "6800a4e4270ac8c6e5bd87bf",
          session_id: "6800a4e4270ac8c6e5bd87bf",
          message: text
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Parse corrections from the response if available
      // This is a simplified example - you'll need to adapt this based on 
      // the actual structure of the Lyzr API response
      const corrections = parseCorrections(data.response || data.output || "");
      
      return {
        response: data.response || data.output || "No response from grammar checker.",
        corrections: corrections
      };
    } catch (error) {
      console.error("Grammar check API error:", error);
      toast({
        title: "Error checking grammar",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
      return { 
        response: "Sorry, I couldn't check your grammar at the moment. Please try again later.",
        corrections: [] 
      };
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // This is a placeholder function - you'll need to implement proper parsing
  // based on the actual structure of the Lyzr API response
  const parseCorrections = (response: string) => {
    // Simple example parsing - adjust based on actual API response format
    const corrections = [];
    
    // This is just a placeholder implementation
    // In a real implementation, you would parse the response to extract corrections
    if (response.includes("correction") || response.includes("suggest")) {
      // This is very simplified - you'll need to implement proper parsing logic
      // based on the actual format of your API's responses
      corrections.push({
        original: "Example error",
        suggestion: "Corrected example",
        explanation: "This is a placeholder. Actual corrections will be parsed from the API response."
      });
    }
    
    return corrections;
  };

  return { checkGrammar, loading };
}
