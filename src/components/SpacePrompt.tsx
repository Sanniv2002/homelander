interface SpacePromptProps {
  spaceButtonAnimation: boolean;
}

export function SpacePrompt({ spaceButtonAnimation }: SpacePromptProps) {
  return (
    <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-lg overflow-hidden hidden lg:block">
      <img 
        src="/hello.png" 
        alt="Customer Service Representative" 
        className="w-[300px] h-[400px] object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md flex items-center gap-2">
        <span>Hold</span>
        <span 
          className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded transition-transform ${
            spaceButtonAnimation ? 'transform -translate-y-1' : ''
          }`}
        >
          Space
        </span>
        <span>to talk</span>
      </div>
    </div>
  );
}