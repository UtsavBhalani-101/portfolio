import Link from "next/link";
import type { Metadata } from "next";
import { getMdxData } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Decision Blogs — Utsav Bhalani",
  description: "Technical reasoning over results.",
};

export default function DecisionBlogsPage() {
  const blogs = getMdxData("decision-blogs").sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

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
          Decision Blogs
        </h1>
        <p className="text-sm text-muted-foreground font-normal mb-8">
          Technical reasoning over results.
        </p>

        <div className="flex flex-col gap-4 mt-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/decision-blogs/${blog.slug}`}
              className="group flex justify-between items-baseline py-2 cursor-pointer"
            >
              <span className="text-base text-foreground group-hover:underline underline-offset-4 decoration-current transition-all duration-200">
                {blog.frontmatter.title}
              </span>
              <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap ml-4">
                {blog.frontmatter.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
