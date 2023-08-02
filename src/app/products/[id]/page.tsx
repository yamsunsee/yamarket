import useStores from "@/stores";
import { PRODUCT_DETAILS } from "@/utils/constants";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await useStores.getState().getProduct(params.id);

  return (
    <main>
      <h1>Product Details</h1>
      <table className="w-full">
        <thead>
          <tr>
            {PRODUCT_DETAILS.map((item) => (
              <th key={item} className="uppercase">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {PRODUCT_DETAILS.map((item) => (
              <td key={item} className="border p-2">
                {product[item]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </main>
  );
}
