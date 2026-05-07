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
    description: "Catches data problems before they reach the model. Class imbalance, silent leakage, distribution drift. Runs a full battery of statistical checks on any tabular dataset and returns a structured risk report before training begins.",
    date: "Mar 2025",
    why: "Models fail silently when the data they're trained on is subtly broken. Imbalance, leakage, distribution drift, there was no single system that caught all of this before training began.",
    what: "A modular diagnostic engine that runs a battery of statistical checks on any tabular dataset: sample adequacy, target sanity, feature integrity, and correlation structure. Returns a structured risk report.",
    how: "Built around a signal-map pattern where each check emits typed signals rather than raw booleans. A logic orchestration layer validates contracts between signals before running risk functions, so failures short-circuit cleanly instead of propagating silently.",
    status: "In progress — core checks working, building L2.",
    next: "Time-series drift detection and a CLI interface so it can be dropped into any training pipeline.",
    github: "https://github.com/UtsavBhalani-101/ML-diagnostics-system",
    live: "https://www.probeengine.tech"
  },
  {
    id: "sleep-irregularity-detection",
    name: "Sleep Breathing Irregularity Detection",
    description: "Detects abnormal breathing events during sleep from multi-channel physiological signals. A 1D CNN classifies 30-second signal windows as normal or abnormal, evaluated with leave-one-participant-out cross-validation for subject-independent generalization.",
    date: "Jan 2025",
    why: "Sleep apnea diagnosis relies on manual scoring of overnight recordings — slow, subjective, and expensive. Automated detection from raw signals could make screening faster and more accessible.",
    what: "An end-to-end pipeline that takes raw overnight recordings (nasal airflow, thoracic effort, SpO₂), preprocesses them with bandpass filtering, segments into overlapping windows, and classifies each window as normal or abnormal breathing.",
    how: "Signals are bandpass-filtered (0.17-0.4 Hz) and split into 30-second windows with 50% overlap. Each window is labeled based on >50% overlap with annotated events. A 1D CNN is trained using Leave-One-Participant-Out (LOPO) cross-validation. Classical models (XGBoost) were also benchmarked under the same protocol for comparison.",
    status: "Complete — CNN and classical baselines evaluated across all participants.",
    next: "Exploring attention-based architectures and multi-class event detection beyond binary labeling.",
    github: "https://github.com/UtsavBhalani-101/Sleep-breathing-irregularity-detection",
  },
];
