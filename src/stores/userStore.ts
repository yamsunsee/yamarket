import { UserStoreType, StoreType } from "@/utils/types";
import { USERS_URL } from "@/utils/constants";

const userStore = (
  set: (
    partial: StoreType | Partial<StoreType> | ((state: StoreType) => StoreType | Partial<StoreType>),
    replace?: boolean | undefined
  ) => void
): UserStoreType => ({
  user: {},
});

export default userStore;
