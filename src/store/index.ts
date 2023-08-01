import { create } from "zustand";
import { StoreType } from "@/utils/types";

const useStore = create<StoreType>((set) => ({
  theme: "DARK",
  products: [],
}));

export default useStore;
