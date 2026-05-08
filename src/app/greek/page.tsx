import { AffixCard } from "@/components/affix-card";
import { getAffixesByOrigin } from "@/data/affixes";

export default function GreekAffixesPage() {
  const greekAffixes = getAffixesByOrigin("Greek");

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:py-14">
      <section className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-foreground">
          Greek roots
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          Greek affixes
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Browse Greek prefixes, suffixes, and flexible forms used across
          science, medicine, language, and scholarship.
        </p>
      </section>

      {greekAffixes.length > 0 ? (
        <section
          aria-label="Greek affix list"
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {greekAffixes.map((affix) => (
            <AffixCard key={affix.id} affix={affix} />
          ))}
        </section>
      ) : (
        <p className="rounded-md border bg-card/80 p-6 text-muted-foreground">
          No Greek affixes are available yet.
        </p>
      )}
    </div>
  );
}
