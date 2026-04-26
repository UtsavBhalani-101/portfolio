"use client";

import { useEffect, useRef, useCallback } from "react";
import type { Project } from "@/lib/projects-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

interface SectionProps {
  label: string;
  children: React.ReactNode;
}

function Section({ label, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-normal">
        {label}
      </span>
      <p className="text-sm text-foreground/90 leading-relaxed font-normal">
        {children}
      </p>
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  // Close when clicking the backdrop (not the panel)
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  const bothLinks = project?.github && project?.live;

  return (
    /*
     * Outer wrapper: always in the DOM so CSS transitions work cleanly.
     * data-open drives the Tailwind opacity/pointer-events states.
     */
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-label={project?.name ?? "Project details"}
      className={[
        // layout
        "fixed inset-0 z-50 flex items-center justify-center px-4",
        // backdrop
        "bg-black/60 backdrop-blur-sm",
        // transition
        "transition-opacity duration-200",
        project ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      {/* Modal panel */}
      <div
        ref={panelRef}
        className={[
          // sizing
          "relative w-full max-w-xl max-h-[85vh]",
          // look
          "bg-background border border-border rounded-sm",
          // scrollable content
          "overflow-y-auto",
          // inner spacing
          "p-7",
          // transition: scale + opacity
          "transition-all duration-200",
          project ? "scale-100 opacity-100" : "scale-95 opacity-0",
        ].join(" ")}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-150 text-base leading-none cursor-pointer"
        >
          ✕
        </button>

        {project && (
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="pr-6">
              <h2 className="text-base font-normal text-foreground">
                {project.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground font-normal">
                {project.description}
              </p>
            </div>

            {/* Sections */}
            <Section label="Why">{project.why}</Section>
            <Section label="What">{project.what}</Section>
            <Section label="How">{project.how}</Section>
            <Section label="Status">{project.status}</Section>
            <Section label="Next">{project.next}</Section>

            {/* Links */}
            {(project.github || project.live) && (
              <div className="flex items-stretch border border-border rounded-sm overflow-hidden mt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "flex-1 text-center py-2.5 text-xs text-muted-foreground",
                      "hover:text-foreground hover:bg-muted/40 transition-colors duration-150",
                      "font-normal tracking-wide",
                    ].join(" ")}
                  >
                    GitHub ↗
                  </a>
                )}

                {/* Vertical separator only when both links exist */}
                {bothLinks && (
                  <div className="w-px bg-border self-stretch" />
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "flex-1 text-center py-2.5 text-xs text-muted-foreground",
                      "hover:text-foreground hover:bg-muted/40 transition-colors duration-150",
                      "font-normal tracking-wide",
                    ].join(" ")}
                  >
                    Live ↗
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
