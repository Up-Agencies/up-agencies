// import { z } from "zod";

// export const cnpjSchema = z.object({
//   cnpj: z
//     .string()
//     .trim()
//     .nonempty()
//     .refine((doc) => isValidCnpj(doc), {
//       message: "CNPJ inválido",
//     })
//     .transform((doc) => formatterCNPJ(doc)),
// });
// //
