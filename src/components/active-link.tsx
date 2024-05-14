"use client";

import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ className, shouldMatchExactHref = false, ...props }: ActiveLinkProps) {
  const pathname = usePathname();

  let isActive = false;

  if (shouldMatchExactHref && pathname === props.href) {
    isActive = true;
  }

  if (!shouldMatchExactHref && pathname.startsWith(String(props.href))) {
    isActive = true;
  }

  return (
    <Link
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "transition-colors duration-500 flex gap-2 text-muted-foreground text-sm items-center p-1.5 border border-transparent rounded-md",
        "data-[state=active]:cursor-default data-[state=active]:bg-gradient-to-r data-[state=active]:text-foreground data-[state=active]:border-border data-[state=active]:from-violet-200 data-[state=active]:to-violet-100/20",
        "data-[state=inactive]:hover:bg-violet-100/60 data-[state=inactive]:hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
