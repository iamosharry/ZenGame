import { create } from "zustand";

interface CounterStore {
  mode: boolean;
  light: () => void;
  dark: () => void;
}

const useToggle = create<CounterStore>((set) => ({
  mode: false,
  light: () => set(() => ({ mode: true })),
  dark: () => set(() => ({ mode: false })),
}));

export default useToggle;
