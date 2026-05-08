import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { BookOpenText } from "lucide-react";

import { FavoritesProvider } from "@/components/favorites-provider";
import { SiteNav } from "@/components/site-nav";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voxial",
  description: "A classical reference for Greek and Latin affixes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="manuscript-bg min-h-full">
        <FavoritesProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                <Link
                  href="/"
                  className="flex w-fit items-center gap-3 text-foreground"
                >
                  <span className="flex size-10 items-center justify-center rounded-md border border-primary/20 bg-primary text-primary-foreground shadow-sm">
                    <BookOpenText className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-serif text-2xl font-semibold leading-none">
                      Voxial
                    </span>
                    <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Affix Lexicon
                    </span>
                  </span>
                </Link>
                <SiteNav />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border/70">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
                <p>Voxial studies word parts from classical roots.</p>
                <p>Local static data. Client-side favorites.</p>
              </div>
            </footer>
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
