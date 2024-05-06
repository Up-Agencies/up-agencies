import { Plane } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/sign-in"
      className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 gap-2"
    >
      <span className="bg-primary size-9 rounded-full grid place-content-center">
        <Plane className="fill-white text-white size-4" />
      </span>

      <span className="font-medium text-lg font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Up Agencies
      </span>
    </Link>
  );
}
