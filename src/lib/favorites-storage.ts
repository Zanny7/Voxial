const favoritesStorageKey = "voxial.favoriteAffixIds";
const favoritesChangedEvent = "voxial:favorites-changed";

let cachedFavoriteIds: string[] | null = null;

export function readFavoriteIds() {
  if (typeof window === "undefined") {
    return [];
  }

  if (cachedFavoriteIds) {
    return cachedFavoriteIds;
  }

  try {
    const value = window.localStorage.getItem(favoritesStorageKey);
    const parsed = value ? JSON.parse(value) : [];

    cachedFavoriteIds = Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === "string")
      : [];

    return cachedFavoriteIds;
  } catch {
    cachedFavoriteIds = [];
    return [];
  }
}

export function writeFavoriteIds(ids: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  cachedFavoriteIds = ids;
  window.localStorage.setItem(favoritesStorageKey, JSON.stringify(ids));
  window.dispatchEvent(new Event(favoritesChangedEvent));
}

export function subscribeToFavoriteIds(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === favoritesStorageKey) {
      cachedFavoriteIds = null;
      onStoreChange();
    }
  };

  window.addEventListener(favoritesChangedEvent, onStoreChange);
  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener(favoritesChangedEvent, onStoreChange);
    window.removeEventListener("storage", handleStorageChange);
  };
}
