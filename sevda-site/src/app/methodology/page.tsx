import type { Metadata } from "next";
import { MethodologyPage } from "@/components/methodology-page";

export const metadata: Metadata = {
  title: "Scout Methodology",
  description:
    "How the European AI scouting engine works. Two theses, two rubrics, three signal layers, one regulatory source of truth. SSI v3.0 scoring. No score without a source.",
  openGraph: {
    title: "Scout Methodology | Sevda Anefi",
    description:
      "Two theses, two rubrics, three signal layers. The engine that finds pre-consensus European AI before it lands on PitchBook.",
  },
};

export default function Page() {
  return <MethodologyPage />;
}
