type ResponseType = {
  type: "OK" | "CREATED" | "ERROR";
  extraMessage?: string;
  data?: any;
};

type ProductType = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  description: string;
  image: string;
};

type StoreType = {
  theme: "LIGHT" | "DARK";
  products: ProductType[];
};

export type { ResponseType, ProductType, StoreType };
