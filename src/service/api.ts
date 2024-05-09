import { parseCookies } from "nookies";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export async function fetchApiClient<T>(url: string, options?: RequestInit) {
  const { "up-agencies.token": token } = parseCookies();

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      "Content-Type": "application/json",
    },
    ...options,
  });

  const data: T = await response.json();

  return data;
}
