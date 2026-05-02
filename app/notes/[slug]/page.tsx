import { getMdxBySlug, getMdxData } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getMdxBySlug("notes", params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.frontmatter.title} — Utsav Bhalani`,
    description: post.frontmatter.description,
  };
}

export async function generateStaticParams() {
  const posts = getMdxData("notes");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const post = getMdxBySlug("notes", params.slug);

  if (!post) {
    notFound();
  }

  // Very basic custom components mapping
  const components = {
    h1: (props: any) => <h1 className="text-xl font-normal text-foreground mt-8 mb-4 border-b border-border/40 pb-2" {...props} />,
    h2: (props: any) => <h2 className="text-lg font-normal text-foreground mt-8 mb-4 border-b border-border/40 pb-2" {...props} />,
    h3: (props: any) => <h3 className="text-base font-normal text-foreground mt-6 mb-3" {...props} />,
    p: (props: any) => <p className="mb-4" {...props} />,
    a: (props: any) => <a className="text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
    strong: (props: any) => <strong className="font-normal text-foreground" {...props} />,
    code: (props: any) => <code className="bg-muted px-1.5 py-0.5 rounded text-xs" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-2 border-border/60 pl-4 italic text-muted-foreground mb-4" {...props} />,
  };

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
              {post.frontmatter.title}
            </h1>
            <time className="text-sm text-muted-foreground tabular-nums">
              {post.frontmatter.date}
            </time>
          </header>

          <div className="text-sm text-foreground/80 leading-relaxed space-y-6">
            <MDXRemote source={post.content} components={components} />
          </div>
        </article>
      </div>
    </main>
  );
}
