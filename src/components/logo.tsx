import { cn } from "@/lib/utils";
import { Plane } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/sign-in"
      className={cn("flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 gap-2", className)}
    >
      <span className="bg-primary size-9 rounded-sm grid place-content-center">
        <Plane className="fill-white text-white size-4" />
      </span>

      <span className="font-medium text-lg font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Up Agencies
      </span>
    </Link>
  );
}
