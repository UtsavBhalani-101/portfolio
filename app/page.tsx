import Link from "next/link";
import { DotPattern } from "@/components/ui/dot-pattern";
import { DockNav } from "@/components/dock-nav";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Decision Blogs", href: "/decision-blogs" },
  { label: "Notes", href: "/notes" },
  { label: "Experience", href: "/experience" },
];

export default function Home() {
  return (
    <main className="relative flex flex-1 min-h-screen overflow-hidden">
      {/* Subtle dot grid background — low opacity, no glow */}
      <DotPattern
        width={24}
        height={24}
        cr={0.8}
        className="opacity-[0.22] dark:opacity-[0.18]"
      />
      {/* Two-column grid: stacks vertically on mobile, splits on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Left column — Name & bio, positioned slightly above vertical center */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 pt-24 pb-12 md:pt-0 md:pb-0 md:-mt-16">
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight">
            Utsav Bhalani
          </h1>
          <p className="mt-4 text-sm text-muted-foreground font-normal max-w-xs leading-relaxed">
            20. Building a system to catch data problems before they reach model.
          </p>
        </div>

        {/* Right column — Navigation links, vertically centered */}
        <nav className="flex flex-col justify-center gap-6 px-8 sm:px-12 md:px-16 lg:px-24 pb-24 md:pb-0 md:-mt-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors duration-150 ease-in-out cursor-pointer"
            >
              <span className="group-hover:underline underline-offset-4 decoration-current transition-all duration-200">{link.label}</span>
              <span className="text-sm transition-colors duration-150 ease-in-out">
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Floating dock — fixed bottom center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <DockNav />
      </div>
    </main>
  );
}

