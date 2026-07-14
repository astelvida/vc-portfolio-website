import type { Metadata } from "next";
import localFont from "next/font/local";
import { LiveClock } from "@/components/live-clock";
import { GrainOverlay } from "@/components/grain-overlay";
import { SiteNav } from "@/components/site-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { SITE } from "@/data/site";
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
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sevda Anefi — Early-Stage European AI",
    template: "%s | Sevda Anefi",
  },
  description:
    "Early-stage European AI investor-operator. Two investment theses scored by the proprietary SSI v3.0 dual-rubric signal model.",
  openGraph: {
    title: "Sevda Anefi — Early-Stage European AI",
    description:
      "Two investment theses, scored by the SSI v3.0 dual-rubric signal model.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed",
    },
  },
};

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
      <body className="flex min-h-full flex-col font-body">
        <ScrollProgress />

        {/* Status Bar */}
        <div className="w-full border-b border-border bg-bg">
          <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-2 md:px-9">
            <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.06em] text-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                SYSTEM ACTIVE
              </span>
              <span className="hidden text-text-faint md:inline">|</span>
              <span className="hidden md:inline">{SITE.pipelineCount} TRACKED</span>
              <span className="hidden text-text-faint md:inline">|</span>
              <span className="hidden md:inline">{SITE.thesisCount} THESES LIVE</span>
              <span className="text-text-faint">|</span>
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                SOURCING
              </span>
            </div>
            <div className="hidden items-center gap-3 font-mono text-[9px] tracking-[0.06em] text-text-muted sm:flex">
              <span>{SITE.locations}</span>
              <span className="text-text-faint">|</span>
              <LiveClock />
            </div>
          </div>
        </div>

        <SiteNav />

        <main className="flex-1">
          <div className="mx-auto max-w-[1100px] px-4 py-6 md:px-9 md:py-9">
            {children}
          </div>
        </main>

        <footer className="w-full border-t border-border bg-bg">
          <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-6 md:px-9">
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
