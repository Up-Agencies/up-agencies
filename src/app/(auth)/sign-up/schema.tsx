import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

const personalSchema = z.object({
  fullname: z
    .string({
      message: "Nome completo é um campo obrigatório",
    })
    .refine(
      (value) => {
        return value.trim().split(/\s+/u).length >= 2;
      },
      { message: "Escreva o nome completo" },
    ),
  email: z
    .string({
      message: "E-mail é um campo obrigatório",
    })
    .trim()
    .email({
      message: "E-mail inválido",
    }),
  phone: z
    .string({
      message: "Celular é um campo obrigatório",
    })
    .refine(isValidPhoneNumber, { message: "Número de celular inválido" }),
  password: z
    .string({
      message: "Senha é um campo obrigatório",
    })
    .min(7, {
      message: "Senha deve ter ao menos 7 caracteres",
    }),
});

const agencySchema = z.object({
  agencyName: z.string({
    message: "Nome da agência é um campo obrigatório",
  }),
  document: z
    .string({
      message: "CNPJ é um campo obrigatório",
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length === 14;
    }, "CNPJ inválido")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return !!Number(replacedDoc);
    }, "CNPJ inválido"),
  agencyEmail: z
    .string({
      message: "E-mail é um campo obrigatório",
    })
    .trim()
    .email({
      message: "E-mail inválido",
    }),
});

export const schema = personalSchema.merge(agencySchema);

export type FormSignUpData = z.infer<typeof schema>;
