import { createContext, useState } from "react";
import { fetchSearch } from "../http/fetchSearch";
import { useQuery } from "react-query";

export interface Track {
  id: number;
  title: string;
  duration: number;
  preview: string;
  album: {
    cover_big: string;
  };
  artist: {
    name: string;
  };
}

export interface SearchResponse {
  data: Track[];
  total: number;
  next: string;
}

interface SetLocalStorageProps {
  track: Track;
  action: "add" | "remove";
}

interface MusicContextType {
  search: string;
  handleSearch: (value: string) => void;
  tracks: SearchResponse | undefined;
  getLocalStorage: () => Track[] | null;
  setLocalStorage: ({ track, action }: SetLocalStorageProps) => void;
  favorites: Track[];
}

export const MusicContext = createContext({} as MusicContextType);

interface MusicContextProviderProps {
  children: React.ReactNode;
}

export function MusicContextProvider({ children }: MusicContextProviderProps) {
  const [search, setSearch] = useState("eminem");
  const [favorites, setFavorites] = useState(getLocalStorage() || []);

  const { data: tracks } = useQuery({
    queryFn: () => fetchSearch(search),
    queryKey: ["search", search],
  });

  function handleSearch(value: string) {
    setSearch(value);
  }

  function getLocalStorage() {
    const storage = localStorage.getItem("favorites");
    const favorites = storage ? JSON.parse(storage) : null;

    if (favorites) {
      return favorites;
    }
  }

  function setLocalStorage({ track, action }: SetLocalStorageProps) {
    const favorites = getLocalStorage() || [];

    if (action === "add") {
      const exists = favorites.some((item: Track) => item.id === track.id);

      if (exists) return;

      favorites.push(track);

      setFavorites(favorites);
      return localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    if (action === "remove") {
      const newFavorites = favorites.filter(
        (item: Track) => item.id !== track.id
      );

      setFavorites(newFavorites);
      return localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  }

  return (
    <MusicContext.Provider
      value={{
        search,
        handleSearch,
        tracks,
        getLocalStorage,
        setLocalStorage,
        favorites,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
