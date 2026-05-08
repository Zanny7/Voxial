"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Landmark, ScrollText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/greek", label: "Greek", icon: Landmark },
  { href: "/latin", label: "Latin", icon: ScrollText },
  { href: "/favorites", label: "Favorites", icon: Heart },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="flex flex-wrap gap-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Button
            key={item.href}
            asChild
            variant={isActive ? "default" : "outline"}
            size="sm"
            className={cn(
              "min-w-28 justify-start border-border/80",
              !isActive && "bg-background/70",
            )}
          >
            <Link href={item.href} aria-current={isActive ? "page" : undefined}>
              <Icon className="size-4" aria-hidden="true" />
              {item.label}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
