// import { Question, QuizSettings } from '@/types/question';

// // AI-powered question generation - generates questions for ANY subject
// const generateAIQuestions = (settings: QuizSettings): Question[] => {
//   const { subject, difficulty, questionType, questionCount } = settings;
  
//   // This simulates AI-generated questions - in a real app, you'd call an AI API
//   const questions: Question[] = [];
  
//   for (let i = 0; i < questionCount; i++) {
//     const questionData = generateQuestionByType(subject, difficulty, questionType, i);
    
//     questions.push({
//       id: `${subject.replace(/\s+/g, '-').toLowerCase()}-${difficulty}-${questionType}-${i}`,
//       type: questionType,
//       difficulty,
//       subject,
//       question: questionData.question,
//       options: 'options' in questionData ? questionData.options : undefined,
//       correctAnswer: questionData.correctAnswer,
//       explanation: questionData.explanation
//     });
//   }
  
//   return questions;
// };

// // Generate questions based on type and subject
// const generateQuestionByType = (subject: string, difficulty: string, type: string, index: number) => {
//   const subjectKey = subject.toLowerCase().replace(/\s+/g, '-');
  
//   switch (type) {
//     case 'multiple-choice':
//       return generateMultipleChoiceQuestion(subject, difficulty, index);
//     case 'true-false':
//       return generateTrueFalseQuestion(subject, difficulty, index);
//     case 'fill-blank':
//       return generateFillBlankQuestion(subject, difficulty, index);
//     case 'short-answer':
//       return generateShortAnswerQuestion(subject, difficulty, index);
//     default:
//       return generateMultipleChoiceQuestion(subject, difficulty, index);
//   }
// };

// // Generate multiple choice questions for any subject
// const generateMultipleChoiceQuestion = (subject: string, difficulty: string, index: number) => {
//   const questionTemplates = getQuestionTemplates(subject, difficulty, 'multiple-choice');
//   const template = questionTemplates[index % questionTemplates.length];
//   return template;
// };

// // Generate true/false questions for any subject
// const generateTrueFalseQuestion = (subject: string, difficulty: string, index: number) => {
//   const questionTemplates = getQuestionTemplates(subject, difficulty, 'true-false');
//   const template = questionTemplates[index % questionTemplates.length];
//   return template;
// };

// // Generate fill-in-the-blank questions for any subject
// const generateFillBlankQuestion = (subject: string, difficulty: string, index: number) => {
//   const questionTemplates = getQuestionTemplates(subject, difficulty, 'fill-blank');
//   const template = questionTemplates[index % questionTemplates.length];
//   return template;
// };

// // Generate short answer questions for any subject
// const generateShortAnswerQuestion = (subject: string, difficulty: string, index: number) => {
//   const questionTemplates = getQuestionTemplates(subject, difficulty, 'short-answer');
//   const template = questionTemplates[index % questionTemplates.length];
//   return template;
// };

// // Comprehensive question templates for any subject
// const getQuestionTemplates = (subject: string, difficulty: string, type: string) => {
//   const subjectLower = subject.toLowerCase();
  
//   // Dynamic question generation based on subject and difficulty
//   if (type === 'multiple-choice') {
//     const easyQuestions = [
//       {
//         question: `What is a fundamental concept in ${subject}?`,
//         options: [
//           getSubjectConcept(subject, 0),
//           getSubjectConcept(subject, 1),
//           getSubjectConcept(subject, 2),
//           getSubjectConcept(subject, 3)
//         ],
//         correctAnswer: getSubjectConcept(subject, 0),
//         explanation: `${getSubjectConcept(subject, 0)} is indeed a fundamental concept in ${subject}.`
//       },
//       {
//         question: `Which of the following is most associated with ${subject}?`,
//         options: [
//           getSubjectTerm(subject, 0),
//           getSubjectTerm(subject, 1),
//           getSubjectTerm(subject, 2),
//           getSubjectTerm(subject, 3)
//         ],
//         correctAnswer: getSubjectTerm(subject, 0),
//         explanation: `${getSubjectTerm(subject, 0)} is closely associated with ${subject}.`
//       },
//       {
//         question: `In ${subject}, what is the primary focus of study?`,
//         options: [
//           getSubjectFocus(subject, 0),
//           getSubjectFocus(subject, 1),
//           getSubjectFocus(subject, 2),
//           getSubjectFocus(subject, 3)
//         ],
//         correctAnswer: getSubjectFocus(subject, 0),
//         explanation: `${getSubjectFocus(subject, 0)} is the primary focus in ${subject}.`
//       }
//     ];

//     const mediumQuestions = [
//       {
//         question: `Which principle is essential for understanding ${subject}?`,
//         options: [
//           getSubjectPrinciple(subject, 0),
//           getSubjectPrinciple(subject, 1),
//           getSubjectPrinciple(subject, 2),
//           getSubjectPrinciple(subject, 3)
//         ],
//         correctAnswer: getSubjectPrinciple(subject, 0),
//         explanation: `${getSubjectPrinciple(subject, 0)} is an essential principle in ${subject}.`
//       },
//       {
//         question: `What method is commonly used in ${subject} research?`,
//         options: [
//           getSubjectMethod(subject, 0),
//           getSubjectMethod(subject, 1),
//           getSubjectMethod(subject, 2),
//           getSubjectMethod(subject, 3)
//         ],
//         correctAnswer: getSubjectMethod(subject, 0),
//         explanation: `${getSubjectMethod(subject, 0)} is commonly used in ${subject} research.`
//       }
//     ];

//     const hardQuestions = [
//       {
//         question: `What is an advanced theory or concept in ${subject}?`,
//         options: [
//           getAdvancedConcept(subject, 0),
//           getAdvancedConcept(subject, 1),
//           getAdvancedConcept(subject, 2),
//           getAdvancedConcept(subject, 3)
//         ],
//         correctAnswer: getAdvancedConcept(subject, 0),
//         explanation: `${getAdvancedConcept(subject, 0)} represents advanced understanding in ${subject}.`
//       }
//     ];

//     if (difficulty === 'easy') return easyQuestions;
//     if (difficulty === 'medium') return mediumQuestions;
//     return hardQuestions;
//   }

//   if (type === 'true-false') {
//     return [
//       {
//         question: `${subject} involves the study of complex theoretical frameworks.`,
//         correctAnswer: "true",
//         explanation: `Yes, ${subject} typically involves complex theoretical frameworks.`
//       },
//       {
//         question: `${subject} has no practical applications in the real world.`,
//         correctAnswer: "false",
//         explanation: `This is false - ${subject} has many practical applications.`
//       },
//       {
//         question: `Research in ${subject} follows scientific methodologies.`,
//         correctAnswer: "true",
//         explanation: `Most fields including ${subject} use scientific research methodologies.`
//       }
//     ];
//   }

//   if (type === 'fill-blank') {
//     return [
//       {
//         question: `The study of ${subject} focuses on ________.`,
//         correctAnswer: getSubjectFocus(subject, 0),
//         explanation: `The study of ${subject} focuses on ${getSubjectFocus(subject, 0)}.`
//       },
//       {
//         question: `A key concept in ${subject} is ________.`,
//         correctAnswer: getSubjectConcept(subject, 0),
//         explanation: `${getSubjectConcept(subject, 0)} is indeed a key concept in ${subject}.`
//       }
//     ];
//   }

//   if (type === 'short-answer') {
//     return [
//       {
//         question: `Explain the main principles of ${subject} in 2-3 sentences.`,
//         correctAnswer: `${subject} is a field of study that focuses on ${getSubjectFocus(subject, 0)}. It involves understanding ${getSubjectConcept(subject, 0)} and applying ${getSubjectMethod(subject, 0)} to solve problems and advance knowledge.`,
//         explanation: "This answer covers the main principles and applications of the subject."
//       },
//       {
//         question: `What are the key applications of ${subject} in modern society?`,
//         correctAnswer: `${subject} has numerous applications including research, problem-solving, and practical implementations that benefit society through ${getSubjectApplication(subject)}.`,
//         explanation: "This highlights the practical relevance and societal impact of the subject."
//       }
//     ];
//   }

//   return [];
// };

// // Helper functions to generate subject-specific content
// const getSubjectConcept = (subject: string, index: number) => {
//   const concepts = [
//     `Core ${subject} Theory`,
//     `Fundamental ${subject} Principles`,
//     `Basic ${subject} Concepts`,
//     `Elementary ${subject} Ideas`
//   ];
//   return concepts[index] || concepts[0];
// };

// const getSubjectTerm = (subject: string, index: number) => {
//   const terms = [
//     `${subject} Terminology`,
//     `${subject} Vocabulary`,
//     `${subject} Definitions`,
//     `${subject} Language`
//   ];
//   return terms[index] || terms[0];
// };

// const getSubjectFocus = (subject: string, index: number) => {
//   const focuses = [
//     `Understanding core principles and theories`,
//     `Analyzing patterns and relationships`,
//     `Solving complex problems`,
//     `Exploring theoretical frameworks`
//   ];
//   return focuses[index] || focuses[0];
// };

// const getSubjectPrinciple = (subject: string, index: number) => {
//   const principles = [
//     `Systematic Analysis`,
//     `Evidence-Based Reasoning`,
//     `Theoretical Framework`,
//     `Methodological Approach`
//   ];
//   return principles[index] || principles[0];
// };

// const getSubjectMethod = (subject: string, index: number) => {
//   const methods = [
//     `Empirical Research`,
//     `Theoretical Analysis`,
//     `Comparative Study`,
//     `Experimental Design`
//   ];
//   return methods[index] || methods[0];
// };

// const getAdvancedConcept = (subject: string, index: number) => {
//   const concepts = [
//     `Advanced ${subject} Theory`,
//     `Complex ${subject} Models`,
//     `Interdisciplinary ${subject} Approaches`,
//     `Cutting-edge ${subject} Research`
//   ];
//   return concepts[index] || concepts[0];
// };

// const getSubjectApplication = (subject: string) => {
//   return `advancing our understanding of ${subject} and its practical implementations`;
// };

// export function generateQuestions(settings: QuizSettings): Question[] {
//   // Use AI-powered generation for any subject
//   return generateAIQuestions(settings);
// }



//chatgpt code  working code

// import { Question, QuizSettings } from "@/types/question";

// // Main function to generate questions
// export async function generateQuestions(settings: QuizSettings): Promise<Question[]> {
//   const { subject, difficulty, questionType, questionCount } = settings;

//   // Perfect prompt for all question types
//   const prompt = `
// Generate exactly ${questionCount} unique, non-repeating "${questionType}" questions for:

// Subject: ${subject}
// Difficulty: ${difficulty}

// STRICT RULES:
// 1. ALWAYS give fresh, new questions each time.
// 2. NEVER repeat questions.
// 3. Output must be VALID JSON ONLY.
// 4. No text outside JSON.
// 5. Structure MUST follow these rules:

// For Multiple-choice:
// {
//   "question": "text",
//   "options": ["A", "B", "C", "D"],
//   "correctAnswer": "A",
//   "explanation": "Why this answer is correct"
// }

// For True-false:
// {
//   "question": "text",
//   "correctAnswer": "true" or "false",
//   "explanation": "Why"
// }

// For Fill-blank:
// {
//   "question": "The ________ is ...",
//   "correctAnswer": "missing word",
//   "explanation": "Why this word"
// }

// For Short-answer:
// {
//   "question": "Explain ...",
//   "correctAnswer": "2–3 sentence educational answer",
//   "explanation": "Why this answer is correct"
// }

// Return only:
// [
//   { ... },
//   { ... },
//   ...
// ]
// `;

//   try {
//     // Call backend (safe)
//     const response = await fetch("http://localhost:5000/api/generate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt }),
//     });

//     const data = await response.json();

//     // Parse JSON safely
//     const aiQuestions = JSON.parse(data.message);

//     // Normalize output for all types
//     const finalQuestions: Question[] = aiQuestions.map((q: any, index: number) => ({
//       id: `${subject}-${difficulty}-${questionType}-${index}`,
//       type: questionType,
//       difficulty,
//       subject,

//       question: q.question || "No question generated",
//       options:
//         questionType === "multiple-choice" ? q.options || [] : undefined,

//       correctAnswer: q.correctAnswer || "",
//       explanation: q.explanation || "No explanation provided",
//     }));

//     return finalQuestions;

//   } catch (err) {
//     console.error("Backend/Groq Error:", err);
//     return [];
//   }
// }

// fine working code  
// import { Question, QuizSettings } from "@/types/question";

// // Safe JSON parser (prevents crashes)
// function safeJsonParse(str: string) {
//   try {
//     return JSON.parse(str);
//   } catch (e) {
//     console.warn("❌ AI returned invalid JSON. Attempting auto-fix…");

//     // Remove everything before first '[' and after last ']'
//     const start = str.indexOf("[");
//     const end = str.lastIndexOf("]");

//     if (start !== -1 && end !== -1) {
//       const fixed = str.substring(start, end + 1);
//       try {
//         return JSON.parse(fixed);
//       } catch (e2) {
//         console.error("❌ Still invalid JSON after fixing.");
//         return null;
//       }
//     }
//     return null;
//   }
// }

// export async function generateQuestions(settings: QuizSettings): Promise<Question[]> {
//   const { subject, difficulty, questionType, questionCount } = settings;

//   const prompt = `
// Generate exactly ${questionCount} "${questionType}" questions.
// Return only valid JSON array:
// [
//   { "question": "...", "options": [], "correctAnswer": "", "explanation": "" }
// ]
// NO text before or after JSON.
// `;

//   try {
//     const response = await fetch("http://localhost:5000/api/generate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt }),
//     });

//     const data = await response.json();
//     const parsed = safeJsonParse(data.message);

//     if (!parsed) {
//       console.error("❌ Could not parse AI JSON. Returning empty list.");
//       return [];
//     }

//     return parsed.map((q: any, index: number) => ({
//       id: `${subject}-${difficulty}-${questionType}-${index}`,
//       type: questionType,
//       difficulty,
//       subject,
//       question: q.question ?? "",
//       options: questionType === "multiple-choice" ? q.options ?? [] : undefined,
//       correctAnswer: q.correctAnswer ?? "",
//       explanation: q.explanation ?? "",
//     }));

//   } catch (err) {
//     console.error("Backend/Groq Error:", err);
//     return [];
//   }
// }

import { Question, QuizSettings } from "@/types/question";

// Safe JSON parser (prevents crashes)
function safeJsonParse(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.warn("❌ AI returned invalid JSON. Attempting auto-fix…");

    // Remove everything before first '[' and after last ']'
    const start = str.indexOf("[");
    const end = str.lastIndexOf("]");

    if (start !== -1 && end !== -1) {
      const fixed = str.substring(start, end + 1);
      try {
        return JSON.parse(fixed);
      } catch (e2) {
        console.error("❌ Still invalid JSON after fixing.");
        return null;
      }
    }
    return null;
  }
}

export async function generateQuestions(settings: QuizSettings): Promise<Question[]> {
  const { subject, difficulty, questionType, questionCount } = settings;

  let promptSubject = `Subject: ${subject}`;
  let contextInstruction = '';

  if (subject.startsWith('DOCUMENT_CONTEXT:')) {
    const parts = subject.split(':');
    const filename = parts[1];
    const text = parts.slice(2).join(':');
    promptSubject = `Topic: Content from document "${filename}"`;
    contextInstruction = `\nCONTEXT FROM DOCUMENT:\n"""\n${text}\n"""\n\nIMPORTANT: Generate questions ONLY based on the context provided above. Do not use outside knowledge.`;
  }

  // ⭐ FIXED PROMPT — ensures correctAnswer is RANDOM, NOT always A
  const prompt = `
Generate exactly ${questionCount} "${questionType}" questions for:

${promptSubject}
Difficulty: ${difficulty}
${contextInstruction}

STRICT RULES:
1. Output ONLY valid JSON array. No text outside JSON.
2. For multiple-choice:
   - Must return EXACTLY 4 options.
   - Options MUST be UNIQUE.
   - correctAnswer MUST be one of the options.
   - correctAnswer MUST NOT always be the first option.
   - Randomize correct option position.
3. For true/false:
   - correctAnswer must be "true" or "false".
4. For fill-blank:
   - question must contain ONE blank like "______".
   - correctAnswer must be the missing word.
5. For short-answer:
   - correctAnswer must be 2–3 sentences.

RETURN ONLY JSON LIKE:
[
  {
    "question": "text",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": "B",
    "explanation": "reason"
  }
]
`;

  try {
    const response = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    // Fix JSON if AI responded with extra text
    const parsed = safeJsonParse(data.message);

    if (!parsed || !Array.isArray(parsed)) {
      console.error("❌ Could not parse AI JSON. Returning empty list.");
      throw new Error("Could not parse AI JSON");
    }

    // ⭐ Normalize final result
    return parsed.map((q: any, index: number) => ({
      id: `${subject}-${difficulty}-${questionType}-${index}`,
      type: questionType,
      difficulty,
      subject,
      question: q.question ?? "",
      options: questionType === "multiple-choice" ? q.options ?? [] : undefined,
      correctAnswer: q.correctAnswer ?? "",
      explanation: q.explanation ?? "",
    })) as Question[];

  } catch (err) {
    console.error("Backend/Groq Error:", err);
    throw err;
  }
}
