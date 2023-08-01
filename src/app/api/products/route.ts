import { NextRequest } from "next/server";
import { Product } from "@/database/schemas";
import { handleRequest, handleResponse } from "@/utils/functions";

export async function GET() {
  return handleRequest(async () => {
    const products = await Product.find();
    return handleResponse({ type: "OK", data: products });
  });
}

export async function POST(request: NextRequest) {
  return handleRequest(async () => {
    const body = await request.json();
    const newProduct = await Product.create(body);
    return handleResponse({ type: "OK", data: newProduct });
  });
}
