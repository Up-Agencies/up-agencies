import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { type FormData, schema } from "../shema";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PersonalData } from "./personal-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import { DocumentData } from "./document-data";
import { AddresData } from "./address-data";

const accordions = [
  {
    title: "Documentos da pessoa",
    element: <DocumentData />,
  },
  {
    title: "Endereço",
    element: <AddresData />,
  },
];

export function CreatePerson() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  return (
    <Form {...form}>
      <PersonalData />
      <Accordion type="multiple" className="space-y-2 my-4">
        {accordions.map((accordion) => (
          <AccordionItem key={accordion.title} value={accordion.title} asChild>
            <Card>
              <AccordionTrigger
                className={cn(
                  "p-3 w-full flex justify-start gap-2 text-accents-6 text-sm group peer rounded-md transition-all",
                )}
              >
                {accordion.title}
              </AccordionTrigger>

              <AccordionContent asChild>
                <CardContent className="p-6 pt-1 space-y-3">{accordion.element}</CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
      <FormField
        control={form.control}
        name="observation"
        render={({ field }) => (
          <FormItem className="col-span-3">
            <FormLabel>Observação</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Insira algum observação sobre o passageiro"
                className="resize-none"
                {...field}
              />
            </FormControl>

            <FormDescription>
              You can <span>@mention</span> other users and organizations.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
