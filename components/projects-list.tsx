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
    <div
      className={[
        "relative border border-border/60 rounded-xl",
        "hover:bg-muted/30 hover:border-border",
        "transition-colors duration-150",
      ].join(" ")}
    >
      {/* Date — top right, very low opacity */}
      <span className="absolute top-6 right-6 text-xs text-foreground opacity-35 font-normal tabular-nums">
        {project.date}
      </span>

      {/* Clickable region — opens modal */}
      <button
        onClick={() => onClick(project)}
        className="w-full text-left px-6 pt-6 pb-4 cursor-pointer"
      >
        {/* Name */}
        <p className="text-xl font-normal text-foreground pr-20">
          {project.name}
        </p>

        {/* Description — 3 lines max, right-padded so it doesn't bleed to the edge */}
        <p className="mt-2 text-sm text-foreground/40 font-normal leading-relaxed line-clamp-3 pr-10">
          {project.description}
        </p>
      </button>

      {/* Links row — sibling of button, not nested inside it (valid HTML) */}
      {(project.github || project.live) && (
        <div className="flex items-center gap-5 px-6 pb-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors duration-150"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors duration-150"
            >
              Live ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  const openModal = useCallback((p: Project) => setSelected(p), []);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={openModal} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  );
}
