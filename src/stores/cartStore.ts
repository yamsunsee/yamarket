import { CartStoreType, StoreType } from "@/utils/types";
import { CARTS_URL } from "@/utils/constants";

const cartStore = (
  set: (
    partial: StoreType | Partial<StoreType> | ((state: StoreType) => StoreType | Partial<StoreType>),
    replace?: boolean | undefined
  ) => void
): CartStoreType => ({
  cart: {},
});

export default cartStore;
