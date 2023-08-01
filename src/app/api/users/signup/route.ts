import { NextRequest } from "next/server";
import { User, Cart } from "@/database/schemas";
import { handleRequest, handleResponse } from "@/utils/functions";

export async function POST(request: NextRequest) {
  return handleRequest(async () => {
    const body = await request.json();
    const existedUser = await User.findOne({ username: body.username });
    if (existedUser) {
      return handleResponse({ type: "ERROR", data: "Duplicated username!" });
    }
    const newUser = await User.create(body);
    await Cart.create({ user: newUser._id });
    return handleResponse({ type: "OK" });
  });
}
