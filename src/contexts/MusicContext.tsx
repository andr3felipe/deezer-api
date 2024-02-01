import { createContext, useState } from "react";
import { fetchSearch } from "../http/fetchSearch";
import { useQuery } from "react-query";

export interface Track {
  id: number;
  title: string;
  link: string;
  duration: number;
  preview: string;
  album: {
    cover_big: string;
  };
}

export interface SearchResponse {
  data: Track[];
  total: number;
  next: string;
}

interface MusicContextType {
  search: string;
  handleSearch: (value: string) => void;
  tracks: SearchResponse;
}

export const MusicContext = createContext({} as MusicContextType);

interface MusicContextProviderProps {
  children: React.ReactNode;
}

export function MusicContextProvider({ children }: MusicContextProviderProps) {
  const [search, setSearch] = useState("eminem");

  const { data: tracks } = useQuery({
    queryFn: () => fetchSearch(search),
    queryKey: ["search", search],
  });

  function handleSearch(value: string) {
    setSearch(value);
  }

  return (
    <MusicContext.Provider value={{ search, handleSearch, tracks }}>
      {children}
    </MusicContext.Provider>
  );
}
