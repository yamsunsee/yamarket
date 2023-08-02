import { create } from "zustand";
import { StoreType } from "@/utils/types";

const useStore = create<StoreType>((set) => ({
  theme: "DARK",
  products: [],
  setTheme: (theme) => set(() => ({ theme })),
  setProducts: (products) => set(() => ({ products })),
}));

export default useStore;
