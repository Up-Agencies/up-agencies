"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { type Step, useSignUpStep } from "@/hooks/useAuth";
import { type FormSignUpData, schema } from "./schema";
import { Form } from "@/components/ui/form";
import { MultiStep } from "./components/multi-step";

import { AgencyData } from "./components/agency-data";
import { PersonalData } from "./components/personal-data";

import { useAuth } from "@/hooks/queries/use-auth-queries";

export default function SignUp() {
  const { currentStep } = useSignUpStep();
  const { signUpMutation } = useAuth();

  const form = useForm<FormSignUpData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  async function onSubmit(data: FormSignUpData) {
    signUpMutation.mutate({
      name: data.fullname,
      email: data.email,
      password: data.password,
      phone: data.phone,
      agency: {
        name: data.agencyName,
        email: data.agencyEmail,
        cnpj: data.document,
      },
    });
  }

  const steps = {
    personal: <PersonalData />,
    agency: <AgencyData isPending={signUpMutation.isPending} />,
  } as Record<Step, React.ReactNode>;

  return (
    <>
      <div className="mt-16 mb-12 max-md:mt-12 max-md:mb-8">
        <h1 className="mb-1 text-2xl lg:text-3xl font-medium">Iniciar</h1>
        <h2 className="text-muted-foreground">Crie sua conta</h2>
        <MultiStep currentStep={currentStep === "agency" ? 2 : 1} />
      </div>

      <Form {...form}>
        <form
          className="flex flex-col gap-4 overflow-y-hidden max-h-[1000px] p-1"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {steps[currentStep]}
        </form>
      </Form>

      <div className="self-center my-8 text-sm">
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
