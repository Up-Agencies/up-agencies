import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { FormSignUpData } from "../schema";
import { useSetAtom } from "jotai";
import { stepAtom, useSignUpStep } from "@/hooks/useAuth";
import { formatPhoneNumber } from "@/utils/formatters";
import { PhoneInput } from "@/components/ui/phone-input";

export function PersonalData() {
  const { onChangeCurrentStep } = useSignUpStep();

  const form = useFormContext<FormSignUpData>();

  async function handleNextStep() {
    const hasValid = await Promise.all([
      form.trigger("fullname"),
      form.trigger("email"),
      form.trigger("password"),
      form.trigger("phone"),
    ]);

    if (hasValid.every((field) => field)) onChangeCurrentStep("agency");
  }

  return (
    <>
      <FormField
        control={form.control}
        name="fullname"
        render={({ field, formState }) => (
          <FormItem>
            <FormLabel>Nome completo</FormLabel>
            <FormControl>
              <Input
                autoComplete="new-password"
                error={!!formState.errors.fullname?.message}
                placeholder="seu nome completo"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field, formState }) => (
          <FormItem className="flex flex-col items-start">
            <FormLabel className="text-left">Celular</FormLabel>
            <FormControl>
              <PhoneInput
                maxLength={15}
                error={!!formState.errors.phone?.message}
                defaultCountry="BR"
                placeholder="Enter a phone number"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
                placeholder="you@example.com"
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
            <FormLabel>Senha</FormLabel>
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

      <Button onClick={handleNextStep} type="button" className="mt-4">
        Continuar
      </Button>
    </>
  );
}
