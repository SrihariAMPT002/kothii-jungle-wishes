import { Card, CardContent } from "@/components/ui/card";

export const PersonalLetter = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            A Note from Your Favorite Monkey Fan 🐒
          </h2>
          <p className="text-xl text-muted-foreground">
            A heartfelt message from Tagili, written with love and admiration
          </p>
        </div>
        
        <Card className="shadow-jungle border-2 border-accent/30 overflow-hidden">
          <div className="h-3 bg-sunrise-gradient"></div>
          <CardContent className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/20">
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="text-xl font-medium text-primary">
                Dear Jhansi (my wonderful Kothii), 💚
              </p>
              
              <p>
                As I write this, I can't help but smile thinking about our incredible journey together. 
                Seven years ago, when you first helped me with those challenging exams, I never imagined 
                that our academic partnership would blossom into such a precious friendship.
              </p>
              
              <p>
                You've always been more than just a friend to me – you've been a source of strength, 
                laughter, and endless positivity. Even during those late-night study sessions when we were 
                both exhausted, you somehow managed to keep our spirits up with your infectious energy 
                and those hilarious conversations that would make us forget our fatigue.
              </p>
              
              <p>
                I know we don't talk as much as we used to, and life has taken us on different paths. 
                But please know that you've always had a silent cheerleader in me. Every achievement of yours, 
                every milestone you've crossed, every challenge you've overcome – I've been celebrating 
                from afar, sending you positive vibes across the distance.
              </p>
              
              <p className="font-medium text-primary">
                Your friendship has been one of those rare gifts that doesn't need daily maintenance to remain precious. 
                Like a strong tree in our memory jungle, it has deep roots that time and distance cannot shake. 🌳
              </p>
              
              <p>
                Today, on your special day, I want you to know that no matter how far apart life takes us, 
                you'll always have a special place in my heart. You're not just "Kothii" to me – you're 
                Jhansi, a reminder of genuine kindness, academic brilliance, and the beautiful person you've always been.
              </p>
              
              <p className="text-xl font-medium text-coral">
                May this new year of your life be filled with all the happiness, success, and joy that 
                you've brought into the lives of others. You deserve all the wonderful things this world has to offer! 
              </p>
              
              <div className="text-center mt-8 p-4 bg-accent/10 rounded-xl border border-accent/30">
                <p className="font-semibold text-primary text-xl">
                  Happy Birthday, Dear Jhansi (Kothii)! 🎉
                </p>
                <p className="text-muted-foreground mt-2">
                  With love, admiration, and endless good wishes,
                </p>
                <p className="text-secondary font-medium mt-1">
                  Your forever well-wisher and monkey fan, Tagili 🐒💚
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};