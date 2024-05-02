"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form } from "@/components/ui/form";
import { MultiStep } from "./components/multi-step";

import { AgencyData } from "./components/agency-data";
import { FormSignUpData, schema } from "./schema";
import { PersonalData } from "./components/personal-data";
import { Step, useSignUpStep } from "@/hooks/useAuth";

import { useSignUp } from "@/hooks/mutations/auth";

export default function SignUp() {
  const { currentStep } = useSignUpStep();

  const form = useForm<FormSignUpData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { mutateAsync } = useSignUp();

  async function onSubmit(data: FormSignUpData) {
    await mutateAsync({
      name: data.fullname,
      email: data.email,
      password: data.password,
      phone: data.phone,
      avatarUrl: "",
      agency: {
        name: data.agencyName,
        email: data.agencyEmail,
        cnpj: data.document,
        layoutColor: "",
        logoUrl: "",
        site: "",
        address: {
          cep: "59135-600",
          city: "Natal",
          neighborhood: "Lagoa Azul",
          street: "Atibaia",
          number: 12,
          state: "Rio Grande Do Norte",
          complement: "",
        },
      },
    });
  }

  const steps = {
    personal: <PersonalData />,
    agency: <AgencyData />,
  } as Record<Step, React.ReactNode>;

  return (
    <>
      <div className="mb-10">
        <h1 className="mt-8 mb-2 text-2xl lg:text-3xl">Iniciar</h1>
        <h2 className="text-muted-foreground">Crie sua conta</h2>

        <MultiStep currentStep={currentStep === "agency" ? 2 : 1} />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          method="POST"
          className="w-full p-1 transition-all flex-1 grid place-items-center overflow-y-hidden duration-500 max-h-[1000px] opacity-100"
        >
          <div className="flex flex-col gap-4 w-full">{steps[currentStep]}</div>
        </form>
      </Form>

      <div className="my-8 self-center text-sm">
        <span className="text-muted-foreground">Já tenho uma conta? </span>
        <Link
          className="underline text-foreground hover:text-primary transition-colors"
          href="/sign-in"
        >
          Entrar agora
        </Link>
      </div>
    </>
  );
}
