import { AffixCard } from "@/components/affix-card";
import { HowToUseVoxial } from "@/components/how-to-use-voxial";
import { getAffixesByOrigin } from "@/data/affixes";

export default function LatinAffixesPage() {
  const latinAffixes = getAffixesByOrigin("latin");

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:py-14">
      <section className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-foreground">
          Latin roots
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          Latin affixes
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Explore Latin prefixes, suffixes, and flexible forms that still shape
          English vocabulary.
        </p>
      </section>

      <HowToUseVoxial />

      {latinAffixes.length > 0 ? (
        <section
          aria-label="Latin affix list"
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {latinAffixes.map((affix) => (
            <AffixCard key={affix.id} affix={affix} />
          ))}
        </section>
      ) : (
        <p className="rounded-md border bg-card/80 p-6 text-muted-foreground">
          No Latin affixes are available yet.
        </p>
      )}
    </div>
  );
}
