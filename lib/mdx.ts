import fs from "fs";
import path from "path";

type Frontmatter = {
  title: string;
  date: string;
  description?: string;
};

type MdxData = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
};

export function getMdxFiles(dir: string) {
  const fullPath = path.join(process.cwd(), "content", dir);
  if (!fs.existsSync(fullPath)) return [];
  const files = fs.readdirSync(fullPath);
  return files.filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

export function getMdxData(dir: string): MdxData[] {
  const files = getMdxFiles(dir);
  return files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const fullPath = path.join(process.cwd(), "content", dir, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    
    // basic frontmatter parser
    const frontmatter: Frontmatter = { title: slug, date: "" };
    const frontmatterRegex = /^---\s*[\r\n]([\s\S]*?)[\r\n]---/;
    const match = fileContent.match(frontmatterRegex);
    
    if (match) {
      const fmString = match[1];
      const titleMatch = fmString.match(/title:\s*"?([^"\r\n]+)"?/);
      const dateMatch = fmString.match(/date:\s*"?([^"\r\n]+)"?/);
      const descMatch = fmString.match(/description:\s*"?([^"\r\n]+)"?/);
      if (titleMatch) frontmatter.title = titleMatch[1];
      if (dateMatch) frontmatter.date = dateMatch[1];
      if (descMatch) frontmatter.description = descMatch[1];
    }

    const content = fileContent.replace(frontmatterRegex, "").trim();

    return { slug, frontmatter, content };
  });
}

export function getMdxBySlug(dir: string, slug: string): MdxData | null {
  const data = getMdxData(dir);
  const mdx = data.find((item) => item.slug === slug);
  return mdx || null;
}
