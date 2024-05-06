import { api, fetchApiClient } from "./api";
import type { Agency } from "./schema/agency";
import type { User } from "./schema/user";

interface SignUpParam extends User {
  agency: Agency;
}

interface SignInParam {
  email: string;
  password: string;
}

export interface SignInReturn {
  token: string;
}

export async function signUp(body: SignUpParam) {
  const response = await api.post("/auth/sign-up", body);
  const data = await response.data;

  return data;
}

export async function signIn(body: SignInParam) {
  const response = await api.post("/auth/sign-in", body);
  const data = await response.data;

  return data;
}
