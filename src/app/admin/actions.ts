/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { createClient } from "@supabase/supabase-js";

export async function createProjectAction(formData: any) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { error } = await supabase.from("projects").insert({
      slug: formData.slug,
      name: formData.name,
      client: formData.client,
      role: formData.role,
      duration: formData.duration,
      color: formData.color,
      hero_text: formData.heroText,
      hero_image: formData.heroImage,
      solution_image: formData.solutionImage,
      thumbnail: formData.thumbnail || formData.heroImage,
      summary: formData.summary,
      problem: formData.problem,
      solution: formData.solution,
      tech_stack: formData.techStack,
      metrics: formData.metrics,
      thought_process: formData.thoughtProcess,
      process: formData.process,
      tags: formData.techStack,
      description: formData.summary
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Server action exception:", err);
    return { success: false, error: err.message };
  }
}
