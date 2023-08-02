"use client";

import Link from "next/link";
import { useEffect } from "react";
import useStores from "@/stores";

const Products = () => {
  const { products, getProducts, removeProduct } = useStores();

  if (!products.length) {
    getProducts();
    return <main>Loading...</main>;
  }

  return (
    <main>
      <table className="w-full">
        <thead>
          <tr>
            {["name", "information", "action"].map((item) => (
              <th key={item} className="uppercase">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">
                <Link href={`/products/${product._id}`}>View more</Link>
              </td>
              <td className="border p-2">
                <button onClick={() => removeProduct(product._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Products;
