import type { Metadata } from "next";
import { ThesisPage } from "@/components/thesis-page";

export const metadata: Metadata = {
  title: "Investment Thesis Pack",
  description:
    "Two conviction-backed theses on European AI: Governed Agentic Ops and Vertical System-of-Record AI.",
  openGraph: {
    title: "Investment Thesis Pack | Sevda Anefi",
    description:
      "Two conviction bets on European AI. Regulation creates deployment permission. Workflow creates lock-in.",
  },
};

export default function Page() {
  return <ThesisPage />;
}
