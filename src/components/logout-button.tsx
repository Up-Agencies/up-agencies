"use client";

import { useAuth } from "@/hooks/queries/use-auth-queries";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function LogoutButton() {
  const { signOut } = useAuth();

  return <DropdownMenuItem onSelect={signOut}>Sair da conta</DropdownMenuItem>;
}
