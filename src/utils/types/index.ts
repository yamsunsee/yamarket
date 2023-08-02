type ResponseType = {
  status: number;
  message: string;
  data?: any;
};

type HandleResponseType = {
  type: "OK" | "CREATED" | "ERROR";
  extraMessage?: string;
  data?: any;
};

type UserType = {
  _id: string;
  username: string;
  token: string;
};

type UserStoreType = {
  user: UserType | {};
};

type ProductType = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  description: string;
  image: string;
};

type ProductStoreType = {
  product: ProductType | {};
  products: ProductType[];
  getProduct: (id: string) => Promise<ProductType>;
  addProduct: (form: Omit<ProductType, "_id">) => Promise<ResponseType>;
  removeProduct: (id: string) => Promise<ResponseType>;
  getProducts: () => Promise<ProductType[]>;
};

type CartType = {
  _id: string;
  user: string;
  products: {
    product: string;
    quantity: number;
  }[];
};

type CartStoreType = {
  cart:
    | {
        product: string;
        quantity: number;
      }[]
    | {};
};

type OrderType = {};

type OrderStoreType = {};

type StoreType = {
  setStores: (data: Partial<StoreType>) => void;
} & UserStoreType &
  ProductStoreType &
  CartStoreType &
  OrderStoreType;

export type {
  ResponseType,
  HandleResponseType,
  StoreType,
  UserType,
  UserStoreType,
  ProductType,
  ProductStoreType,
  CartType,
  CartStoreType,
  OrderType,
  OrderStoreType,
};
