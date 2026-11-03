import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Sevda Anefi — Early-Stage European AI",
  description:
    "Independent research on early-stage European software and AI, informed by finance, production engineering and founder/operator experience.",
};

export default function Page() {
  return <HomePage />;
}
