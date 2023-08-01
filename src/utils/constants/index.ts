const BASE_API_URL = process.env.BASE_API_URL;

const GET_PRODUCTS = `${BASE_API_URL}/products`;

const LINKS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

export { LINKS, GET_PRODUCTS };
