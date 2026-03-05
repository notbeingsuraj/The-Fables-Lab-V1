-- Run this inside your Supabase SQL Editor to create the projects table

CREATE TABLE projects (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  thumbnail TEXT,
  tags TEXT[],
  client TEXT,
  role TEXT,
  duration TEXT,
  color TEXT,
  hero_text TEXT,
  hero_image TEXT,
  solution_image TEXT,
  summary TEXT,
  problem TEXT,
  solution TEXT,
  tech_stack TEXT[],
  metrics JSONB,
  thought_process JSONB,
  process JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Turn on Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Public profiles are viewable by everyone."
  ON projects FOR SELECT
  USING ( true );

-- For the Admin Dashboard, allow insert/update/delete 
-- NOTE: In a real app, you would restrict this to authenticated admins. 
-- Assuming you rely on Vercel/NextJS routing protection for now, we'll allow anon/service_role to manage:
CREATE POLICY "Allow anon to insert/update projects"
  ON projects FOR ALL
  USING ( true )
  WITH CHECK ( true );
