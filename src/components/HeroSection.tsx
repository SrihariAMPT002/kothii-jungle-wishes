import jungleBg from "@/assets/jungle-bg.jpg";
import monkeyCharacter from "@/assets/monkey-character.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${jungleBg})` }}
    >
      {/* Jungle Overlay */}
      <div className="absolute inset-0 bg-jungle-gradient opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Monkey Character */}
        <div className="mb-8 flex justify-center">
          <img 
            src={monkeyCharacter} 
            alt="Kothii the Monkey" 
            className="w-40 h-40 rounded-full object-cover shadow-jungle animate-bounce-gentle"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Happy Birthday, 
          <span className="block text-accent animate-pulse-warm">Dear Jhansi (Kothii)! 🐵</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up font-medium">
          From exam buddies to lifelong friends 📚✨
        </p>
        
        {/* Birthday Message */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 animate-fade-in-up">
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Seven years of friendship, countless memories, and endless support... 
            <br />
            Today we celebrate not just your birthday, but the beautiful bond we share! 🌟
            <br />
            <span className="text-accent font-medium">With love from Tagili</span>
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse-warm"></div>
          </div>
          <p className="text-white/80 text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 text-4xl animate-sway">🌿</div>
      <div className="absolute top-40 right-20 text-3xl animate-bounce-gentle">🍌</div>
      <div className="absolute bottom-40 left-10 text-3xl animate-sway">🌺</div>
      <div className="absolute bottom-20 right-40 text-4xl animate-pulse-warm">🦋</div>
    </section>
  );
};