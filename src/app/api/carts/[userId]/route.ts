import { NextRequest } from "next/server";
import { Cart } from "@/database/schemas";
import { handleRequest, handleResponse } from "@/utils/functions";

export async function GET(request: NextRequest, context: { params: { userId: string } }) {
  return handleRequest(async () => {
    const {
      params: { userId },
    } = context;
    const cart = await Cart.findOne({ user: userId }).populate("user", ["_id", "username"]);
    return handleResponse({ type: "OK", data: cart });
  });
}

export async function PATCH(request: NextRequest, context: { params: { userId: string } }) {
  return handleRequest(async () => {
    const {
      params: { userId },
    } = context;
    const { products } = await request.json();
    const newCart = await Cart.findOneAndUpdate({ user: userId }, { products }, { new: true });
    return handleResponse({ type: "OK", data: newCart });
  });
}

export async function DELETE(request: NextRequest, context: { params: { userId: string } }) {
  return handleRequest(async () => {
    const {
      params: { userId },
    } = context;
    await Cart.findOneAndUpdate({ user: userId }, { products: [] }, { new: true });
    return handleResponse({ type: "OK", extraMessage: "Your cart has been cleared!" });
  });
}
