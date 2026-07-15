import type { Metadata } from "next";
import { ThesisPage } from "@/components/thesis-page";

export const metadata: Metadata = {
  title: "Investment Thesis Pack",
  description:
    "Two active theses on European AI: Governed Agentic Ops and Vertical System-of-Record AI.",
  openGraph: {
    title: "Investment Thesis Pack | Sevda Anefi",
    description:
      "Two testable theses on European AI. Runtime control earns deployment permission; authoritative workflow creates lock-in.",
  },
};

export default function Page() {
  return <ThesisPage />;
}
