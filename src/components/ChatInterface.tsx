import { ArrowUpRight, Sparkles } from "lucide-react";
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
  return (
    <div className="max-w-xl mx-auto px-4 pb-8 bg-transparent">
      <div className="mb-6 space-y-3 border border-purple-100 rounded-2xl p-4 shadow-lg bg-transparent backdrop-blur-sm">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white text-md rounded-xl p-4 shadow-sm flex items-center gap-3 cursor-pointer hover:shadow-md transition-all hover:scale-[1.02]"
          >
            <Sparkles className="text-purple-400" size={20} />
            <span>{question}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-white rounded-2xl p-4 shadow-lg h-16">
          {isSpacePressed ? (
            <AudioWaveform />
          ) : (
            <div className="flex items-center gap-3 h-full">
              <Sparkles className="text-purple-400" size={20} />
              <input
                type="text"
                placeholder="Ask anything about Hubilo"
                className="flex-1 outline-none"
              />
              <button className="text-purple-400">
                <ArrowUpRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
