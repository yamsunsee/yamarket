import { NextRequest } from "next/server";
import { Product } from "@/database/schemas";
import { handleRequest, handleResponse } from "@/utils/functions";

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  return handleRequest(async () => {
    const {
      params: { id },
    } = context;
    const products = await Product.findById(id);
    return handleResponse({ type: "OK", data: products });
  });
}

export async function PATCH(request: NextRequest, context: { params: { id: string } }) {
  return handleRequest(async () => {
    const {
      params: { id },
    } = context;
    const body = await request.json();
    const newProduct = await Product.findByIdAndUpdate(id, body, { new: true });
    return handleResponse({ type: "OK", data: newProduct });
  });
}

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
  return handleRequest(async () => {
    const {
      params: { id },
    } = context;
    await Product.findByIdAndDelete(id);
    return handleResponse({ type: "OK" });
  });
}
