import { signIn, signUp } from "@/service/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie } from "nookies";

import { toast } from "sonner";

export function useSignUp() {
  return useMutation({
    mutationFn: signUp,
    onSuccess() {
      toast.success("Conta criada", {
        description:
          "A conta foi criada com sucesso, faça login com suas credenciais 🎉",
      });
    },
    onError() {
      toast.error("Error ao criar conta", {
        description:
          "Ops! Parece que houve um problema ao criar sua conta. Por favor, verifique seus dados e tente novamente mais tarde 😥",
      });
    },
  });
}

export function useAuth() {
  const router = useRouter();

  const signInMutation = useMutation({
    mutationFn: signIn,
    async onSuccess({ data }) {
      const accessToken: string = data.token;

      toast.success("Login realizado", {
        description: "Bem-vindo de volta! Você entrou com sucesso 🎉",
      });

      setCookie(undefined, "up-agencies.token", accessToken, {
        maxAge: 60 * 60 * 24 * 365 * 1, // 1 year
        path: "/",
      });

      router.push("/");
    },
    onError() {
      toast.error("Error ao fazer o login", {
        description:
          "Oops! Parece que houve um problema ao fazer login. Por favor, verifique suas credenciais e tente novamente 😥",
      });
    },
  });

  function signOut() {
    destroyCookie(undefined, "up-agencies.token");

    router.push("/sign-in");
  }

  return {
    signInMutation,
    signOut,
  };
}
