export interface Signal {
  company: string;
  ssi: number;
  delta: number;
  thesis: string;
  hq: string;
  heat: "HOT" | "WARM";
}

export const SIGNALS: Signal[] = [
  { company: "TORTUS AI", ssi: 82, delta: 3, thesis: "VAI", hq: "London", heat: "HOT" },
  { company: "Deeploy", ssi: 80, delta: 1, thesis: "CAI", hq: "Amsterdam", heat: "HOT" },
  { company: "Alinia", ssi: 79, delta: 0, thesis: "CAI", hq: "London", heat: "WARM" },
  { company: "REMATIQ", ssi: 77, delta: 2, thesis: "VAI", hq: "Berlin", heat: "WARM" },
  { company: "Holistic AI", ssi: 74, delta: -1, thesis: "CAI", hq: "London", heat: "WARM" },
];
