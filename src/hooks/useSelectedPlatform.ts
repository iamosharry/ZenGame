import { create } from "zustand";
import { Platformtype } from "./usePlatform";

interface PlatformSwitch {
  platformStore: Platformtype | undefined;
  addPlatform: (item: Platformtype) => void;
}

const useSelectedPlatform = create<PlatformSwitch>((set) => ({
  platformStore: undefined,
  addPlatform: (item) => set(() => ({ platformStore: item })),
}));

export default useSelectedPlatform;
