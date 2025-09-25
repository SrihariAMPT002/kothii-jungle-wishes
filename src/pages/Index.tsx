import { HeroSection } from "@/components/HeroSection";
import { MemoryTimeline } from "@/components/MemoryTimeline";
import { PersonalLetter } from "@/components/PersonalLetter";
import { FinalGoodbye } from "@/components/FinalGoodbye";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MemoryTimeline />
      <PersonalLetter />
      <FinalGoodbye />
    </div>
  );
};

export default Index;