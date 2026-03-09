// import express from "express";
// import Groq from "groq-sdk";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const groq = new Groq({
//   apiKey: process.env.VITE_GROQ_API_KEY
// });

// app.post("/api/generate", async (req, res) => {
//   const { prompt } = req.body;

//   try {
//     const response = await groq.chat.completions.create({
//     model: "llama-3.3-70b-versatile",
//       temperature: 0.95,
//       messages: [{ role: "user", content: prompt }]
//     });

//     res.json({
//       message: response.choices[0].message.content
//     });
//   } catch (error) {
//     console.error("Groq API Error:", error);
//     res.status(500).json({ error: "Groq API failed" });
//   }
// });

// app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
//main code is above one

// import express from "express";
// import Groq from "groq-sdk";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const groq = new Groq({
//   apiKey: process.env.VITE_GROQ_API_KEY
// });

// // ⬇️ NEW CODE IS HERE
// app.post("/api/generate", async (req, res) => {
//   const { subject, difficulty, questionType, questionCount } = req.body;

//   const prompt = `
// Generate EXACTLY ${questionCount} questions.
// Subject: ${subject}
// Difficulty: ${difficulty}
// Type: ${questionType}

// STRICT RULES:
// (… full prompt …)
// `;

//   try {
//     const response = await groq.chat.completions.create({
//      model: "llama-3.3-70b-versatile",
//       temperature: 0.6,
//       messages: [{ role: "user", content: prompt }]
//     });

//     res.json({
//       message: response.choices[0].message.content
//     });

//   } catch (error) {
//     console.error("Groq API Error:", error);
//     res.status(500).json({ error: "Groq API failed" });
//   }
// });
// // ⬆️ NEW CODE ENDS HERE

// app.listen(5000, () => console.log("Backend running on http://localhost:5000"));

//just code working fine 
// import express from "express";
// import Groq from "groq-sdk";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const groq = new Groq({
//   apiKey: process.env.VITE_GROQ_API_KEY
// });

// app.post("/api/generate", async (req, res) => {
//   const { prompt } = req.body;

//   if (!prompt) {
//     return res.status(400).json({ error: "Prompt missing" });
//   }

//   try {
//     const response = await groq.chat.completions.create({
//       model: "openai/gpt-oss-20b",

//       temperature: 0.7,
//       messages: [
//         { role: "user", content: prompt }
//       ]
//     });

//     res.json({
//       message: response.choices[0].message.content
//     });

//   } catch (error) {
//     console.error("Groq API Error:", error);
//     res.status(500).json({ error: "Groq API failed", details: error });
//   }
// });

// app.listen(5000, () =>
//   console.log("Backend running on http://localhost:5000")
// );

import express from "express";
import Groq from "groq-sdk";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.VITE_GROQ_API_KEY
});

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: "Missing prompt" });

  try {
    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",   // <- model available on your account
      temperature: 0.7,
      messages: [{ role: "user", content: prompt }]
    });

    res.json({
      message: response.choices[0].message.content
    });

  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Groq API failed", details: error });
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
