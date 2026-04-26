export interface Project {
  id: string;
  name: string;
  description: string;
  date: string; // e.g. "Jan 2025"
  why: string;
  what: string;
  how: string;
  status: string;
  next: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "ml-diagnostics",
    name: "ML Diagnostics Engine",
    description: "Catches data problems before they reach the model — class imbalance, silent leakage, distribution drift. Runs a full battery of statistical checks on any tabular dataset and returns a structured risk report before training begins.",
    date: "Mar 2025",
    why: "Models fail silently when the data they're trained on is subtly broken — class imbalance, leakage, distribution drift. There was no single system that caught all of this before training began.",
    what: "A modular diagnostic engine that runs a battery of statistical checks on any tabular dataset: sample adequacy, target sanity, feature integrity, and correlation structure. Returns a structured risk report.",
    how: "Built around a signal-map pattern where each check emits typed signals rather than raw booleans. A logic orchestration layer validates contracts between signals before running risk functions, so failures short-circuit cleanly instead of propagating silently.",
    status: "In progress — core checks working, building the report rendering layer now.",
    next: "Time-series drift detection and a CLI interface so it can be dropped into any training pipeline.",
    github: "https://github.com/UtsavBhalani-101/",
  },
  {
    id: "portfolio",
    name: "This Portfolio",
    description: "Minimal personal site built in Next.js 14 App Router with JetBrains Mono and a strict black-and-white design system. No templates — every layout, token, and interaction decision made from scratch.",
    date: "Apr 2025",
    why: "Needed a home for work and thinking that didn't look like every other developer portfolio. Wanted the design decisions to be as intentional as the projects it hosts.",
    what: "Static-first Next.js site with a dark/light theme toggle, a floating dock nav, and pages for projects, writing, and experience. No template — designed from scratch.",
    how: "App Router with server components where possible, client components only for interactive pieces like the dock and modal. JetBrains Mono throughout. Tailwind CSS with a custom design token layer in globals.css.",
    status: "Live and continuously updated.",
    next: "Decision blogs section — MDX-based writing with a focus on technical reasoning over results.",
    github: "https://github.com/UtsavBhalani-101/",
    live: "https://utsavbhalani.dev",
  },
  {
    id: "effective-sample-size",
    name: "Effective Sample Size Estimator",
    description: "Estimates how much independent information a dataset actually contains, regardless of raw row count. Uses the eigenvalue spectrum of the sample covariance matrix as a proxy for true data diversity.",
    date: "Feb 2025",
    why: "Raw row counts are a poor proxy for how much a dataset can actually teach a model. A dataset with 10,000 near-duplicate rows is informationally thinner than one with 1,000 diverse ones.",
    what: "A standalone module that estimates effective sample size by analyzing the covariance structure of feature space — how much independent information each sample contributes.",
    how: "Uses the eigenvalue spectrum of the sample covariance matrix as a proxy for information density. Ranks are normalized to produce a scalar between 0 and 1 that compares favorably against n_samples.",
    status: "Paused — integrated into the diagnostics engine as a sub-module.",
    next: "Exploring kernel-based variants for non-linear feature spaces.",
  },
];
