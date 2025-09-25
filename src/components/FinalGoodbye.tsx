import jungleBirthday from "@/assets/jungle-birthday.jpg";

export const FinalGoodbye = () => {
  return (
    <section 
      className="py-20 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${jungleBirthday})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
          Until Next Swing Through the Trees... 🌳
        </h2>
        
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl">
          <div className="space-y-6 text-white">
            <div className="text-6xl animate-sway">🐒</div>
            
            <p className="text-xl md:text-2xl leading-relaxed font-medium">
              No matter how far apart the trees grow, 
              <br />
              true monkeys always find a way back to the same branch someday.
            </p>
            
            <div className="border-t border-white/30 pt-6 mt-8">
              <p className="text-lg mb-4">
                This website was made with 💚 to celebrate you and our amazing friendship.
              </p>
              <p className="text-accent text-xl font-bold animate-pulse-warm">
                Happy Birthday Again, Dear Jhansi (Kothii)! 🎉
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8 text-4xl">
              <span className="animate-bounce-gentle">🎂</span>
              <span className="animate-sway">🎈</span>
              <span className="animate-pulse-warm">🎁</span>
              <span className="animate-bounce-gentle">✨</span>
            </div>
            
            <div className="mt-8 p-6 bg-accent/20 rounded-2xl border border-accent/40">
              <p className="text-lg italic">
                "Some friendships are low-maintenance but high-impact. 
                <br />
                Even silent friends speak loud with their actions."
              </p>
              <p className="text-sm text-accent mt-2">- From your forever well-wisher, Tagili 🐒💚</p>
            </div>
          </div>
        </div>
        
        {/* Footer Elements */}
        <div className="mt-12 flex justify-center space-x-8 text-3xl">
          <span className="animate-sway">🌿</span>
          <span className="animate-bounce-gentle">🍌</span>
          <span className="animate-pulse-warm">🌺</span>
          <span className="animate-sway">🦋</span>
        </div>
        
        <p className="text-white/80 text-sm mt-8">
          Made with love, memories, and jungle vibes by Tagili for Jhansi 🌴
        </p>
      </div>
    </section>
  );
};