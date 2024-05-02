import Link from "next/link";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";
import { Building2, Plane } from "lucide-react";
import { TeamButton } from "./team-button";

export function Header() {
  return (
    <div className="border-b px-6 flex justify-between items-center h-[72px]">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex gap-1"
        >
          <Plane className="text-purple-500" />
          Up Agencies
        </Link>

        <Separator
          orientation="vertical"
          className="h-5 -ml-2 rotate-12 mx-1"
        />

        <span className="pt-1.5 flex">
          {/* <TeamSwitcher />
          <OrganizationSwitcher /> */}
          <TeamButton />
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Feedback
        </Button>
        <Separator orientation="vertical" className="h-5" />
        <nav className="*:text-sm *:text-muted-foreground flex items-center space-x-6">
          <Link
            href="/examples/dashboard"
            className="transition-colors hover:text-primary"
          >
            Changelog
          </Link>
          <Link
            href="/examples/dashboard"
            className="transition-colors hover:text-primary"
          >
            Help
          </Link>
          <Link
            href="/examples/dashboard"
            className="transition-colors hover:text-primary"
          >
            Docs
          </Link>

          <Separator orientation="vertical" className="h-5" />

          <UserNav />
        </nav>
      </div>
    </div>
  );
}
