"use client";

import { useAuth } from "@/hooks/queries/use-auth-queries";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function LogoutButton() {
  const { signOut } = useAuth();

  return (
    <DropdownMenuItem onSelect={signOut} className="text-muted-foreground">
      Sair da conta
    </DropdownMenuItem>
  );
}
