import { api } from "./api";
import { Agency } from "./schema/agency";
import { User } from "./schema/user";

interface SignUpParam extends User {
  agency: Agency;
}

interface SignInParam {
  email: string;
  password: string;
}

export async function signUp(data: SignUpParam) {
  return api.post("/auth/sign-up", data);
}

export async function signIn(data: SignInParam) {
  return api.post("/auth/sign-in", data);
}

export async function me() {
  const result = await api.get("/me");
  const data = await result.data;

  return data;
}
