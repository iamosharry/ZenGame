import { create } from "zustand";

interface CounterStore {
  mode: boolean;
  light: () => void;
  dark: () => void;
}

const saveToLocalStorage = (state: CounterStore) => {
  localStorage.setItem("modeState", JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  const state = localStorage.getItem("modeState");
  return state
    ? JSON.parse(state)
    : { mode: false, light: () => {}, dark: () => {} };
};

const useToggle = create<CounterStore>((set) => ({
  ...loadFromLocalStorage(),
  light: () =>
    set((state) => {
      const newState = { ...state, mode: true };
      saveToLocalStorage(newState);
      return newState;
    }),

  dark: () =>
    set((state) => {
      const newState = { ...state, mode: false };
      saveToLocalStorage(newState);
      return newState;
    }),
}));

export default useToggle;
