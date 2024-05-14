"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Children } from "react";

interface ActiveLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  className,
  shouldMatchExactHref = false,
  children,
  ...props
}: ActiveLinkProps) {
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
        "transition duration-500 lg:flex gap-2 text-muted-foreground relative text-sm items-center py-2 px-4 grid place-items-center",
        "before:content-[''] before:absolute lg:before:top-0 before:left-0 before:right-0 lg:before:bottom-0 before:bottom-[-2px] lg:before:left-[-2px] before:border-b-2 lg:before:border-b-0 lg:before:border-l-2 before:border-transparent",
        "data-[state=active]:cursor-default data-[state=active]:font-medium data-[state=active]:text-foreground data-[state=active]:before:border-primary",
        "data-[state=inactive]:hover:text-foreground",
        "group/active-link",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
