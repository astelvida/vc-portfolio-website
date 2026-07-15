import type { Metadata } from "next";
import { MethodologyPage } from "@/components/methodology-page";

export const metadata: Metadata = {
  title: "Scout Methodology",
  description:
    "The public SSI v4.0 evidence contract: facts, inferences, uncertainty, signal layers, falsifiers, and the public-private boundary.",
  openGraph: {
    title: "Scout Methodology | Sevda Anefi",
    description:
      "Evidence before score. Falsifiers before conviction. The public method behind European AI research and scouting.",
  },
};

export default function Page() {
  return <MethodologyPage />;
}
