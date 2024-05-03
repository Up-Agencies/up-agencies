import { fetchApiClient } from "./api";
import { Agency } from "./schema/agency";
import { User } from "./schema/user";

interface SignUpParam extends User {
  agency: Agency;
}

interface SignInParam {
  email: string;
  password: string;
}

interface SignInReturn {
  token: string;
}

export async function signUp(data: SignUpParam) {
  return fetchApiClient("/auth/sign-up", {
    body: JSON.stringify(data),
    method: "POST",
  });
}

export async function signIn(data: SignInParam) {
  return fetchApiClient<SignInReturn>("/auth/sign-in", {
    body: JSON.stringify(data),
    method: "POST",
  });
}

// export async function me() {
//   const response = await fetchApiClient("/me");
//   const data = await response.return;
// }
