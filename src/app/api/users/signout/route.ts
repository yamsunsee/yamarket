import { User } from "@/database/schemas";
import { NextRequest } from "next/server";
import { handleRequest, handleResponse } from "@/utils/functions";

export async function DELETE(request: NextRequest) {
  return handleRequest(async () => {
    return handleResponse({ type: "OK" });
  });
}
