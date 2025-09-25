import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const BirthdayExam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();
  
  const questions = [
    {
      question: "What does 'Kothii' mean and who lovingly calls you that?",
      options: [
        "A) A cute nickname from a college friend",
        "B) Monkey in Telugu, from a special exam buddy",
        "C) A random word someone made up",
        "D) A character from a Telugu movie"
      ],
      correct: "B) Monkey in Telugu, from a special exam buddy",
      explanation: "It means 'monkey' in Telugu, and it comes from someone who has been your biggest supporter since college days! 🐒"
    },
    {
      question: "What's one thing that always made our study sessions memorable?",
      options: [
        "A) Serious, focused studying only",
        "B) Late-night chats that made time fly",
        "C) Competing to see who studies more",
        "D) Always studying in complete silence"
      ],
      correct: "B) Late-night chats that made time fly",
      explanation: "Those endless conversations were the best part! We'd start with exams and end up discussing life, dreams, and everything in between. 🌙💬"
    },
    {
      question: "Even when we don't talk daily, what remains constant?",
      options: [
        "A) Nothing, friendships fade with time",
        "B) Only academic memories",
        "C) The silent support and good wishes",
        "D) Just occasional birthday greetings"
      ],
      correct: "C) The silent support and good wishes",
      explanation: "True friendship doesn't need daily maintenance! You've always had a cheerleader rooting for you from afar. 💚🌟"
    },
    {
      question: "What's the BEST way to celebrate this birthday?",
      options: [
        "A) A big party with lots of people",
        "B) Eating bananas all day long 🍌",
        "C) Smiling, feeling loved, and remembering good friends",
        "D) Studying for more exams"
      ],
      correct: "C) Smiling, feeling loved, and remembering good friends",
      explanation: "While bananas are tempting (being a monkey and all 🐒), the real celebration is feeling all the love and warmth from people who care about you! 💕"
    }
  ];
  
  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 1000);
    }
    
    toast({
      title: answer === questions[currentQuestion].correct ? "Correct! 🎉" : "Nice try! 😊",
      description: questions[currentQuestion].explanation,
    });
  };
  
  const resetExam = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };
  
  const correctAnswers = answers.filter((answer, index) => 
    answer === questions[index].correct
  ).length;
  
  if (showResults) {
    return (
      <section className="py-20 px-6 bg-leaf-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="shadow-jungle border-2 border-accent overflow-hidden">
            <CardHeader className="bg-sunrise-gradient text-white">
              <CardTitle className="text-3xl">🎓 Exam Results for Kothii! 🎓</CardTitle>
            </CardHeader>
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="text-6xl animate-bounce-gentle">🏆</div>
                <h3 className="text-3xl font-bold text-primary">
                  Congratulations! You Passed! 🎉
                </h3>
                <p className="text-xl text-muted-foreground">
                  Score: {correctAnswers}/{questions.length} 
                  {correctAnswers === questions.length ? " - Perfect Score!" : " - Excellent!"}
                </p>
                
                <div className="bg-accent/20 rounded-xl p-8 border border-accent/40">
                  <div className="text-4xl mb-4">🍌</div>
                  <h4 className="text-2xl font-bold text-accent mb-4">Your Birthday Reward!</h4>
                  <p className="text-lg leading-relaxed">
                    Here's your virtual banana and a whole bunch of good vibes! 🐒✨
                    <br />
                    You've successfully proven that you remember our beautiful friendship journey. 
                    <br />
                    Now go out there and make this birthday as amazing as you are! 💚
                  </p>
                </div>
                
                <Button 
                  onClick={resetExam}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                >
                  Take the Exam Again 🔄
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 px-6 bg-leaf-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📝 Birthday Exam - For Kothii 📝
          </h2>
          <p className="text-xl text-white/90">
            A fun little quiz to test your memory of our friendship journey!
          </p>
          <div className="mt-4 text-white/80">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        
        <Card className="shadow-jungle border-2 border-white/30">
          <CardHeader className="bg-white">
            <CardTitle className="text-2xl text-primary">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left p-6 h-auto border-2 border-muted hover:border-primary hover:bg-primary/10 text-foreground"
                  onClick={() => handleAnswerSelect(option)}
                  disabled={!!answers[currentQuestion]}
                >
                  <span className="text-lg">{option}</span>
                </Button>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-8">
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-accent h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};