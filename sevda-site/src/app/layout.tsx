import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { LiveClock } from "@/components/live-clock";
import { GrainOverlay } from "@/components/grain-overlay";
import "./globals.css";

const syne = localFont({
  variable: "--font-syne",
  src: [
    { path: "../fonts/syne-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/syne-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

const dmSans = localFont({
  variable: "--font-dm-sans",
  src: [
    { path: "../fonts/dm-sans-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/dm-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/dm-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

const jetbrainsMono = localFont({
  variable: "--font-jetbrains-mono",
  src: [
    { path: "../fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Sevda Anefi — Early-Stage European AI",
    template: "%s | Sevda Anefi",
  },
  description:
    "Early-stage European AI investor. Three investment theses backed by a proprietary signal model.",
  openGraph: {
    title: "Sevda Anefi — Early-Stage European AI",
    description:
      "Three investment theses backed by a proprietary signal model.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed",
    },
  },
};

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/theses", label: "THESES" },
  { href: "/methodology", label: "METHODOLOGY" },
  { href: "/signals", label: "SIGNALS" },
  { href: "/writing", label: "WRITING" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        {/* Status Bar */}
        <div className="w-full border-b border-border bg-surface">
          <div className="mx-auto max-w-[1100px] px-4 md:px-9 flex items-center justify-between py-2">
            <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.06em] text-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                SYSTEM ACTIVE
              </span>
              <span className="hidden md:inline text-text-faint">|</span>
              <span className="hidden md:inline">78 TRACKED</span>
              <span className="hidden md:inline text-text-faint">|</span>
              <span className="hidden md:inline">2 THESES LIVE</span>
              <span className="text-text-faint">|</span>
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                SOURCING
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 font-mono text-[9px] tracking-[0.06em] text-text-muted">
              <span>LDN / BUH</span>
              <span className="text-text-faint">|</span>
              <LiveClock />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="w-full border-b border-border bg-surface">
          <div className="mx-auto max-w-[1100px] px-4 md:px-9 flex items-center gap-4 md:gap-6 py-3">
            <Link
              href="/"
              className="font-display text-sm font-bold tracking-[-0.04em] text-text shrink-0"
            >
              SEVDA ANEFI
            </Link>
            <div className="flex items-center gap-3 md:gap-5 overflow-x-auto no-scrollbar -mx-1 px-1 ml-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted whitespace-nowrap transition-colors duration-200 hover:text-text shrink-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mx-auto max-w-[1100px] px-4 py-6 md:px-9 md:py-9">{children}</div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-border bg-surface">
          <div className="mx-auto max-w-[1100px] px-4 md:px-9 py-6 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.06em] text-text-muted">
              &copy; {new Date().getFullYear()} SEVDA ANEFI
            </span>
            <span className="font-mono text-[10px] tracking-[0.06em] text-text-muted">
              SIGNALS OVER STORIES
            </span>
          </div>
        </footer>

        <GrainOverlay />
      </body>
    </html>
  );
}
