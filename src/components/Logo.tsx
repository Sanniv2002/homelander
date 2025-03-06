export function Logo() {
  return (
    <div className="flex items-center justify-center pt-8">
      <div className="relative group cursor-pointer">
        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl 
                      group-hover:blur-2xl transition-all duration-300 
                      animate-pulse"></div>
        
        {/* Logo container */}
        <div className="relative bg-white rounded-full w-32 h-32 
                      flex items-center justify-center
                      shadow-[0_0_15px_rgba(147,51,234,0.5)]
                      group-hover:shadow-[0_0_25px_rgba(147,51,234,0.7)]
                      transition-all duration-300 ease-in-out
                      group-hover:scale-110">
          <img 
            src="/DexyAI_logo.png" 
            alt="Customer Service Representative" 
            className="w-[60px] h-[60px] object-cover
                     group-hover:rotate-[360deg] 
                     transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}