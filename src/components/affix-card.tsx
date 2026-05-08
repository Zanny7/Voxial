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
import type { Affix } from "@/data/affixes";

const typeLabels: Record<Affix["type"], string> = {
  prefix: "Prefix",
  suffix: "Suffix",
  both: "Both",
};

type AffixCardProps = {
  affix: Affix;
};

export function AffixCard({ affix }: AffixCardProps) {
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
          variant="outline"
          size="sm"
          aria-label={`Favorite ${affix.displayText}`}
        >
          <Star className="size-4" aria-hidden="true" />
          Favorite
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={`Show examples for ${affix.displayText}`}
        >
          <CircleHelp className="size-4" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}
