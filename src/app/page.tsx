import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Sevda Anefi — Early-Stage European AI",
  description:
    "Early-stage European AI investor-operator. Two conviction-backed theses — Governed Agentic Ops and Vertical System-of-Record AI. Signals over stories.",
};

export default function Page() {
  return <HomePage />;
}
