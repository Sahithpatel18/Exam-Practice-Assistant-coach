-- Create exams table
CREATE TABLE IF NOT EXISTS exams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID,
    -- Optional, if you have authentication
    subject TEXT NOT NULL,
    difficulty TEXT,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
-- Create exam_feedback table
CREATE TABLE IF NOT EXISTS exam_feedback (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    exam_id UUID REFERENCES exams(id) ON DELETE CASCADE,
    strong_topics TEXT [] DEFAULT '{}',
    weak_topics TEXT [] DEFAULT '{}',
    overall_summary TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
-- Create mock_exams table (optional, if you want to store predefined mock exams)
CREATE TABLE IF NOT EXISTS mock_exams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    questions JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);