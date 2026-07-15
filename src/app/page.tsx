import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Sevda Anefi — Early-Stage European AI",
  description:
    "European AI investor-operator. Two active theses, a public SSI v4.0 methodology, and research across political economy, venture, and company-building.",
};

export default function Page() {
  return <HomePage />;
}
