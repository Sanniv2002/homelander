import { useState } from 'react';
import { Sparkles, ChevronUp, ChevronDown, Mic, Send } from "lucide-react";
import { AudioWaveform } from "./AudioWaveform";

const questions = [
  "How does Hubilo enhance attendee experience?",
  "What integrations does Hubilo offer with CRM?",
  "Can you explain the lead scoring process in Hubilo?",
];

interface ChatInterfaceProps {
  isSpacePressed: boolean;
}

export function ChatInterface({ isSpacePressed }: ChatInterfaceProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSuggestionClick = (question: string) => {
    setInputValue(question);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full md:max-w-xl mx-auto px-4 pb-8 bg-transparent">
      {/* Fixed suggestions button */}
      <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => setShowSuggestions(!showSuggestions)}
          className=" backdrop-blur-sm
                    hover:scale-110 transition-transform duration-200
                    hover:shadow-lg"
        >
          {showSuggestions ?
            <ChevronDown size={16} className="text-purple-600" /> :
            <ChevronUp size={16} className="animate-bounce text-purple-600" />
          }
        </button>
      </div>

      {/* Suggestions panel */}
      <div className={`relative z-40 mb-6 space-y-3 border border-purple-200 rounded-2xl p-4 
                      shadow-lg bg-white/90 backdrop-blur-lg transition-all duration-300 
                      ease-in-out transform origin-bottom ${showSuggestions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}>
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => handleSuggestionClick(question)}
            className="bg-white text-md rounded-xl p-4 shadow-sm flex items-center gap-3 
                     cursor-pointer hover:shadow-md transition-all hover:scale-[1.02] 
                     hover:bg-purple-50 active:scale-95 active:bg-purple-100
                     group"
          >
            <Sparkles className="text-purple-500 flex-shrink-0 
                               group-hover:text-purple-600" size={20} />
            <span className="line-clamp-2 group-hover:text-purple-900">{question}</span>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <div className="relative z-30 flex items-center gap-3">
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg 
                       group hover:shadow-xl transition-all duration-300
                       hover:bg-white">
          {isSpacePressed ? (
            <AudioWaveform />
          ) : (
            <div className="flex items-center gap-3 h-full">
              <div className="p-2 rounded-full bg-purple-100 group-hover:bg-purple-200 
                            transition-colors duration-300">
                <Mic className="text-purple-500 flex-shrink-0 w-4 h-4" />
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything about Hubilo"
                className="flex-1 outline-none w-full bg-transparent"
              />
              <button className="p-2 rounded-full bg-purple-100 group-hover:bg-purple-200 
                               transition-all duration-300 hover:scale-110">
                <Send className="text-purple-500 w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Ambient gradient background */}
      <div className="absolute -inset-10 z-20">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-pink-500/10 
                       to-transparent rounded-full blur-2xl transform scale-150 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-purple-500/10 
                       to-transparent rounded-full blur-2xl transform scale-150 translate-x-1/4 
                       animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-radial from-indigo-500/20 via-purple-500/10 
                       to-transparent rounded-full blur-2xl transform scale-150 -translate-x-1/4 
                       animate-pulse"></div>
      </div>
    </div>
  );
}