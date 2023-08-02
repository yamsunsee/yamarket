import { ProductStoreType, StoreType } from "@/utils/types";
import { PRODUCTS_URL } from "@/utils/constants";

const productStore = (
  set: (
    partial: StoreType | Partial<StoreType> | ((state: StoreType) => StoreType | Partial<StoreType>),
    replace?: boolean | undefined
  ) => void
): ProductStoreType => ({
  product: {},
  products: [],
  getProducts: async () => {
    const response = await fetch(PRODUCTS_URL, { cache: "no-store" });
    const { data } = await response.json();
    set({ products: data });
    return data;
  },
  getProduct: async (id) => {
    const response = await fetch(`${PRODUCTS_URL}/${id}`, { cache: "no-store" });
    const { data } = await response.json();
    set({ product: data });
    return data;
  },
  addProduct: async (form) => {
    const response = await fetch(PRODUCTS_URL, {
      method: "POST",
      body: JSON.stringify(form),
      cache: "no-store",
    });
    const data = await response.json();
    set((state) => ({
      products: [...state.products, data.data],
    }));
    return data;
  },
  removeProduct: async (id) => {
    const response = await fetch(`${PRODUCTS_URL}/${id}`, { method: "DELETE", cache: "no-store" });
    const data = await response.json();
    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    }));
    return data;
  },
});

export default productStore;
