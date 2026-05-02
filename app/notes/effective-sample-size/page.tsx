import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Effective Sample Size — Utsav Bhalani",
  description: "Notes on data diversity and sample sizes.",
};

export default function NotePage() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/notes"
          className="inline-block mb-10 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-150"
        >
          ← back
        </Link>
        <article className="max-w-none">
          <header className="mb-10">
            <h1 className="text-xl font-normal text-foreground mb-2">
              Understanding Effective Sample Size
            </h1>
            <time className="text-sm text-muted-foreground tabular-nums">
              Feb 2025
            </time>
          </header>

          <div className="text-sm text-foreground/80 leading-relaxed space-y-6">
            <p>
              When working with large tabular datasets, the raw row count is often a poor proxy for how much a dataset can actually teach a model. A dataset with 10,000 near-duplicate rows is informationally thinner than one with 1,000 diverse ones.
            </p>
            <p>
              To accurately estimate the true diversity of a dataset, I look at the eigenvalue spectrum of the sample covariance matrix. This acts as a proxy for information density, estimating how much independent information each sample contributes.
            </p>
            <h2 className="text-lg font-normal text-foreground mt-8 mb-4 border-b border-border/40 pb-2">
              Mathematical Proxy
            </h2>
            <p>
              By normalizing the ranks of the covariance matrix, you can produce a scalar value between 0 and 1. This value can be multiplied against the original <code className="bg-muted px-1 py-0.5 rounded text-xs">n_samples</code> to give a far more realistic estimate of the dataset's learning potential. It's a fundamental diagnostic to prevent overconfidence in large but redundant datasets.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
