import { create } from "zustand";
import { StoreType } from "@/utils/types";
import userStore from "./userStore";
import productStore from "./productStore";
import cartStore from "./cartStore";
import orderStore from "./orderStore";

const useStores = create<StoreType>((set) => ({
  setStores: (data) => {
    set({ ...data });
  },
  ...userStore(set),
  ...productStore(set),
  ...cartStore(set),
  ...orderStore(set),
}));

export default useStores;
