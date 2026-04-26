import type { Metadata } from "next";
import { projects } from "@/lib/projects-data";
import { ProjectsList } from "@/components/projects-list";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Utsav Bhalani",
  description: "A collection of things I've built and why I built them.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      {/* Constrained reading width */}
      <div className="mx-auto w-full max-w-2xl">
        {/* Back link */}
        <Link
          href="/"
          className="inline-block mb-10 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-150"
        >
          ← back
        </Link>

        {/* Page heading */}
        <h1 className="text-base font-normal text-foreground mb-1">
          Projects
        </h1>
        <p className="text-sm text-muted-foreground font-normal mb-8">
          Things I've built. Click any card for the full picture.
        </p>

        {/* Card list + modal — client component */}
        <ProjectsList projects={projects} />
      </div>
    </main>
  );
}

