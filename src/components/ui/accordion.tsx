/* eslint-disable react/display-name */
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { cn } from "@/lib/utils";

interface AccordionContextProps {
  focus?: string;
  setFocus(value?: string): void;
}

export const AccordionContext = createContext<AccordionContextProps>({} as AccordionContextProps);

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [focus, setFocus] = React.useState<string | undefined>(undefined);

  return (
    <AccordionContext.Provider
      value={{
        focus,
        setFocus,
      }}
    >
      <AccordionPrimitive.Root ref={ref} className={cn(className)} {...props} />
    </AccordionContext.Provider>
  );
});

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { setFocus, focus } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(focus === props.value && "border-primary", "transition-all", className)}
      onFocus={() => setFocus(props.value)}
      onBlur={() => setFocus(undefined)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        <ChevronRight className="size-4 shrink-0 group-data-[state=open]:rotate-90 transition-transform duration-200" />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
