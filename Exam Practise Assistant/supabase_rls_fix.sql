-- Disable Row Level Security (RLS) for the exams table
ALTER TABLE exams DISABLE ROW LEVEL SECURITY;
-- Disable Row Level Security (RLS) for the exam_feedback table
ALTER TABLE exam_feedback DISABLE ROW LEVEL SECURITY;
-- Disable Row Level Security (RLS) for the mock_exams table
ALTER TABLE mock_exams DISABLE ROW LEVEL SECURITY;
-- Alternatively, if you want to keep RLS enabled but allow anonymous inserts (which is safer):
-- ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow anonymous inserts" ON exams FOR INSERT TO anon WITH CHECK (true);
-- CREATE POLICY "Allow anonymous selects" ON exams FOR SELECT TO anon USING (true);
-- ALTER TABLE exam_feedback ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow anonymous inserts" ON exam_feedback FOR INSERT TO anon WITH CHECK (true);
-- CREATE POLICY "Allow anonymous selects" ON exam_feedback FOR SELECT TO anon USING (true);