// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Question } from '@/types/question';
// import { Trophy, RefreshCw, CheckCircle, XCircle, Target, Clock } from 'lucide-react';

// interface ResultsScreenProps {
//   score: number;
//   totalQuestions: number;
//   answers: Record<string, string>;
//   questions: Question[];
//   onRestart: () => void;
// }

// export const ResultsScreen: React.FC<ResultsScreenProps> = ({
//   score,
//   totalQuestions,
//   answers,
//   questions,
//   onRestart,
// }) => {
//   const percentage = Math.round((score / totalQuestions) * 100);

//   const getScoreGrade = () => {
//     if (percentage >= 90) return { grade: 'A+', color: 'text-success', message: 'Outstanding!' };
//     if (percentage >= 80) return { grade: 'A', color: 'text-success', message: 'Excellent work!' };
//     if (percentage >= 70) return { grade: 'B', color: 'text-warning', message: 'Good job!' };
//     if (percentage >= 60) return { grade: 'C', color: 'text-warning', message: 'Keep practicing!' };
//     return { grade: 'D', color: 'text-destructive', message: 'Need more study!' };
//   };

//   const { grade, color, message } = getScoreGrade();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Results Header */}
//         <div className="text-center mb-12">
//           <div className="w-32 h-32 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center shadow-strong">
//             <Trophy className="h-16 w-16 text-white" />
//           </div>

//           <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
//             Quiz Complete!
//           </h1>

//           <div className="bg-card rounded-3xl p-8 shadow-medium mb-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//               <div>
//                 <div className={`text-6xl font-bold mb-2 ${color}`}>
//                   {percentage}%
//                 </div>
//                 <div className="text-muted-foreground">Final Score</div>
//               </div>

//               <div>
//                 <div className={`text-6xl font-bold mb-2 ${color}`}>
//                   {grade}
//                 </div>
//                 <div className="text-muted-foreground">Grade</div>
//               </div>

//               <div>
//                 <div className="text-3xl font-bold mb-2 text-foreground">
//                   {score}/{totalQuestions}
//                 </div>
//                 <div className="text-muted-foreground">Questions Correct</div>
//               </div>
//             </div>

//             <div className="mt-6 pt-6 border-t border-border">
//               <p className={`text-xl font-semibold ${color}`}>{message}</p>
//             </div>
//           </div>
//         </div>

//         {/* Question Review */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Review Your Answers</h2>

//           <div className="space-y-4">
//             {questions.map((question, index) => {
//               const userAnswer = answers[question.id];
//               const isCorrect = Array.isArray(question.correctAnswer)
//                 ? question.correctAnswer.includes(userAnswer)
//                 : question.correctAnswer.toLowerCase() === userAnswer?.toLowerCase();

//               return (
//                 <Card key={question.id} className="shadow-soft border-0">
//                   <CardHeader className="pb-3">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center space-x-3">
//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
//                           isCorrect ? 'bg-success' : 'bg-destructive'
//                         }`}>
//                           {index + 1}
//                         </div>
//                         <CardTitle className="text-lg">{question.question}</CardTitle>
//                       </div>

//                       <div className="flex items-center space-x-2">
//                         {isCorrect ? (
//                           <div className="flex items-center space-x-1 text-success">
//                             <CheckCircle className="h-4 w-4" />
//                             <span className="text-sm font-medium">Correct</span>
//                           </div>
//                         ) : (
//                           <div className="flex items-center space-x-1 text-destructive">
//                             <XCircle className="h-4 w-4" />
//                             <span className="text-sm font-medium">Incorrect</span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </CardHeader>

//                   <CardContent>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <div className="text-sm text-muted-foreground mb-1">Your Answer:</div>
//                         <div className={`font-medium ${isCorrect ? 'text-success' : 'text-destructive'}`}>
//                           {userAnswer || 'No answer provided'}
//                         </div>
//                       </div>

//                       <div>
//                         <div className="text-sm text-muted-foreground mb-1">Correct Answer:</div>
//                         <div className="font-medium text-success">
//                           {Array.isArray(question.correctAnswer)
//                             ? question.correctAnswer.join(', ')
//                             : question.correctAnswer
//                           }
//                         </div>
//                       </div>
//                     </div>

//                     {question.explanation && (
//                       <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
//                         <div className="text-sm text-muted-foreground mb-1">Explanation:</div>
//                         <p className="text-sm">{question.explanation}</p>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>

//         {/* Performance Stats */}
//         <Card className="shadow-medium border-0 mb-8">
//           <CardHeader>
//             <CardTitle className="text-center">Performance Analysis</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//               <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mb-3">
//                   <CheckCircle className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-success">{score}</div>
//                 <div className="text-sm text-muted-foreground">Correct Answers</div>
//               </div>

//               <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-3">
//                   <Target className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-primary">{percentage}%</div>
//                 <div className="text-sm text-muted-foreground">Accuracy Rate</div>
//               </div>

//               <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-3">
//                   <Clock className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-accent">{totalQuestions}</div>
//                 <div className="text-sm text-muted-foreground">Total Questions</div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Action Buttons */}
//         <div className="text-center">
//           <Button
//             onClick={onRestart}
//             variant="hero"
//             size="lg"
//             className="min-w-48"
//           >
//             <RefreshCw className="h-5 w-5 mr-2" />
//             Take Another Quiz
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

//chatgpt code
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from "@/types/question";
import {
  Trophy,
  RefreshCw,
  CheckCircle,
  XCircle,
  Target,
  Clock,
  Loader2,
  FileDown,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  answers: Record<string, string>;
  questions: Question[];
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  totalQuestions,
  answers,
  questions,
  onRestart,
}) => {
  const [feedback, setFeedback] = useState<any>(null);
  const [isGeneratingFeedback, setIsGeneratingFeedback] = useState(false);
  const [studyPlan, setStudyPlan] = useState<any>(null);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);

  // 🔥 NEW CLEANING FUNCTION
  const clean = (text: string) =>
    text
      ?.toString()
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, "");

  // 🔥 UNIVERSAL CORRECTNESS CHECKER
  const isCorrectAnswer = (correct: any, user: string) => {
    if (!correct || !user) return false;

    // MCQ: correctAnswer may be an array
    if (Array.isArray(correct)) {
      return correct.some((c) => clean(c) === clean(user));
    }

    // Normal: compare text
    return clean(correct) === clean(user);
  };

  // 🔥 FIX SCORE CALCULATION HERE
  const correctCount = questions.reduce((acc, q) => {
    const userAnswer = answers[q.id];
    return isCorrectAnswer(q.correctAnswer, userAnswer) ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const getScoreGrade = () => {
    if (percentage >= 90)
      return { grade: "A+", color: "text-success", message: "Outstanding!" };
    if (percentage >= 80)
      return { grade: "A", color: "text-success", message: "Excellent work!" };
    if (percentage >= 70)
      return { grade: "B", color: "text-warning", message: "Good job!" };
    if (percentage >= 60)
      return { grade: "C", color: "text-warning", message: "Keep practicing!" };
    return {
      grade: "D",
      color: "text-destructive",
      message: "Need more study!",
    };
  };

  const { grade, color, message } = getScoreGrade();

  const getBase64ImageFromUrl = async (url: string): Promise<string> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const addPDFHeader = async (doc: jsPDF) => {
    try {
      const logoData = await getBase64ImageFromUrl("/public/Logo.jpg");
      doc.addImage(logoData, "JPEG", 15, 10, 15, 15);
    } catch (error) {
      console.error("Could not load logo for PDF", error);
    }
    doc.setFontSize(20);
    doc.setTextColor(33, 37, 41);
    doc.text("Personalized Learning AI Assistant", 35, 20);
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200);
    doc.line(15, 30, 195, 30);
  };

  const generateSchedulePDF = async () => {
    if (!studyPlan) return;
    const doc = new jsPDF();
    await addPDFHeader(doc);

    doc.setFontSize(16);
    doc.text("7-Day Learning & Revision Plan", 15, 45);

    let yPos = 55;

    studyPlan.forEach((day: any) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(14);
      doc.setTextColor(33, 37, 41);
      doc.text(`Day ${day.day}: ${day.focus}`, 15, yPos);
      yPos += 8;

      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      day.activities.forEach((activity: string) => {
        const lines = doc.splitTextToSize(`• ${activity}`, 170);
        doc.text(lines, 20, yPos);
        yPos += lines.length * 6;
      });
      yPos += 5;
    });

    doc.save("7-Day-Study-Plan.pdf");
  };

  const generateComprehensivePDF = async () => {
    const doc = new jsPDF();
    await addPDFHeader(doc);

    let yPos = 45;

    // 1. Performance Summary
    doc.setFontSize(16);
    doc.setTextColor(33, 37, 41);
    doc.text("Performance Summary", 15, yPos);
    yPos += 10;

    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);
    doc.text(
      `Score: ${correctCount}/${totalQuestions} (${percentage}%) - Grade: ${grade}`,
      15,
      yPos,
    );
    yPos += 8;

    if (feedback) {
      const summaryLines = doc.splitTextToSize(feedback.overall_summary, 180);
      doc.text(summaryLines, 15, yPos);
      yPos += summaryLines.length * 6 + 5;

      doc.setFontSize(12);
      doc.setTextColor(40, 167, 69); // Success text color
      doc.text(
        `Strong Topics: ${feedback.strong_topics.join(", ") || "None"}`,
        15,
        yPos,
      );
      yPos += 8;

      doc.setTextColor(220, 53, 69); // Destructive text color
      doc.text(
        `Weak Topics: ${feedback.weak_topics.join(", ") || "None"}`,
        15,
        yPos,
      );
      yPos += 15;
    }

    // 2. Study Plan (if available)
    if (studyPlan) {
      doc.addPage();
      await addPDFHeader(doc);
      yPos = 45;

      doc.setFontSize(16);
      doc.setTextColor(33, 37, 41);
      doc.text("7-Day Learning & Revision Plan", 15, yPos);
      yPos += 10;

      studyPlan.forEach((day: any) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.setFontSize(14);
        doc.setTextColor(33, 37, 41);
        doc.text(`Day ${day.day}: ${day.focus}`, 15, yPos);
        yPos += 8;

        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        day.activities.forEach((activity: string) => {
          const lines = doc.splitTextToSize(`• ${activity}`, 170);
          doc.text(lines, 20, yPos);
          yPos += lines.length * 6;
        });
        yPos += 5;
      });
    }

    // 3. Question Review
    doc.addPage();
    await addPDFHeader(doc);
    yPos = 45;

    doc.setFontSize(16);
    doc.setTextColor(33, 37, 41);
    doc.text("Question Review", 15, yPos);
    yPos += 10;

    questions.forEach((q, i) => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      const userAnswer = answers[q.id];
      const correct = isCorrectAnswer(q.correctAnswer, userAnswer);

      doc.setFontSize(12);
      doc.setTextColor(33, 37, 41);
      const qLines = doc.splitTextToSize(`${i + 1}. ${q.question}`, 180);
      doc.text(qLines, 15, yPos);
      yPos += qLines.length * 6 + 2;

      doc.setFontSize(11);
      if (correct) {
        doc.setTextColor(40, 167, 69);
        doc.text(`Your Answer: ${userAnswer} (Correct)`, 20, yPos);
      } else {
        doc.setTextColor(220, 53, 69);
        doc.text(`Your Answer: ${userAnswer || "None"} (Incorrect)`, 20, yPos);
        yPos += 6;
        doc.setTextColor(40, 167, 69);
        doc.text(
          `Correct Answer: ${Array.isArray(q.correctAnswer) ? q.correctAnswer.join(", ") : q.correctAnswer}`,
          20,
          yPos,
        );
      }
      yPos += 8;

      if (q.explanation) {
        doc.setTextColor(100, 100, 100);
        const expLines = doc.splitTextToSize(
          `Explanation: ${q.explanation}`,
          175,
        );
        doc.text(expLines, 20, yPos);
        yPos += expLines.length * 6;
      }
      yPos += 5;
    });

    doc.save("Comprehensive-Exam-Report.pdf");
  };

  useEffect(() => {
    const saveExamAndGenerateFeedback = async () => {
      if (questions.length === 0) return;

      setIsGeneratingFeedback(true);
      try {
        // 1. Save Exam to Supabase
        const subject = questions[0].subject;
        const difficulty = questions[0].difficulty;

        const { data: examData, error: examError } = await supabase
          .from("exams")
          .insert([
            {
              subject: subject.startsWith("DOCUMENT_CONTEXT:")
                ? "Document Upload"
                : subject,
              difficulty,
              score: correctCount,
              total_questions: totalQuestions,
            },
          ])
          .select()
          .single();

        if (examError) {
          console.error("Error saving exam:", examError);
          // Continue anyway to generate feedback
        }

        // 2. Generate Feedback using Groq
        const prompt = `
Analyze this exam performance and provide feedback in JSON format.
Subject: ${subject.startsWith("DOCUMENT_CONTEXT:") ? "Document Upload" : subject}
Score: ${correctCount}/${totalQuestions}
Questions and Answers:
${questions.map((q, i) => `Q: ${q.question}\nCorrect: ${q.correctAnswer}\nUser Answer: ${answers[q.id] || "None"}`).join("\n\n")}

Return ONLY valid JSON in this format:
{
  "overall_summary": "A brief 2-sentence summary of performance.",
  "strong_topics": ["Topic 1", "Topic 2"],
  "weak_topics": ["Topic 3", "Topic 4"]
}
`;

        const response = await fetch("http://localhost:5000/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        const data = await response.json();

        // Parse JSON safely
        let parsedFeedback;
        try {
          const str = data.message;
          const start = str.indexOf("{");
          const end = str.lastIndexOf("}");
          if (start !== -1 && end !== -1) {
            parsedFeedback = JSON.parse(str.substring(start, end + 1));
          } else {
            parsedFeedback = JSON.parse(str);
          }
        } catch (e) {
          console.error("Failed to parse feedback JSON", e);
          parsedFeedback = {
            overall_summary:
              "Good effort! Keep practicing to improve your score.",
            strong_topics: ["General Knowledge"],
            weak_topics: ["Specific Details"],
          };
        }

        setFeedback(parsedFeedback);

        // 3. Save Feedback to Supabase
        if (examData) {
          await supabase.from("exam_feedback").insert([
            {
              exam_id: examData.id,
              strong_topics: parsedFeedback.strong_topics,
              weak_topics: parsedFeedback.weak_topics,
              overall_summary: parsedFeedback.overall_summary,
            },
          ]);
        }
      } catch (error) {
        console.error("Error in feedback generation:", error);
      } finally {
        setIsGeneratingFeedback(false);
      }
    };

    saveExamAndGenerateFeedback();
  }, []);

  const generateStudyPlan = async () => {
    if (!feedback) return;
    setIsGeneratingPlan(true);

    try {
      const prompt = `
Create a personalized 7-day study plan based on this feedback:
Strong Topics: ${feedback.strong_topics.join(", ")}
Weak Topics: ${feedback.weak_topics.join(", ")}

Rules:
- Days 1-4: Targeted learning for weak topics.
- Days 5-6: Revision activities for strong topics.
- Day 7: Comprehensive assessment.

Return ONLY valid JSON in this format:
{
  "plan": [
    { "day": 1, "focus": "Weak Topic", "activities": ["Activity 1", "Activity 2"] },
    ...
    { "day": 7, "focus": "Assessment", "activities": ["Mock Exam"] }
  ]
}
`;

      const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      let parsedPlan;
      try {
        const str = data.message;
        const start = str.indexOf("{");
        const end = str.lastIndexOf("}");
        if (start !== -1 && end !== -1) {
          parsedPlan = JSON.parse(str.substring(start, end + 1));
        } else {
          parsedPlan = JSON.parse(str);
        }
        setStudyPlan(parsedPlan.plan);
      } catch (e) {
        console.error("Failed to parse study plan JSON", e);
      }
    } catch (error) {
      console.error("Error generating study plan:", error);
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center shadow-strong">
            <Trophy className="h-16 w-16 text-white" />
          </div>

          <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Quiz Complete!
          </h1>

          <div className="bg-card rounded-3xl p-8 shadow-medium mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className={`text-6xl font-bold mb-2 ${color}`}>
                  {percentage}%
                </div>
                <div className="text-muted-foreground">Final Score</div>
              </div>

              <div>
                <div className={`text-6xl font-bold mb-2 ${color}`}>
                  {grade}
                </div>
                <div className="text-muted-foreground">Grade</div>
              </div>

              <div>
                <div className="text-3xl font-bold mb-2 text-foreground">
                  {correctCount}/{totalQuestions}
                </div>
                <div className="text-muted-foreground">Questions Correct</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className={`text-xl font-semibold ${color}`}>{message}</p>
            </div>
          </div>
        </div>

        {/* Automated Feedback Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Performance Feedback
          </h2>
          {isGeneratingFeedback ? (
            <div className="flex flex-col items-center justify-center p-8 bg-card rounded-3xl shadow-medium">
              <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">
                Analyzing your performance and generating feedback...
              </p>
            </div>
          ) : feedback ? (
            <Card className="shadow-medium border-0">
              <CardContent className="p-8">
                <p className="text-lg mb-6 text-center">
                  {feedback.overall_summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-success">
                      <CheckCircle className="mr-2 h-5 w-5" /> Strong Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {feedback.strong_topics.map(
                        (topic: string, i: number) => (
                          <Button
                            key={i}
                            variant="outline"
                            className="bg-success/10 hover:bg-success/20 border-success/20"
                            onClick={() =>
                              alert(
                                `Great job on ${topic}! Keep revising to maintain your strength.`,
                              )
                            }
                          >
                            {topic}
                          </Button>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-destructive">
                      <Target className="mr-2 h-5 w-5" /> Weak Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {feedback.weak_topics.map((topic: string, i: number) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="bg-destructive/10 hover:bg-destructive/20 border-destructive/20"
                          onClick={() =>
                            alert(
                              `Focus on ${topic} in your upcoming study sessions.`,
                            )
                          }
                        >
                          {topic}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {!studyPlan && (
                  <div className="mt-8 text-center">
                    <Button
                      onClick={generateStudyPlan}
                      disabled={isGeneratingPlan}
                      size="lg"
                      variant="gradient"
                    >
                      {isGeneratingPlan ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        <Clock className="mr-2 h-5 w-5" />
                      )}
                      Generate 7-Day Study Plan
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : null}
        </div>

        {/* Study Plan Section */}
        {studyPlan && (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-center sm:text-left">
                Your Personalized 7-Day Study Plan
              </h2>
              <Button
                onClick={generateSchedulePDF}
                variant="outline"
                className="mt-4 sm:mt-0"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Export 7-Day Plan
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {studyPlan.map((day: any, index: number) => (
                <Card
                  key={index}
                  className={`shadow-soft border-0 ${index === 6 ? "md:col-span-2 lg:col-span-3 bg-primary/5" : ""}`}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>Day {day.day}</span>
                      <span className="text-sm font-normal px-2 py-1 bg-secondary rounded-full">
                        {day.focus}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {day.activities.map((activity: string, i: number) => (
                        <li key={i} className="flex items-start text-sm">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Review Answers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Review Your Answers
          </h2>

          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const correct = isCorrectAnswer(
                question.correctAnswer,
                userAnswer,
              );

              return (
                <Card key={question.id} className="shadow-soft border-0">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                            correct ? "bg-success" : "bg-destructive"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <CardTitle className="text-lg">
                          {question.question}
                        </CardTitle>
                      </div>

                      <div className="flex items-center space-x-2">
                        {correct ? (
                          <div className="flex items-center space-x-1 text-success">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">Correct</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1 text-destructive">
                            <XCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              Incorrect
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Your Answer:
                        </div>
                        <div
                          className={`font-medium ${correct ? "text-success" : "text-destructive"}`}
                        >
                          {userAnswer || "No answer provided"}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Correct Answer:
                        </div>
                        <div className="font-medium text-success">
                          {Array.isArray(question.correctAnswer)
                            ? question.correctAnswer.join(", ")
                            : question.correctAnswer}
                        </div>
                      </div>
                    </div>

                    {question.explanation && (
                      <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">
                          Explanation:
                        </div>
                        <p className="text-sm">{question.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Restart and Export */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            onClick={onRestart}
            variant="hero"
            size="lg"
            className="min-w-48"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Take Another Quiz
          </Button>

          <Button
            onClick={generateComprehensivePDF}
            variant="outline"
            size="lg"
            className="min-w-48"
          >
            <FileDown className="h-5 w-5 mr-2" />
            Export Complete Report
          </Button>
        </div>
      </div>
    </div>
  );
};
