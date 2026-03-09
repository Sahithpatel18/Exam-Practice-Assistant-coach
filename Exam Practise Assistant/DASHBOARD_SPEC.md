# Dashboard Feature Set Specification

## Overview

This document outlines the detailed specification for the dashboard feature set tailored to the educational platform. The dashboard serves as the central hub for students to generate questions, track their progress, receive automated feedback, and access personalized study plans and mock exams.

## 1. RAG-Based Question Generation Tool

**Location:** Near the search topic area on the dashboard.
**Purpose:** Allow users to dynamically generate questions based on uploaded documents using Retrieval-Augmented Generation (RAG).

### Features:

- **Document Upload Interface:**
  - Support for PDF, DOCX, and TXT file formats.
  - Drag-and-drop functionality with a clear upload button.
  - Progress indicator during document processing.
- **Topic Search & Selection:**
  - Search bar to specify the topic or context for question generation.
  - Option to select the difficulty level (Easy, Medium, Hard) and question type (Multiple Choice, True/False, Short Answer).
- **Dynamic Generation:**
  - Integration with the RAG backend to extract relevant context from the uploaded document.
  - Generation of questions using the Groq API based on the extracted context.
- **Preview & Action:**
  - Display generated questions in a preview modal or section.
  - Options to "Start Exam" with the generated questions or "Save for Later".

## 2. Exam Data Recording (Supabase Integration)

**Purpose:** Persist exam results, details, and feedback in the Supabase database for historical tracking and analytics.

### Data Model (Supabase Tables):

- **`exams` Table:**
  - `id` (UUID, Primary Key)
  - `user_id` (UUID, Foreign Key to users)
  - `subject` (String)
  - `topic` (String)
  - `score` (Integer)
  - `total_questions` (Integer)
  - `created_at` (Timestamp)
- **`exam_feedback` Table:**
  - `id` (UUID, Primary Key)
  - `exam_id` (UUID, Foreign Key to exams)
  - `strong_topics` (Array of Strings)
  - `weak_topics` (Array of Strings)
  - `overall_summary` (Text)

### Features:

- **Automatic Saving:** Upon exam completion, the frontend automatically sends the exam results and generated feedback to the Supabase backend.
- **History View:** A section on the dashboard displaying a list of recently taken exams with their scores and dates.

## 3. Automated Feedback Generation

**Location:** Displayed immediately after an exam is completed and accessible from the exam history.
**Purpose:** Provide actionable insights into the student's performance.

### Features:

- **Overall Summary:** A brief, AI-generated paragraph summarizing the student's performance based on their score and the difficulty of the questions.
- **Topic Analysis:**
  - Identification of **Strong Topics** (topics where the student scored > 80%).
  - Identification of **Weak Topics** (topics where the student scored < 60%).
- **Interactive UI:**
  - Strong and weak topics are presented as interactive, clickable buttons or badges below the overall summary.
  - Clicking a "Weak Topic" button navigates the user to targeted learning materials or generates a new practice quiz for that specific topic.
  - Clicking a "Strong Topic" button suggests advanced revision activities.

## 4. Personalized 7-Day Study Plan

**Location:** A dedicated widget or section on the dashboard.
**Purpose:** Provide a structured, day-by-day study plan based on the latest exam feedback.

### Features:

- **Dynamic Generation:** The plan is generated using AI (Groq API) based on the user's identified strong and weak topics from recent exams.
- **Plan Structure:**
  - **Days 1-4 (Targeted Learning):** Focus on weak topics. Includes suggested reading, video tutorials, and focused practice questions.
  - **Days 5-6 (Revision Activities):** Focus on strong topics. Includes advanced problem-solving, summarizing concepts, and peer teaching exercises.
  - **Day 7 (Assessment):** A comprehensive mock exam covering all topics studied during the week.
- **Interactive Checklist:** Users can check off completed daily tasks to track their progress.

## 5. "Popular Exams" Section (Mock Exams)

**Location:** Below the popular subjects section on the dashboard.
**Purpose:** Provide easy access to full-length, standardized mock exams.

### Features:

- **Exam Cards:** Visually appealing cards for popular exams like **JEE** (Joint Entrance Examination) and **NEET** (National Eligibility cum Entrance Test).
- **Exam Details:**
  - Each mock exam contains at least 25 questions.
  - Questions cover all relevant subjects (e.g., Physics, Chemistry, Mathematics for JEE; Physics, Chemistry, Biology for NEET).
  - Display estimated completion time and difficulty level.
- **Action:** A "Start Mock Exam" button that launches the full-screen exam interface.
- **Tracking:** Results from these mock exams are also saved to the Supabase database and influence the personalized study plan.
