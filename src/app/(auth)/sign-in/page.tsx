"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import Link from "next/link";

import { useAuth } from "@/hooks/queries/use-auth-queries";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const schema = z.object({
  email: z
    .string({
      message: "E-mail é um campo obrigatório",
    })
    .trim()
    .email({
      message: "E-mail inválido",
    }),
  password: z
    .string({
      message: "Senha é um campo obrigatório",
    })
    .min(7, {
      message: "Senha deve ter ao menos 7 caracteres",
    }),
});

export type FormSignUpData = z.infer<typeof schema>;

export default function SignUp() {
  const form = useForm<FormSignUpData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const {
    signInMutation: { mutate, isPending },
  } = useAuth();

  function onSubmit(data: FormSignUpData) {
    mutate(data);
  }

  return (
    <>
      <div className="mt-16 mb-12 max-md:mt-12 max-md:mb-8">
        <h1 className="mb-1 text-2xl lg:text-3xl font-medium">Bem vindo</h1>
        <h2 className="text-muted-foreground">Faça login em sua conta</h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          method="POST"
          className="flex flex-col gap-4 overflow-y-hidden max-h-[1000px] p-1"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="new-password"
                    error={!!formState.errors.email?.message}
                    placeholder="você@exemplo.com"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, formState }) => (
              <FormItem>
                <span className="flex justify-between">
                  <FormLabel>Senha</FormLabel>
                  <Link
                    href="/forgot"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Esqueceu a senha?
                  </Link>
                </span>
                <FormControl>
                  <Input
                    autoComplete="new-password"
                    type="password"
                    error={!!formState.errors.password?.message}
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} type="submit" className="mt-4">
            {isPending && <Loader className="size-4 mr-1 animate-spin" />}
            Entrar
          </Button>
        </form>
      </Form>

      <div className="my-8 self-center text-sm">
        <span className="text-muted-foreground">Não tem uma conta? </span>
        <Link
          className="underline text-foreground hover:text-primary transition-colors"
          href="/sign-up"
        >
          Se inscreva agora
        </Link>
      </div>
    </>
  );
}
