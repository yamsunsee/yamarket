import { NextRequest } from "next/server";
import { User } from "@/database/schemas";
import { handleRequest, handleResponse } from "@/utils/functions";

export async function POST(request: NextRequest) {
  return handleRequest(async () => {
    const { username, password } = await request.json();
    const user = await User.findOne({ username });
    if (user && password === user.password) {
      return handleResponse({
        type: "OK",
        data: {
          username,
          id: user._id,
          token: "ABC123",
        },
      });
    } else return handleResponse({ type: "ERROR", extraMessage: "Wrong username or password!" });
  });
}
