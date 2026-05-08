export type AffixOrigin = "Greek" | "Latin";

export type AffixType = "prefix" | "suffix" | "both";

export type AffixExample = {
  word: string;
  explanation: string;
};

export type Affix = {
  id: string;
  text: string;
  displayText: string;
  origin: AffixOrigin;
  type: AffixType;
  meaning: string;
  examples: [AffixExample, AffixExample, AffixExample];
};

export const affixes: Affix[] = [
  {
    id: "greek-hemo",
    text: "hemo",
    displayText: "hemo-",
    origin: "Greek",
    type: "prefix",
    meaning: "blood",
    examples: [
      {
        word: "hemoglobin",
        explanation: "A protein in red blood cells that carries oxygen.",
      },
      {
        word: "hemophobia",
        explanation: "A strong fear of blood.",
      },
      {
        word: "hemorrhage",
        explanation: "Heavy bleeding from a damaged blood vessel.",
      },
    ],
  },
  {
    id: "greek-thermo",
    text: "thermo",
    displayText: "thermo-",
    origin: "Greek",
    type: "prefix",
    meaning: "heat",
    examples: [
      {
        word: "thermometer",
        explanation: "A tool that measures heat or temperature.",
      },
      {
        word: "thermostat",
        explanation: "A device that controls temperature.",
      },
      {
        word: "thermodynamics",
        explanation: "The study of heat, energy, and motion.",
      },
    ],
  },
  {
    id: "greek-chrono",
    text: "chrono",
    displayText: "chrono-",
    origin: "Greek",
    type: "prefix",
    meaning: "time",
    examples: [
      {
        word: "chronology",
        explanation: "The order in which events happened over time.",
      },
      {
        word: "chronometer",
        explanation: "A very accurate time-measuring instrument.",
      },
      {
        word: "chronicle",
        explanation: "A record of events arranged by time.",
      },
    ],
  },
  {
    id: "greek-logy",
    text: "logy",
    displayText: "-logy",
    origin: "Greek",
    type: "suffix",
    meaning: "study of",
    examples: [
      {
        word: "biology",
        explanation: "The study of living things.",
      },
      {
        word: "geology",
        explanation: "The study of Earth and rocks.",
      },
      {
        word: "mythology",
        explanation: "The study or collection of myths.",
      },
    ],
  },
  {
    id: "greek-phobia",
    text: "phobia",
    displayText: "-phobia",
    origin: "Greek",
    type: "suffix",
    meaning: "fear of",
    examples: [
      {
        word: "acrophobia",
        explanation: "A fear of heights.",
      },
      {
        word: "claustrophobia",
        explanation: "A fear of enclosed spaces.",
      },
      {
        word: "hemophobia",
        explanation: "A fear of blood.",
      },
    ],
  },
  {
    id: "greek-cracy",
    text: "cracy",
    displayText: "-cracy",
    origin: "Greek",
    type: "suffix",
    meaning: "rule or government",
    examples: [
      {
        word: "democracy",
        explanation: "Government by the people.",
      },
      {
        word: "aristocracy",
        explanation: "Rule by a privileged class.",
      },
      {
        word: "bureaucracy",
        explanation: "Government or management through many offices.",
      },
    ],
  },
  {
    id: "greek-graph",
    text: "graph",
    displayText: "-graph-",
    origin: "Greek",
    type: "both",
    meaning: "write, draw, or record",
    examples: [
      {
        word: "graphite",
        explanation: "A material used for writing or drawing.",
      },
      {
        word: "autograph",
        explanation: "A person's own written signature.",
      },
      {
        word: "graphology",
        explanation: "The study of handwriting.",
      },
    ],
  },
  {
    id: "greek-phon",
    text: "phon",
    displayText: "-phon-",
    origin: "Greek",
    type: "both",
    meaning: "sound or voice",
    examples: [
      {
        word: "phonics",
        explanation: "A way of teaching reading through sounds.",
      },
      {
        word: "telephone",
        explanation: "A device that carries sound over distance.",
      },
      {
        word: "symphony",
        explanation: "Music with sounds played together.",
      },
    ],
  },
  {
    id: "greek-scope",
    text: "scope",
    displayText: "-scope-",
    origin: "Greek",
    type: "both",
    meaning: "look at or observe",
    examples: [
      {
        word: "microscope",
        explanation: "A tool used to look at very small things.",
      },
      {
        word: "telescope",
        explanation: "A tool used to look at faraway objects.",
      },
      {
        word: "periscope",
        explanation: "A viewing tool that lets someone see around obstacles.",
      },
    ],
  },
  {
    id: "latin-sub",
    text: "sub",
    displayText: "sub-",
    origin: "Latin",
    type: "prefix",
    meaning: "under or below",
    examples: [
      {
        word: "submarine",
        explanation: "A vessel that travels under water.",
      },
      {
        word: "subway",
        explanation: "A railway that often runs below ground.",
      },
      {
        word: "substandard",
        explanation: "Below the expected standard.",
      },
    ],
  },
  {
    id: "latin-trans",
    text: "trans",
    displayText: "trans-",
    origin: "Latin",
    type: "prefix",
    meaning: "across or through",
    examples: [
      {
        word: "transport",
        explanation: "To carry something across a distance.",
      },
      {
        word: "transatlantic",
        explanation: "Across the Atlantic Ocean.",
      },
      {
        word: "transparent",
        explanation: "Letting light pass through.",
      },
    ],
  },
  {
    id: "latin-inter",
    text: "inter",
    displayText: "inter-",
    origin: "Latin",
    type: "prefix",
    meaning: "between or among",
    examples: [
      {
        word: "international",
        explanation: "Between or involving nations.",
      },
      {
        word: "interact",
        explanation: "To act with or affect one another.",
      },
      {
        word: "intermission",
        explanation: "A break between parts of a performance.",
      },
    ],
  },
  {
    id: "latin-able",
    text: "able",
    displayText: "-able",
    origin: "Latin",
    type: "suffix",
    meaning: "capable of being",
    examples: [
      {
        word: "readable",
        explanation: "Able to be read easily.",
      },
      {
        word: "portable",
        explanation: "Able to be carried.",
      },
      {
        word: "breakable",
        explanation: "Able to be broken.",
      },
    ],
  },
  {
    id: "latin-tion",
    text: "tion",
    displayText: "-tion",
    origin: "Latin",
    type: "suffix",
    meaning: "act, state, or result",
    examples: [
      {
        word: "creation",
        explanation: "The act or result of creating.",
      },
      {
        word: "motion",
        explanation: "The act or state of moving.",
      },
      {
        word: "education",
        explanation: "The process of teaching or learning.",
      },
    ],
  },
  {
    id: "latin-ity",
    text: "ity",
    displayText: "-ity",
    origin: "Latin",
    type: "suffix",
    meaning: "state or quality",
    examples: [
      {
        word: "clarity",
        explanation: "The quality of being clear.",
      },
      {
        word: "activity",
        explanation: "The state of being active.",
      },
      {
        word: "stability",
        explanation: "The quality of being steady.",
      },
    ],
  },
  {
    id: "latin-form",
    text: "form",
    displayText: "-form-",
    origin: "Latin",
    type: "both",
    meaning: "shape",
    examples: [
      {
        word: "formation",
        explanation: "The act of giving shape or structure.",
      },
      {
        word: "uniform",
        explanation: "Having one consistent shape or appearance.",
      },
      {
        word: "deform",
        explanation: "To change something out of its usual shape.",
      },
    ],
  },
  {
    id: "latin-port",
    text: "port",
    displayText: "-port-",
    origin: "Latin",
    type: "both",
    meaning: "carry",
    examples: [
      {
        word: "portable",
        explanation: "Easy to carry.",
      },
      {
        word: "transport",
        explanation: "To carry across a distance.",
      },
      {
        word: "import",
        explanation: "To carry goods into a country.",
      },
    ],
  },
  {
    id: "latin-ject",
    text: "ject",
    displayText: "-ject-",
    origin: "Latin",
    type: "both",
    meaning: "throw",
    examples: [
      {
        word: "project",
        explanation: "To throw an idea forward or plan something.",
      },
      {
        word: "eject",
        explanation: "To throw something out.",
      },
      {
        word: "injection",
        explanation: "The act of throwing or putting something in.",
      },
    ],
  },
];

export function getAffixesByOrigin(origin: AffixOrigin) {
  return affixes.filter((affix) => affix.origin === origin);
}

export function getAffixesByType(type: AffixType) {
  return affixes.filter((affix) => affix.type === type);
}

export function getAffixById(id: string) {
  return affixes.find((affix) => affix.id === id);
}
