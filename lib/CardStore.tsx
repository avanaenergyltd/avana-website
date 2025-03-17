import { create } from "zustand";
type useStoreType = {
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
};

const useStore = create<useStoreType>((set) => ({
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),
}));

export default useStore;
