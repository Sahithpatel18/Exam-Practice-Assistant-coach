import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Subject } from "@/types/question";
import {
  Calculator,
  Beaker,
  Clock,
  BookOpen,
  Globe,
  Brain,
  Lightbulb,
  Atom,
  Dna,
  Code,
  Music,
  Palette,
  Rocket,
  Globe2,
  Users,
} from "lucide-react";
import heroEducationImage from "@/assets/hero-education.jpg";
import { DocumentUpload } from "./DocumentUpload";

interface SubjectSelectorProps {
  onSelect: (subject: Subject) => void;
}

const popularSubjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: Calculator,
    description: "Algebra, Geometry, Calculus, Statistics",
  },
  {
    id: "physics",
    name: "Physics",
    icon: Atom,
    description: "Mechanics, Thermodynamics, Quantum Physics",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: Beaker,
    description: "Organic, Inorganic, Physical Chemistry",
  },
  {
    id: "biology",
    name: "Biology",
    icon: Dna,
    description: "Cell Biology, Genetics, Ecology, Evolution",
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: Code,
    description: "Programming, Algorithms, Data Structures",
  },
  {
    id: "history",
    name: "History",
    icon: Clock,
    description: "World History, Ancient Civilizations",
  },
  {
    id: "literature",
    name: "Literature",
    icon: BookOpen,
    description: "Classic Literature, Poetry, Analysis",
  },
  {
    id: "geography",
    name: "Geography",
    icon: Globe2,
    description: "Physical Geography, Human Geography",
  },
  {
    id: "psychology",
    name: "Psychology",
    icon: Brain,
    description: "Cognitive Psychology, Social Psychology",
  },
  {
    id: "philosophy",
    name: "Philosophy",
    icon: Lightbulb,
    description: "Ethics, Logic, Metaphysics",
  },
  {
    id: "music-theory",
    name: "Music Theory",
    icon: Music,
    description: "Harmony, Composition, Music History",
  },
  {
    id: "art-history",
    name: "Art History",
    icon: Palette,
    description: "Renaissance, Modern Art, Techniques",
  },
  {
    id: "astronomy",
    name: "Astronomy",
    icon: Rocket,
    description: "Planetary Science, Cosmology, Astrophysics",
  },
  {
    id: "sociology",
    name: "Sociology",
    icon: Users,
    description: "Social Theory, Cultural Studies",
  },
];

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  onSelect,
}) => {
  const [customSubject, setCustomSubject] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleCustomSubmit = () => {
    if (customSubject.trim()) {
      onSelect(customSubject.trim());
    }
  };

  const handleDocumentExtracted = (text: string, filename: string) => {
    // Pass the extracted text as a special subject format or store it in state
    // For now, we'll pass it as a custom subject with a prefix
    onSelect(`DOCUMENT_CONTEXT:${filename}:${text}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="relative mb-8">
          <img
            src={heroEducationImage}
            alt="Educational learning illustration"
            className="mx-auto rounded-3xl shadow-strong max-w-2xl w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero/20 rounded-3xl"></div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
          AI Question Generator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Generate questions on ANY subject or theory! Choose from popular
          topics or enter your own custom subject. Perfect for studying any
          field of knowledge.
        </p>
      </div>

      {/* Custom Subject Input */}
      <div className="max-w-2xl mx-auto mb-12">
        <DocumentUpload onTextExtracted={handleDocumentExtracted} />

        <Card className="shadow-medium border-0 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span>Custom Subject or Theory</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter any subject, theory, or topic (e.g., 'Quantum Mechanics', 'Ancient Rome', 'Machine Learning')"
                  value={customSubject}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleCustomSubmit()}
                  className="flex-1 text-lg"
                />
                <Button
                  onClick={handleCustomSubmit}
                  disabled={!customSubject.trim()}
                  variant="gradient"
                  size="lg"
                >
                  Generate Questions
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                💡 Try: "Photosynthesis", "World War II", "JavaScript
                Programming", "Human Anatomy", "Economic Theory"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Subjects */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Or Choose from Popular Subjects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularSubjects.map((subject) => (
            <Card
              key={subject.id}
              className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft group"
              onClick={() => onSelect(subject.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-primary w-14 h-14 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-200">
                  <subject.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  {subject.description}
                </p>
                <Button
                  variant="ghost"
                  className="w-full text-primary hover:bg-primary/10"
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Exams Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Popular Exams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-medium border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-strong transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">
                JEE Main Mock Exam
              </CardTitle>
              <p className="text-blue-600/80">Joint Entrance Examination</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <BookOpen className="mr-2 h-4 w-4" /> Physics, Chemistry,
                  Mathematics
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Brain className="mr-2 h-4 w-4" /> 25 Questions
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" /> Hard Difficulty
                </div>
              </div>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => onSelect("JEE Main Mock Exam")}
              >
                Start Mock Exam
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-strong transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                NEET Mock Exam
              </CardTitle>
              <p className="text-green-600/80">
                National Eligibility cum Entrance Test
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Dna className="mr-2 h-4 w-4" /> Physics, Chemistry, Biology
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Brain className="mr-2 h-4 w-4" /> 25 Questions
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" /> Hard Difficulty
                </div>
              </div>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => onSelect("NEET Mock Exam")}
              >
                Start Mock Exam
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Difficulty Levels</h3>
            <p className="text-muted-foreground">
              Easy, Medium, and Hard questions adapted to your skill level
            </p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Question Types</h3>
            <p className="text-muted-foreground">
              Multiple choice, true/false, fill-in-the-blank, and short answer
            </p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-gradient-success rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">∞</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Unlimited Practice</h3>
            <p className="text-muted-foreground">
              Generate as many questions as you need for effective learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
