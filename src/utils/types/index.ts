type ResponseType = {
  type: "OK" | "CREATED" | "ERROR";
  extraMessage?: string;
  data?: any;
};

type ThemeType = "LIGHT" | "DARK";

type ProductType = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  description: string;
  image: string;
};

type StoreType = {
  theme: ThemeType;
  products: ProductType[];
  setTheme: (theme: ThemeType) => void;
  setProducts: (products: ProductType[]) => void;
};

export type { ResponseType, ProductType, StoreType };
