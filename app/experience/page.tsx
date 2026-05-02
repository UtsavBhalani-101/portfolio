import type { Metadata } from "next";
import { ProjectsList } from "@/components/projects-list";
import Link from "next/link";
import { Project } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Experience — Utsav Bhalani",
  description: "My work experience.",
};

const experienceData: Project[] = [
  {
    id: "self-independent-ml-work",
    name: "Self Independent ML Work",
    description: "Independent exploration and building of Machine Learning systems, with a focus on data diagnostics and robust models.",
    date: "Jan 2024 — Present",
    why: "Wanted to deeply understand the failure modes of machine learning systems beyond standard tutorials.",
    what: "Built tools to analyze tabular datasets, detect distribution drift, and identify data leakage.",
    how: "Used Python, Pandas, Scikit-learn, and various statistical techniques to build modular, testable components.",
    status: "Ongoing",
    next: "Continuing to build out the ML Diagnostics Engine.",
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="inline-block mb-10 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-150"
        >
          ← back
        </Link>
        <h1 className="text-base font-normal text-foreground mb-1">
          Experience
        </h1>
        <p className="text-sm text-muted-foreground font-normal mb-8">
          Where I've worked and what I've done.
        </p>

        <ProjectsList projects={experienceData} />
      </div>
    </main>
  );
}
