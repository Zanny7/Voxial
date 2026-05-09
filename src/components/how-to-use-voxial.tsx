import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const labelGuides = [
  {
    label: "Prefix",
    example: "hemo-",
    description:
      "A word part that is added to the beginning of a word. In Voxial, prefixes are shown with a hyphen after them.",
  },
  {
    label: "Suffix",
    example: "-logy",
    description:
      "A word part that is added to the end of a word. In Voxial, suffixes are shown with a hyphen before them.",
  },
  {
    label: "Affix",
    example: "-form-",
    description:
      "In Voxial, this label means the word part can be used as either a prefix-like or suffix-like form. These are shown with hyphens on both sides.",
  },
];

export function HowToUseVoxial() {
  return (
    <Card className="overflow-hidden border-accent/60 bg-card/80 shadow-sm">
      <CardHeader className="border-b bg-secondary/35">
        <Badge variant="outline" className="border-accent/70 bg-card/80">
          Field note
        </Badge>
        <CardTitle className="font-serif text-2xl sm:text-3xl">
          How to use Voxial
        </CardTitle>
        <CardDescription className="max-w-4xl text-base leading-7">
          Voxial helps you explore Greek and Latin word parts. Each card shows a
          word part, its origin, a short meaning, and an example word. Use the
          hyphen placement to understand how the word part is commonly attached
          to other words.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 pt-6 md:grid-cols-3">
        {labelGuides.map((guide) => (
          <div
            key={guide.label}
            className="rounded-lg border bg-background/55 p-4 shadow-inner"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{guide.label}</Badge>
              <code className="rounded-md border bg-card px-2 py-1 font-mono text-sm font-semibold text-primary">
                {guide.example}
              </code>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {guide.description}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
