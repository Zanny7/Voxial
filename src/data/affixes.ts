export type AffixOrigin = "greek" | "latin";

export type AffixType = "prefix" | "suffix" | "both";

export type AffixExample = {
  word: string;
  explanation: string;
};

export type Affix = {
  id: string;
  origin: AffixOrigin;
  type: AffixType;
  text: string;
  displayText: string;
  shortDescription: string;
  example: AffixExample;
};

function defineAffix(
  id: string,
  origin: AffixOrigin,
  type: AffixType,
  text: string,
  displayText: string,
  shortDescription: string,
  word: string,
  explanation: string,
): Affix {
  return {
    id,
    origin,
    type,
    text,
    displayText,
    shortDescription,
    example: {
      word,
      explanation,
    },
  };
}

export const affixes: Affix[] = [
  defineAffix(
    "greek-hemo",
    "greek",
    "prefix",
    "hemo",
    "hemo-",
    "blood",
    "hemoglobin",
    "A blood protein that carries oxygen.",
  ),
  defineAffix(
    "greek-thermo",
    "greek",
    "prefix",
    "thermo",
    "thermo-",
    "heat",
    "thermometer",
    "An instrument for measuring heat or temperature.",
  ),
  defineAffix(
    "greek-chrono",
    "greek",
    "prefix",
    "chrono",
    "chrono-",
    "time",
    "chronology",
    "The arrangement of events in time order.",
  ),
  defineAffix(
    "greek-logy",
    "greek",
    "suffix",
    "logy",
    "-logy",
    "study of",
    "biology",
    "The study of life.",
  ),
  defineAffix(
    "greek-phobia",
    "greek",
    "suffix",
    "phobia",
    "-phobia",
    "fear",
    "phobia",
    "An intense fear of something.",
  ),
  defineAffix(
    "greek-cracy",
    "greek",
    "suffix",
    "cracy",
    "-cracy",
    "rule or government",
    "democracy",
    "Rule by the people.",
  ),
  defineAffix(
    "greek-graph",
    "greek",
    "both",
    "graph",
    "-graph-",
    "write, draw, or record",
    "graphic",
    "Related to writing, drawing, or visual representation.",
  ),
  defineAffix(
    "greek-phon",
    "greek",
    "both",
    "phon",
    "-phon-",
    "sound or voice",
    "phonics",
    "A method of learning sounds in language.",
  ),
  defineAffix(
    "greek-scope",
    "greek",
    "both",
    "scope",
    "-scope-",
    "look at or examine",
    "microscope",
    "A tool used to look at tiny things.",
  ),
  defineAffix(
    "latin-sub",
    "latin",
    "prefix",
    "sub",
    "sub-",
    "under or below",
    "submarine",
    "A vessel that travels under water.",
  ),
  defineAffix(
    "latin-trans",
    "latin",
    "prefix",
    "trans",
    "trans-",
    "across or through",
    "transport",
    "To carry across a distance.",
  ),
  defineAffix(
    "latin-inter",
    "latin",
    "prefix",
    "inter",
    "inter-",
    "between or among",
    "interact",
    "To act between or with others.",
  ),
  defineAffix(
    "latin-able",
    "latin",
    "suffix",
    "able",
    "-able",
    "capable of being",
    "readable",
    "Capable of being read.",
  ),
  defineAffix(
    "latin-tion",
    "latin",
    "suffix",
    "tion",
    "-tion",
    "act, state, or result",
    "creation",
    "The act or result of creating.",
  ),
  defineAffix(
    "latin-ity",
    "latin",
    "suffix",
    "ity",
    "-ity",
    "state or quality",
    "clarity",
    "The quality of being clear.",
  ),
  defineAffix(
    "latin-form",
    "latin",
    "both",
    "form",
    "-form-",
    "shape or form",
    "formation",
    "The act of shaping or forming.",
  ),
  defineAffix(
    "latin-port",
    "latin",
    "both",
    "port",
    "-port-",
    "carry",
    "portable",
    "Able to be carried.",
  ),
  defineAffix(
    "latin-ject",
    "latin",
    "both",
    "ject",
    "-ject-",
    "throw",
    "project",
    "To throw forward or plan forward.",
  ),
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

export function getAffixExamples(affix: Affix): AffixExample[] {
  return [affix.example];
}
