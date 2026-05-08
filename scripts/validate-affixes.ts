import { affixes, type AffixOrigin, type AffixType } from "../src/data/affixes";

const allowedOrigins = new Set<AffixOrigin>(["greek", "latin"]);
const allowedTypes = new Set<AffixType>(["prefix", "suffix", "both"]);

const errors: string[] = [];
const seenIds = new Set<string>();

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

  if (!allowedOrigins.has(affix.origin)) {
    errors.push(`${affix.id}: invalid origin "${affix.origin}".`);
  }

  if (!allowedTypes.has(affix.type)) {
    errors.push(`${affix.id}: invalid type "${affix.type}".`);
  }

  if (!affix.shortDescription.trim()) {
    errors.push(`${affix.id}: shortDescription must not be empty.`);
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
