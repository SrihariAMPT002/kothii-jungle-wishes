import { Card, CardContent } from "@/components/ui/card";

export const MemoryTimeline = () => {
  const memories = [
    {
      year: "2017",
      title: "College Days & First Exams 📚",
      description: "When you became my study savior, helping me prepare for those nerve-wracking exams. Who knew that academic support would bloom into such a beautiful friendship?",
      emoji: "👩‍🎓",
      gradient: "bg-sunrise-gradient"
    },
    {
      year: "2018-2020",
      title: "Late Night Chats 🌙",
      description: "Endless conversations that made us lose track of time. From study stress to life dreams, we shared it all under the stars through our screens.",
      emoji: "💬",
      gradient: "bg-leaf-gradient"
    },
    {
      year: "2020-2022",
      title: "Laughter & Emoji Wars 😂",
      description: "Those hilarious moments when our chat was just a battlefield of emojis and inside jokes. Every conversation brought a new reason to smile!",
      emoji: "🤣",
      gradient: "bg-jungle-gradient"
    },
    {
      year: "2022-2023",
      title: "Support Through Tough Times 🫂",
      description: "When life got challenging, you always found me there as your silent cheerleader, and I found strength in knowing you were doing amazing things.",
      emoji: "💪",
      gradient: "bg-sunrise-gradient"
    },
    {
      year: "2024",
      title: "Quiet Bond, Lasting Love 💚",
      description: "Even though our daily chats became memories, the foundation of our friendship remains unshakeable. Some bonds don't need constant words to stay strong.",
      emoji: "🌳",
      gradient: "bg-leaf-gradient"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Memory Jungle 🕰️
          <div className="text-lg font-normal text-muted-foreground mt-4">
            A timeline of 7+ years of beautiful friendship
          </div>
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-jungle-gradient rounded-full hidden md:block"></div>
          
          {memories.map((memory, index) => (
            <div key={memory.year} className={`mb-12 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-warm items-center justify-center z-10">
                <span className="text-sm">{memory.emoji}</span>
              </div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="overflow-hidden shadow-jungle border-2 border-primary/20 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
                  <div className={`h-2 ${memory.gradient}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{memory.emoji}</span>
                      <div>
                        <h3 className="text-xl font-bold text-primary">{memory.title}</h3>
                        <p className="text-accent font-semibold">{memory.year}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{memory.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};