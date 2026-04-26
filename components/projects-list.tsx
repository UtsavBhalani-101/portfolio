"use client";

import { useState, useCallback } from "react";
import type { Project } from "@/lib/projects-data";
import { ProjectModal } from "@/components/project-modal";

interface ProjectsListProps {
  projects: Project[];
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: (p: Project) => void;
}) {
  return (
    <button
      onClick={() => onClick(project)}
      className={[
        // layout
        "w-full text-left",
        // spacing
        "px-5 py-3",
        // look: very subtle border, no heavy weight
        "border border-border/60 rounded-xl",
        // hover state
        "hover:bg-muted/30 hover:border-border",
        // cursor
        "cursor-pointer",
        // transition
        "transition-colors duration-150",
        // relative for the date badge
        "relative",
      ].join(" ")}
    >
      {/* Date — top right, very low opacity, xs */}
      <span className="absolute top-4 right-5 text-xs text-foreground opacity-35 font-normal tabular-nums">
        {project.date}
      </span>

      {/* Name */}
      <p className="text-xl font-normal text-foreground pr-16">
        {project.name}
      </p>

      {/* Description — up to 2 lines */}
      <p className="mt-1.5 text-sm text-foreground/40 font-normal leading-relaxed line-clamp-2">
        {project.description}
      </p>
    </button>
  );
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  const openModal = useCallback((p: Project) => setSelected(p), []);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={openModal} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  );
}
