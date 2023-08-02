import { OrderStoreType, StoreType } from "@/utils/types";
import { ORDERS_URL } from "@/utils/constants";

const orderStore = (
  set: (
    partial: StoreType | Partial<StoreType> | ((state: StoreType) => StoreType | Partial<StoreType>),
    replace?: boolean | undefined
  ) => void
): OrderStoreType => ({
  orders: {},
});

export default orderStore;
