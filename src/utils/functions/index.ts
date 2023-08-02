import connectDatabase from "@/database";
import { NextResponse } from "next/server";
import { HandleResponseType } from "../types";

const handleResponse = ({ type, extraMessage, data }: HandleResponseType) => {
  let status = 404;
  let message = extraMessage ?? type;

  switch (type) {
    case "OK":
      status = 200;
      break;

    case "CREATED":
      status = 201;
      break;

    case "ERROR":
      status = 400;
      break;

    default:
      message = "NOT FOUND";
      break;
  }

  return NextResponse.json({ status, message, data }, { status });
};

const handleRequest = async <T>(action?: () => Promise<T>) => {
  try {
    await connectDatabase();
    if (typeof action === "function") return await action();
    return handleResponse({ type: "OK", extraMessage: "Connected to database successfully!" });
  } catch (error) {
    return handleResponse({ type: "ERROR", data: error });
  }
};

export { handleRequest, handleResponse };
