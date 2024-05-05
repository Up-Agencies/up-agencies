import Link from "next/link";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { UserNav, UserNavSkeleton } from "./user-nav";
import { TeamButton, TeamButtonSkeleton } from "./team-button";

import { Suspense } from "react";

export async function Header() {
  return (
    <div className="border-b px-6 flex justify-between items-center h-16">
      <div className="flex items-center gap-4">
        {/* <Separator
          orientation="vertical"
          className="h-5 -ml-2 rotate-12 mx-1"
        /> */}

        <span className="pt-1.5 flex">
          <Suspense fallback={<TeamButtonSkeleton />}>
            <TeamButton />
          </Suspense>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Feedback
        </Button>

        <Separator orientation="vertical" className="h-5" />

        <Suspense fallback={<UserNavSkeleton />}>
          <UserNav />
        </Suspense>
      </div>
    </div>
  );
}
