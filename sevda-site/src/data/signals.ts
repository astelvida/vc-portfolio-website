export type ThesisCode = "GAO" | "VSRAI";

export interface Signal {
  company: string;
  ssi: number;
  delta: number;
  thesis: ThesisCode;
  hq: string;
  heat: "HOT" | "WARM";
}

export const SIGNALS: Signal[] = [
  { company: "TORTUS AI", ssi: 82, delta: 3, thesis: "VSRAI", hq: "London", heat: "HOT" },
  { company: "Deeploy", ssi: 80, delta: 1, thesis: "GAO", hq: "Amsterdam", heat: "HOT" },
  { company: "Alinia", ssi: 79, delta: 0, thesis: "GAO", hq: "London", heat: "WARM" },
  { company: "Holistic AI", ssi: 78, delta: 2, thesis: "GAO", hq: "London", heat: "WARM" },
  { company: "REMATIQ", ssi: 77, delta: 2, thesis: "VSRAI", hq: "Berlin", heat: "WARM" },
  { company: "Lakera", ssi: 75, delta: 1, thesis: "GAO", hq: "Zurich", heat: "WARM" },
  { company: "QuantPi", ssi: 72, delta: -1, thesis: "GAO", hq: "Berlin", heat: "WARM" },
];
