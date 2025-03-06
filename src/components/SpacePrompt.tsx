interface SpacePromptProps {
  spaceButtonAnimation: boolean;
}

export function SpacePrompt({ spaceButtonAnimation }: SpacePromptProps) {
  return (
    <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-lg overflow-hidden hidden lg:block
                    hover:shadow-xl transition-all duration-300 group">
      <img 
        src="/hello.png" 
        alt="Customer Service Representative" 
        className="w-[200px] h-[300px] object-cover
                   group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 
                      shadow-md flex items-center gap-2
                      hover:bg-purple-50 transition-colors duration-300">
        <span className="text-sm">Hold</span>
        <span 
          className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded 
                     transition-all duration-300 text-sm ${
                       spaceButtonAnimation ? 'transform -translate-y-1 scale-110' : ''
                     }`}
        >
          Space
        </span>
        <span className="text-sm">to talk</span>
      </div>
    </div>
  );
}