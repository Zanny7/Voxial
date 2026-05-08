"use client";

import { CircleHelp, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFavorites } from "@/components/favorites-provider";
import type { Affix } from "@/data/affixes";
import { cn } from "@/lib/utils";

const typeLabels: Record<Affix["type"], string> = {
  prefix: "Prefix",
  suffix: "Suffix",
  both: "Both",
};

type AffixCardProps = {
  affix: Affix;
};

export function AffixCard({ affix }: AffixCardProps) {
  const { hydrated, isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(affix.id);

  return (
    <Card className="bg-card/88">
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="font-serif text-4xl leading-none">
              {affix.displayText}
            </CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              {affix.meaning}
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {typeLabels[affix.type]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 text-sm">
        <Badge variant="outline">{affix.origin}</Badge>
        <Badge variant="outline">{affix.type}</Badge>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button
          type="button"
          variant={saved ? "default" : "outline"}
          size="sm"
          aria-label={`${saved ? "Remove" : "Favorite"} ${affix.displayText}`}
          aria-pressed={saved}
          disabled={!hydrated}
          onClick={() => toggleFavorite(affix.id)}
        >
          <Star
            className={cn("size-4", saved && "fill-current")}
            aria-hidden="true"
          />
          {saved ? "Saved" : "Favorite"}
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label={`Show examples for ${affix.displayText}`}
            >
              <CircleHelp className="size-4" aria-hidden="true" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">
                {affix.displayText} examples
              </DialogTitle>
              <DialogDescription>
                Three common words built with this {affix.origin}{" "}
                {typeLabels[affix.type].toLowerCase()}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3">
              {affix.examples.map((example) => (
                <div
                  key={example.word}
                  className="rounded-md border bg-card/80 p-4"
                >
                  <p className="font-serif text-xl font-semibold">
                    {example.word}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {example.explanation}
                  </p>
                </div>
              ))}
            </div>
            <DialogFooter showCloseButton />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
