"use client";

import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";

import { AffixCard } from "@/components/affix-card";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/components/favorites-provider";
import { affixes } from "@/data/affixes";

export default function FavoritesPage() {
  const { favoriteIds, hydrated } = useFavorites();
  const favoriteAffixes = affixes.filter((affix) =>
    favoriteIds.includes(affix.id),
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:py-14">
      <section className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-foreground">
          Saved shelf
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          Favorites
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Revisit the affixes you have marked from the Greek and Latin pages.
        </p>
      </section>

      {!hydrated ? (
        <p className="rounded-md border bg-card/80 p-6 text-muted-foreground">
          Loading favorites.
        </p>
      ) : favoriteAffixes.length > 0 ? (
        <section
          aria-label="Favorite affix list"
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {favoriteAffixes.map((affix) => (
            <AffixCard key={affix.id} affix={affix} />
          ))}
        </section>
      ) : (
        <div className="rounded-md border bg-card/80 p-6">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="flex size-11 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Heart className="size-5" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-semibold">
                No favorites yet
              </h2>
              <p className="leading-7 text-muted-foreground">
                Save affixes from the Greek or Latin collections, then return
                here to review them.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/greek">
                  <BookOpen className="size-4" aria-hidden="true" />
                  Browse Greek
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/latin">Browse Latin</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
