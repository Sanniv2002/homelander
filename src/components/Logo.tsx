export function Logo() {
  return (
    <div className="flex items-center justify-center pt-8">
      <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center
                      shadow-[0_0_10px_rgba(255,165,0,0.6)]">
                              <img 
        src="/DexyAI_logo.png" 
        alt="Customer Service Representative" 
        className="w-[60px] h-[60px] object-cover"
      />
        {/* <span className="font-bold text-lg">Homelander</span> */}
      </div>
    </div>
  );
}
