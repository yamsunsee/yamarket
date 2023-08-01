import { Cart, Product, User } from "@/database/schemas";
import { handleRequest, handleResponse } from "@/utils/functions";

export async function GET() {
  return handleRequest();
}

export async function DELETE() {
  return handleRequest(async () => {
    await User.deleteMany();
    await Product.deleteMany();
    await Cart.deleteMany();
    return handleResponse({ type: "OK", extraMessage: "Empty database!" });
  });
}
