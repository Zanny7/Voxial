import { affixes, type AffixOrigin, type AffixType } from "../src/data/affixes";

const allowedOrigins = new Set<AffixOrigin>(["greek", "latin"]);
const allowedTypes = new Set<AffixType>(["prefix", "suffix", "both"]);

const errors: string[] = [];
const seenIds = new Set<string>();

function hasPrefixNotation(displayText: string) {
  return displayText.endsWith("-") && !displayText.startsWith("-");
}

function hasSuffixNotation(displayText: string) {
  return displayText.startsWith("-") && !displayText.endsWith("-");
}

function hasBothNotation(displayText: string) {
  return displayText.startsWith("-") && displayText.endsWith("-");
}

for (const affix of affixes) {
  if (!affix.id.trim()) {
    errors.push("Affix id must not be empty.");
  }

  if (seenIds.has(affix.id)) {
    errors.push(`Duplicate affix id: ${affix.id}`);
  }

  seenIds.add(affix.id);

  if (!affix.text.trim()) {
    errors.push(`${affix.id}: text must not be empty.`);
  }

  if (!affix.displayText.trim()) {
    errors.push(`${affix.id}: displayText must not be empty.`);
  }

  if (affix.type === "prefix" && !hasPrefixNotation(affix.displayText)) {
    errors.push(
      `${affix.id}: prefix displayText must use trailing hyphen notation.`,
    );
  }

  if (affix.type === "suffix" && !hasSuffixNotation(affix.displayText)) {
    errors.push(
      `${affix.id}: suffix displayText must use leading hyphen notation.`,
    );
  }

  if (affix.type === "both" && !hasBothNotation(affix.displayText)) {
    errors.push(
      `${affix.id}: both displayText must use leading and trailing hyphens.`,
    );
  }

  if (!allowedOrigins.has(affix.origin)) {
    errors.push(`${affix.id}: invalid origin "${affix.origin}".`);
  }

  if (!allowedTypes.has(affix.type)) {
    errors.push(`${affix.id}: invalid type "${affix.type}".`);
  }

  if (!affix.shortDescription.trim()) {
    errors.push(`${affix.id}: shortDescription must not be empty.`);
  }

  if (!affix.example || typeof affix.example !== "object") {
    errors.push(`${affix.id}: example must be an object.`);
    continue;
  }

  if (!affix.example.word.trim()) {
    errors.push(`${affix.id}: example word must not be empty.`);
  }

  if (!affix.example.explanation.trim()) {
    errors.push(`${affix.id}: example explanation must not be empty.`);
  }
}

if (errors.length > 0) {
  console.error("Affix data validation failed:");

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  process.exit(1);
}

console.log(`Affix data validation passed for ${affixes.length} records.`);
