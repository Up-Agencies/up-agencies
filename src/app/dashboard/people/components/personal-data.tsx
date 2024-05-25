"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../shema";
import dayjs from "dayjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generatesSelectable } from "@/utils/helpers";
import { GENDERS, PERSON_TYPES } from "@/utils/constants";
import { PhoneInput } from "@/components/ui/phone-input";

import MultipleSelector from "@/components/ui/multi-selector";
import { DocumentData } from "./document-data";
import { Textarea } from "@/components/ui/textarea";

export function PersonalData() {
  const form = useFormContext<FormData>();

  return (
    <div className="grid grid-cols-3 gap-3">
      <FormField
        control={form.control}
        name="fullname"
        render={({ field, formState }) => (
          <FormItem>
            <FormLabel required>Nome completo</FormLabel>

            <FormControl>
              <Input
                autoComplete="new-password"
                error={!!formState.errors.fullname?.message}
                placeholder="Insira o nome e sobrenome"
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
          <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <FormControl>
                <PhoneInput
                  error={!!formState.errors.phone?.message}
                  defaultCountry="BR"
                  placeholder="Entre com um número"
                  {...field}
                />
              </FormControl>
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
            <FormLabel>Email</FormLabel>

            <FormControl>
              <Input
                autoComplete="new-password"
                error={!!formState.errors.email?.message}
                placeholder="Insira o email"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="birthday"
        render={({ field }) => (
          <FormItem className="col-span-1">
            <FormLabel required>Data de nascimento</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 w-full text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    {field.value ? (
                      dayjs(field.value).format("DD/MM/YYYY")
                    ) : (
                      <span>Selecione a data</span>
                    )}
                    <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  captionLayout="dropdown-buttons"
                  mode="single"
                  fromYear={Number(dayjs().get("y")) - 100}
                  toYear={Number(dayjs().get("y"))}
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>Gênero</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="data-[placeholder=true]:text-muted-foreground">
                  <SelectValue
                    className="data-[placeholder=true]:text-muted-foreground"
                    placeholder="Selecione o gênero"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {generatesSelectable(GENDERS).map((gender) => (
                  <SelectItem key={gender.value} value={gender.value}>
                    {gender.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
