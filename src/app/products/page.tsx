import { getProducts } from "@/utils/functions";

export default async function Page() {
  const products = await getProducts();

  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </main>
  );
}
