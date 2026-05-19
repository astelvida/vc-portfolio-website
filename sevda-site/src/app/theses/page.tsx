import type { Metadata } from "next";
import { ThesisPage } from "@/components/thesis-page";

export const metadata: Metadata = {
  title: "Investment Thesis Pack",
  description:
    "Three conviction-backed theses on European AI infrastructure: Compliance AI, Vertical AI in Regulated Industries, and AI Evaluation & Production Infrastructure.",
  openGraph: {
    title: "Investment Thesis Pack | Sevda Anefi",
    description:
      "Three conviction bets on European AI infrastructure. Regulation creates markets. Workflow creates lock-in. Evaluation creates trust.",
  },
};

export default function Page() {
  return <ThesisPage />;
}
