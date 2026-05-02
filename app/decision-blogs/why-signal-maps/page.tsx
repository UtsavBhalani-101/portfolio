import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why I used Signal Maps — Utsav Bhalani",
  description: "Explaining the architecture behind the ML Diagnostics Engine.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/decision-blogs"
          className="inline-block mb-10 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-150"
        >
          ← back
        </Link>
        <article className="max-w-none">
          <header className="mb-10">
            <h1 className="text-xl font-normal text-foreground mb-2">
              Why I used Signal Maps for the ML Diagnostics Engine
            </h1>
            <time className="text-sm text-muted-foreground tabular-nums">
              May 2025
            </time>
          </header>

          <div className="text-sm text-foreground/80 leading-relaxed space-y-6">
            <p>
              When building the ML Diagnostics Engine, I needed a way to robustly check datasets for various problems before training—class imbalance, silent leakage, and distribution drift. The simplest approach would have been returning raw booleans from isolated functions, but that quickly breaks down at scale.
            </p>
            <p>
              Instead, I designed a <strong>Signal-Map</strong> pattern. Each check in the engine doesn't just return true/false; it emits a strongly typed signal containing metadata about what went wrong, where it happened, and how severe it is.
            </p>
            <h2 className="text-lg font-normal text-foreground mt-8 mb-4 border-b border-border/40 pb-2">
              The Architecture
            </h2>
            <p>
              A logic orchestration layer sits on top of these signals. It validates the contracts between them before running any complex risk functions. If a dependency check fails, the orchestration layer short-circuits gracefully instead of propagating the error silently through the pipeline.
            </p>
            <p>
              This means the user gets a structured, actionable risk report rather than a traceback or a misleading "false" output. It forces the system to be explicit about failures, aligning with the philosophy of catching problems early and loudly.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
