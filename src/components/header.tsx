import Link from "next/link";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { UserNav, UserNavSkeleton } from "./user-nav";
import { TeamButton, TeamButtonSkeleton } from "./team-button";

import { Suspense } from "react";
import { Logo } from "./logo";

export async function Header() {
  return (
    <header className="border-b px-6 flex justify-between items-center h-16 col-span-full">
      <div className="flex items-center gap-4">
        <Logo />

        {/* <Separator orientation="vertical" className="h-5 -ml-2 rotate-12 mx-1" />

        <span className="pt-1.5 flex">
          <Suspense fallback={<TeamButtonSkeleton />}>
            <TeamButton />
          </Suspense>
        </span> */}
      </div>
      <div className="flex items-center gap-4">
        <Suspense fallback={<UserNavSkeleton />}>
          <UserNav />
        </Suspense>
      </div>
    </header>
  );
}
