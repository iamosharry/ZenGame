// Using Zustand

import { create } from "zustand";
import { Genres } from "./useGenres";

interface GenreSwitch {
  genraStore: Genres | undefined;
  add: (item: Genres) => void;
}

const useSelectedGenre = create<GenreSwitch>((set) => ({
  genraStore: undefined,
  add: (item) => set(() => ({ genraStore: item })),
}));

export default useSelectedGenre;
