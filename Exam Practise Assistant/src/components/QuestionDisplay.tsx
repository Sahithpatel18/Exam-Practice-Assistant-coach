// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Question } from '@/types/question';
// import { Progress } from '@/components/ui/progress';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { CheckCircle, XCircle, Clock } from 'lucide-react';

// interface QuestionDisplayProps {
//   question: Question;
//   questionNumber: number;
//   totalQuestions: number;
//   onAnswerSubmit: (questionId: string, answer: string) => void;
// }

// export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
//   question,
//   questionNumber,
//   totalQuestions,
//   onAnswerSubmit,
// }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState<string>('');
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);

//   const handleAnswerSelect = (answer: string) => {
//     if (isAnswered) return;
//     setSelectedAnswer(answer);
//   };

//   const handleSubmit = () => {
//     if (!selectedAnswer || isAnswered) return;

//     const correct = Array.isArray(question.correctAnswer)
//       ? question.correctAnswer.includes(selectedAnswer)
//       : question.correctAnswer.toLowerCase() === selectedAnswer.toLowerCase();

//     setIsCorrect(correct);
//     setIsAnswered(true);
//   };

//   const handleNext = () => {
//     onAnswerSubmit(question.id, selectedAnswer);
//     setSelectedAnswer('');
//     setIsAnswered(false);
//     setIsCorrect(false);
//   };

//   const renderQuestionInput = () => {
//     switch (question.type) {
//       case 'multiple-choice':
//         return (
//           <div className="space-y-3">
//             {question.options?.map((option, index) => (
//               <div
//                 key={index}
//                 className={`
//                   p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
//                   ${selectedAnswer === option
//                     ? isAnswered
//                       ? isCorrect && selectedAnswer === option
//                         ? 'border-success bg-success/10 text-success-foreground'
//                         : selectedAnswer === option && !isCorrect
//                         ? 'border-destructive bg-destructive/10 text-destructive-foreground'
//                         : 'border-primary bg-primary/10'
//                       : 'border-primary bg-primary/10'
//                     : isAnswered && option === question.correctAnswer
//                     ? 'border-success bg-success/10 text-success-foreground'
//                     : 'border-border hover:border-primary/50 hover:bg-secondary/50'
//                   }
//                 `}
//                 onClick={() => handleAnswerSelect(option)}
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="font-medium">{String.fromCharCode(65 + index)}. {option}</span>
//                   {isAnswered && (
//                     <div>
//                       {option === question.correctAnswer && (
//                         <CheckCircle className="h-5 w-5 text-success" />
//                       )}
//                       {selectedAnswer === option && !isCorrect && (
//                         <XCircle className="h-5 w-5 text-destructive" />
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case 'true-false':
//         return (
//           <div className="space-y-3">
//             {['True', 'False'].map((option) => (
//               <div
//                 key={option}
//                 className={`
//                   p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
//                   ${selectedAnswer === option
//                     ? isAnswered
//                       ? isCorrect && selectedAnswer === option
//                         ? 'border-success bg-success/10 text-success-foreground'
//                         : selectedAnswer === option && !isCorrect
//                         ? 'border-destructive bg-destructive/10 text-destructive-foreground'
//                         : 'border-primary bg-primary/10'
//                       : 'border-primary bg-primary/10'
//                     : isAnswered && option.toLowerCase() === question.correctAnswer
//                     ? 'border-success bg-success/10 text-success-foreground'
//                     : 'border-border hover:border-primary/50 hover:bg-secondary/50'
//                   }
//                 `}
//                 onClick={() => handleAnswerSelect(option)}
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="font-medium">{option}</span>
//                   {isAnswered && (
//                     <div>
//                       {option.toLowerCase() === question.correctAnswer && (
//                         <CheckCircle className="h-5 w-5 text-success" />
//                       )}
//                       {selectedAnswer === option && !isCorrect && (
//                         <XCircle className="h-5 w-5 text-destructive" />
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case 'fill-blank':
//         return (
//           <div className="space-y-4">
//             <Input
//               placeholder="Type your answer here..."
//               value={selectedAnswer}
//               onChange={(e) => setSelectedAnswer(e.target.value)}
//               disabled={isAnswered}
//               className="text-lg p-4"
//             />
//             {isAnswered && (
//               <div className={`p-3 rounded-lg ${isCorrect ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
//                 <div className="flex items-center space-x-2">
//                   {isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
//                   <span className="font-medium">
//                     {isCorrect ? 'Correct!' : `Correct answer: ${question.correctAnswer}`}
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>
//         );

//       case 'short-answer':
//         return (
//           <div className="space-y-4">
//             <Textarea
//               placeholder="Write your answer here..."
//               value={selectedAnswer}
//               onChange={(e) => setSelectedAnswer(e.target.value)}
//               disabled={isAnswered}
//               className="min-h-32 text-base"
//             />
//             {isAnswered && (
//               <div className="p-4 rounded-lg bg-secondary border">
//                 <h4 className="font-semibold mb-2">Sample Answer:</h4>
//                 <p className="text-sm text-muted-foreground">{question.correctAnswer}</p>
//               </div>
//             )}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   const progress = (questionNumber / totalQuestions) * 100;

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       {/* Progress Header */}
//       <div className="mb-8">
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-2">
//             <Clock className="h-4 w-4 text-muted-foreground" />
//             <span className="text-sm text-muted-foreground">
//               Question {questionNumber} of {totalQuestions}
//             </span>
//           </div>
//           <div className="text-sm font-medium text-primary">
//             {Math.round(progress)}% Complete
//           </div>
//         </div>
//         <Progress value={progress} className="h-2" />
//       </div>

//       {/* Question Card */}
//       <Card className="shadow-medium border-0">
//         <CardHeader>
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
//                 {questionNumber}
//               </div>
//               <div>
//                 <div className="text-sm text-muted-foreground capitalize">
//                   {question.subject} • {question.difficulty} • {question.type.replace('-', ' ')}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <CardTitle className="text-2xl leading-relaxed">
//             {question.question}
//           </CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-6">
//           {renderQuestionInput()}

//           {!isAnswered && (
//             <Button
//               onClick={handleSubmit}
//               disabled={!selectedAnswer}
//               variant="gradient"
//               size="lg"
//               className="w-full"
//             >
//               Submit Answer
//             </Button>
//           )}

//           {isAnswered && question.explanation && (
//             <div className="bg-secondary/50 rounded-lg p-4">
//               <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
//                 Explanation:
//               </h4>
//               <p className="text-sm">{question.explanation}</p>
//             </div>
//           )}

//           {/* ✅ Next / Finish Button */}
//           {isAnswered && (
//             <Button
//               onClick={handleNext}
//               variant="gradient"
//               size="lg"
//               className="w-full"
//             >
//               {questionNumber === totalQuestions ? 'Finish ✅' : 'Next →'}
//             </Button>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

//chatgpt code working fine—clean function added
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Question } from '@/types/question';
// import { Progress } from '@/components/ui/progress';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { CheckCircle, XCircle, Clock } from 'lucide-react';

// interface QuestionDisplayProps {
//   question: Question;
//   questionNumber: number;
//   totalQuestions: number;
//   onAnswerSubmit: (questionId: string, answer: string) => void;
// }

// // ❤️ CLEAN FUNCTION
// const clean = (text: string) => {
//   if (!text) return "";
//   return text
//     .toLowerCase()
//     .replace(/^([a-d]\.)\s*/i, "")  // remove "A. " prefix
//     .replace(/['"]+/g, "")          // remove quotes
//     .trim();
// };

// export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
//   question,
//   questionNumber,
//   totalQuestions,
//   onAnswerSubmit,
// }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState<string>('');
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);

//   const handleAnswerSelect = (answer: string) => {
//     if (isAnswered) return;
//     setSelectedAnswer(answer);
//   };

//   const handleSubmit = () => {
//     if (!selectedAnswer || isAnswered) return;

//     const correct = clean(selectedAnswer) === clean(question.correctAnswer);

//     setIsCorrect(correct);
//     setIsAnswered(true);
//   };

//   const handleNext = () => {
//     onAnswerSubmit(question.id, selectedAnswer);
//     setSelectedAnswer('');
//     setIsAnswered(false);
//     setIsCorrect(false);
//   };

//   const renderQuestionInput = () => {
//     switch (question.type) {
//       case 'multiple-choice':
//         return (
//           <div className="space-y-3">
//             {question.options?.map((option, index) => {
//               const isCorrectOption = clean(option) === clean(question.correctAnswer);

//               return (
//                 <div
//                   key={index}
//                   className={`
//                     p-4 rounded-lg border-2 cursor-pointer transition-all
//                     ${selectedAnswer === option && !isAnswered ? "border-primary bg-primary/10" : ""}
//                     ${isAnswered && selectedAnswer === option && isCorrect ? "border-success bg-success/10" : ""}
//                     ${isAnswered && selectedAnswer === option && !isCorrect ? "border-destructive bg-destructive/10" : ""}
//                     ${isAnswered && isCorrectOption ? "border-success bg-success/10" : ""}
//                   `}
//                   onClick={() => handleAnswerSelect(option)}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="font-medium">
//                       {String.fromCharCode(65 + index)}. {option}
//                     </span>

//                     {isAnswered && (
//                       <>
//                         {isCorrectOption && <CheckCircle className="h-5 w-5 text-success" />}
//                         {selectedAnswer === option && !isCorrect && (
//                           <XCircle className="h-5 w-5 text-destructive" />
//                         )}
//                       </>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         );

//       case 'true-false':
//         return (
//           <div className="space-y-3">
//             {['True', 'False'].map(option => {
//               const isCorrectOption = clean(option) === clean(question.correctAnswer);

//               return (
//                 <div
//                   key={option}
//                   className={`
//                     p-4 rounded-lg border-2 cursor-pointer transition-all
//                     ${selectedAnswer === option && !isAnswered ? "border-primary bg-primary/10" : ""}
//                     ${isAnswered && isCorrectOption ? "border-success bg-success/10" : ""}
//                     ${isAnswered && selectedAnswer === option && !isCorrect ? "border-destructive bg-destructive/10" : ""}
//                   `}
//                   onClick={() => handleAnswerSelect(option)}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="font-medium">{option}</span>
//                     {isAnswered && (
//                       <>
//                         {isCorrectOption && <CheckCircle className="h-5 w-5 text-success" />}
//                         {selectedAnswer === option && !isCorrect && (
//                           <XCircle className="h-5 w-5 text-destructive" />
//                         )}
//                       </>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         );

//       case 'fill-blank':
//         return (
//           <div className="space-y-4">
//             <Input
//               placeholder="Type your answer here..."
//               value={selectedAnswer}
//               onChange={(e) => setSelectedAnswer(e.target.value)}
//               disabled={isAnswered}
//               className="text-lg p-4"
//             />

//             {isAnswered && (
//               <div className={`p-3 rounded-lg ${isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
//                 <span className="font-medium">
//                   {isCorrect ? "Correct!" : `Correct answer: ${question.correctAnswer}`}
//                 </span>
//               </div>
//             )}
//           </div>
//         );

//       case 'short-answer':
//         return (
//           <div className="space-y-4">
//             <Textarea
//               placeholder="Write your answer..."
//               value={selectedAnswer}
//               onChange={(e) => setSelectedAnswer(e.target.value)}
//               disabled={isAnswered}
//               className="min-h-32 text-base"
//             />

//             {isAnswered && (
//               <div className="p-4 rounded-lg bg-secondary border">
//                 <h4 className="font-semibold mb-2">Correct Answer:</h4>
//                 <p className="text-sm">{question.correctAnswer}</p>
//               </div>
//             )}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   const progress = (questionNumber / totalQuestions) * 100;

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <div className="mb-8">
//         <Progress value={progress} className="h-2" />
//       </div>

//       <Card className="shadow-medium border-0">
//         <CardHeader>
//           <CardTitle className="text-2xl">{question.question}</CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-6">
//           {renderQuestionInput()}

//           {!isAnswered && (
//             <Button onClick={handleSubmit} disabled={!selectedAnswer} className="w-full">
//               Submit Answer
//             </Button>
//           )}

//           {isAnswered && (
//             <Button onClick={handleNext} className="w-full">
//               {questionNumber === totalQuestions ? "Finish" : "Next →"}
//             </Button>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

//chatgpt 2
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from "@/types/question";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface QuestionDisplayProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (questionId: string, answer: string) => void;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSubmit,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // ⭐ UNIVERSAL CLEAN FUNCTION
  const clean = (value: any): string => {
    if (!value) return "";
    return value
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, "");
  };

  // ⭐ TRUE correctness checker (handles array or string)
  const checkCorrect = (correct: any, user: string): boolean => {
    if (!correct || !user) return false;

    if (Array.isArray(correct)) {
      return correct.some((c) => clean(c) === clean(user));
    }

    return clean(correct) === clean(user);
  };

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || isAnswered) return;

    const correct = checkCorrect(question.correctAnswer, selectedAnswer);

    setIsCorrect(correct);
    setIsAnswered(true);
  };

  const handleNext = () => {
    onAnswerSubmit(question.id, selectedAnswer);
    setSelectedAnswer("");
    setIsAnswered(false);
    setIsCorrect(false);
  };

  // ⭐ Render Input for Each Question Type
  const renderQuestionInput = () => {
    const correctAns = question.correctAnswer;

    switch (question.type) {
      case "multiple-choice":
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => {
              const optionIsCorrect = checkCorrect(correctAns, option);

              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                    ${selectedAnswer === option && !isAnswered ? "border-primary bg-primary/10" : ""}
                    ${isAnswered && optionIsCorrect ? "border-success bg-success/10" : ""}
                    ${isAnswered && selectedAnswer === option && !optionIsCorrect ? "border-destructive bg-destructive/10" : ""}
                    ${!isAnswered && selectedAnswer !== option ? "border-border hover:border-primary/50 hover:bg-secondary/50" : ""}
                  `}
                  onClick={() => handleAnswerSelect(option)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {String.fromCharCode(65 + index)}. {option}
                    </span>

                    {isAnswered &&
                      (optionIsCorrect ? (
                        <CheckCircle className="h-5 w-5 text-success" />
                      ) : selectedAnswer === option ? (
                        <XCircle className="h-5 w-5 text-destructive" />
                      ) : null)}
                  </div>
                </div>
              );
            })}
          </div>
        );

      case "true-false":
        return (
          <div className="space-y-3">
            {["true", "false"].map((option) => {
              const optionIsCorrect = clean(correctAns) === clean(option);

              return (
                <div
                  key={option}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                    ${selectedAnswer === option && !isAnswered ? "border-primary bg-primary/10" : ""}
                    ${isAnswered && optionIsCorrect ? "border-success bg-success/10" : ""}
                    ${isAnswered && selectedAnswer === option && !optionIsCorrect ? "border-destructive bg-destructive/10" : ""}
                    ${!isAnswered && selectedAnswer !== option ? "border-border hover:border-primary/50 hover:bg-secondary/50" : ""}
                  `}
                  onClick={() => handleAnswerSelect(option)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {isAnswered &&
                      (optionIsCorrect ? (
                        <CheckCircle className="h-5 w-5 text-success" />
                      ) : selectedAnswer === option ? (
                        <XCircle className="h-5 w-5 text-destructive" />
                      ) : null)}
                  </div>
                </div>
              );
            })}
          </div>
        );

      case "fill-blank":
        return (
          <div className="space-y-4">
            <Input
              placeholder="Type your answer..."
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={isAnswered}
              className="text-lg p-4"
            />

            {isAnswered && (
              <div
                className={`p-3 rounded-lg ${isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}
              >
                {isCorrect
                  ? "Correct!"
                  : `Correct answer: ${question.correctAnswer}`}
              </div>
            )}
          </div>
        );

      case "short-answer":
        return (
          <div className="space-y-4">
            <Textarea
              placeholder="Write your answer..."
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={isAnswered}
            />

            {isAnswered && (
              <div className="p-4 rounded-lg bg-secondary border">
                <h4 className="font-semibold mb-2">Sample Answer:</h4>
                <p className="text-sm">{question.correctAnswer}</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const progress = (questionNumber / totalQuestions) * 100;

  const formatSubjectTitle = (subject: string): string => {
    if (subject.startsWith("DOCUMENT_CONTEXT:")) {
      const parts = subject.split(":");
      const filename = parts[1];
      return `Document: ${filename}`;
    }
    return subject;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Question {questionNumber} of {totalQuestions}
            </span>
          </div>
          <div className="text-sm font-medium text-primary">
            {Math.round(progress)}% Complete
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
              {questionNumber}
            </div>

            <div>
              <div
                className="text-sm text-muted-foreground capitalize truncate max-w-[200px] sm:max-w-[400px]"
                title={formatSubjectTitle(question.subject)}
              >
                {formatSubjectTitle(question.subject)} • {question.difficulty} •{" "}
                {question.type.replace("-", " ")}
              </div>
            </div>
          </div>

          <CardTitle className="text-2xl leading-relaxed mt-3">
            {question.question}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {renderQuestionInput()}

          {!isAnswered && (
            <Button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              variant="gradient"
              size="lg"
              className="w-full"
            >
              Submit Answer
            </Button>
          )}

          {isAnswered && (
            <Button
              onClick={handleNext}
              variant="gradient"
              size="lg"
              className="w-full"
            >
              {questionNumber === totalQuestions ? "Finish" : "Next →"}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
