"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import {
  readFavoriteIds,
  subscribeToFavoriteIds,
  writeFavoriteIds,
} from "@/lib/favorites-storage";

type FavoritesContextValue = {
  favoriteIds: string[];
  hydrated: boolean;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

function subscribeToHydration() {
  return () => {};
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const favoriteIds = useSyncExternalStore(
    subscribeToFavoriteIds,
    readFavoriteIds,
    () => [],
  );
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );

  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const toggleFavorite = useCallback(
    (id: string) => {
      const nextIds = favoriteIds.includes(id)
        ? favoriteIds.filter((currentId) => currentId !== id)
        : [...favoriteIds, id];

      writeFavoriteIds(nextIds);
    },
    [favoriteIds],
  );

  const value = useMemo(
    () => ({
      favoriteIds,
      hydrated,
      isFavorite,
      toggleFavorite,
    }),
    [favoriteIds, hydrated, isFavorite, toggleFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const value = useContext(FavoritesContext);

  if (!value) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return value;
}
