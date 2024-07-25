import { create } from "zustand";

interface PlatformSwitch {
  relevanceStore: string | undefined;
  sortOrder: (item: string) => void;
}

const useRelevance = create<PlatformSwitch>((set) => ({
  relevanceStore: undefined,
  sortOrder: (item) => set(() => ({ relevanceStore: item })),
}));

export default useRelevance;
