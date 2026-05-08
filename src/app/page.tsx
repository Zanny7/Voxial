import Link from "next/link";
import { ArrowRight, Heart, Landmark, ScrollText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const sections = [
  {
    href: "/greek",
    title: "Greek Affixes",
    description: "Roots and endings for study, sound, time, blood, and form.",
    icon: Landmark,
  },
  {
    href: "/latin",
    title: "Latin Affixes",
    description: "Common parts for movement, shape, capability, and relation.",
    icon: ScrollText,
  },
  {
    href: "/favorites",
    title: "Favorites",
    description: "A saved shelf for affixes worth revisiting.",
    icon: Heart,
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:py-14">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-foreground">
            Classical word study
          </p>
          <div className="space-y-4">
            <h1 className="font-serif text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              Read unfamiliar words by their oldest parts.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Browse Greek and Latin affixes, see their hyphen notation, and
              collect the ones you want to remember.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/greek">
                Start with Greek
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/latin">Open Latin</Link>
            </Button>
          </div>
        </div>
        <div className="border-y border-border/70 py-6 lg:border-l lg:border-y-0 lg:pl-8">
          <p className="font-serif text-3xl leading-snug text-foreground">
            hemo- · -logy · -form-
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Prefixes appear with a trailing hyphen, suffixes with a leading
            hyphen, and forms that can work both ways with hyphens on both
            sides.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <Card key={section.href} className="bg-card/85">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="font-serif text-2xl">
                  {section.title}
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="px-0">
                  <Link href={section.href}>
                    Open section
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
