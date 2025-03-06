interface SpacePromptProps {
  spaceButtonAnimation: boolean;
}

export function SpacePrompt({ spaceButtonAnimation }: SpacePromptProps) {
  return (
    <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-lg overflow-hidden hidden md:block">
      <img 
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop" 
        alt="Customer Service Representative" 
        className="w-[400px] h-[300px] object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2 shadow-md flex items-center gap-2">
        <span>Hold</span>
        <span 
          className={`bg-[#F4845F] text-white px-3 py-1 rounded transition-transform ${
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