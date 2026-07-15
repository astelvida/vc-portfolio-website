"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/theses", label: "THESES" },
  { href: "/methodology", label: "METHODOLOGY" },
  { href: "/engine", label: "ENGINE" },
  { href: "/research", label: "RESEARCH" },
  { href: "/writing", label: "WRITING" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="w-full border-b border-border bg-bg">
      <div className="mx-auto flex max-w-[1100px] items-center gap-4 px-4 py-3 md:px-9">
        <Link
          href="/"
          className="shrink-0 font-display text-sm font-extrabold tracking-[-0.04em] text-text"
        >
          SEVDA ANEFI
        </Link>

        <div className="ml-auto hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`font-mono text-[10px] font-semibold tracking-[0.08em] transition-colors duration-200 ${
                  active ? "text-accent" : "text-text-muted hover:text-text"
                }`}
              >
                {active ? `[ ${link.label} ]` : link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="ml-auto border border-border px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.1em] text-text transition-colors hover:border-border-hover md:hidden"
        >
          MENU +
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-ink md:hidden"
          >
            <div className="flex items-center justify-between border-b border-ink-border px-4 py-3">
              <span className="font-display text-sm font-extrabold tracking-[-0.04em] text-white">
                SEVDA ANEFI
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="border border-ink-border px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.1em] text-white"
              >
                CLOSE ×
              </button>
            </div>
            <div className="flex flex-col">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="flex items-baseline gap-4 border-b border-ink-border px-4 py-5"
                  >
                    <span className="font-mono text-[10px] text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-2xl font-extrabold tracking-[-0.04em] ${
                        active ? "text-accent" : "text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
