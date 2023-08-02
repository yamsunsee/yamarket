const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const USERS_URL = `${BASE_API_URL}/users`;
const PRODUCTS_URL = `${BASE_API_URL}/products`;
const CARTS_URL = `${BASE_API_URL}/carts`;
const ORDERS_URL = `${BASE_API_URL}/orders`;

const LINKS = [
  { name: "Admin", path: "/admin" },
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

const PRODUCT_DETAILS = ["name", "price", "discount", "description", "image"];

export { LINKS, PRODUCTS_URL, USERS_URL, PRODUCT_DETAILS, CARTS_URL, ORDERS_URL };
