"use client";

import useStores from "@/stores";
import { FormEvent } from "react";
import { ProductType } from "@/utils/types";
import { PRODUCT_DETAILS } from "@/utils/constants";
import { toast } from "react-toastify";

export default function AddProduct() {
  const { addProduct } = useStores();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as unknown as Omit<ProductType, "_id">;

    const { status, message } = await addProduct(data);
    toast(message, { type: status === 200 ? "success" : "error" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {PRODUCT_DETAILS.map((item) => (
        <div key={item} className="flex gap-4">
          <label htmlFor={item} className="capitalize">
            {item}
          </label>
          <input id={item} name={item} type="text" placeholder={`Product's ${item}...`} />
        </div>
      ))}
      <div className="flex gap-4">
        <input className="capitalize" type="reset" value="reset" />
        <button>Submit</button>
      </div>
    </form>
  );
}
