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
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { TriggerActionPortal } from "@/components/portal";

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
    agency: <AgencyData />,
  } as Record<Step, React.ReactNode>;

  return (
    <>
      <div className="mb-10">
        <h1 className="mt-8 mb-2 text-2xl lg:text-3xl">Iniciar</h1>
        <h2 className="text-muted-foreground">Crie sua conta</h2>

        <MultiStep currentStep={currentStep === "agency" ? 2 : 1} />
      </div>

      <div className="w-full p-1 transition-all flex-1 grid place-items-center overflow-y-hidden duration-500 max-h-[1000px] opacity-100">
        <div className="flex flex-col gap-4 w-full">
          <Form {...form}>
            <form className="flex flex-col gap-4 w-full" onSubmit={form.handleSubmit(onSubmit)}>
              {steps[currentStep]}

              <TriggerActionPortal id="SIGN_UP_BUTTON_SUBMIT">
                <Button disabled={signUpMutation.isPending} type="submit">
                  {signUpMutation.isPending && <Loader className="size-4 mr-1 animate-spin" />}
                  Criar conta
                </Button>
              </TriggerActionPortal>
            </form>
          </Form>

          <div className="my-4 self-center text-sm">
            <span className="text-muted-foreground">Já tenho uma conta? </span>
            <Link
              className="underline text-foreground hover:text-primary transition-colors"
              href="/sign-in"
            >
              Entrar agora
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
