import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// import { Skeleton } from "./ui/skeleton";

import { getInitialsFromFullName } from "@/utils/formatters";

import { User } from "@/service/schema/user";
import Link from "next/link";
import { fetchApi } from "@/service/api-server";
import { Skeleton } from "./ui/skeleton";

import { LogoutButton } from "./logout-button";

export async function UserNav() {
  const user = await fetchApi<User>("/me", {
    cache: "force-cache",
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative size-9 rounded-full select-none"
        >
          <Avatar className="size-9">
            <AvatarImage src={user?.avatarUrl} alt={user?.name ?? ""} />
            <AvatarFallback>
              {user?.name && getInitialsFromFullName(user.name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/account">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/account/teams">My teams</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/account/billing">Billing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/account/keys">API Keys</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function UserNavSkeleton() {
  return <Skeleton className="size-9 rounded-full" />;
}
