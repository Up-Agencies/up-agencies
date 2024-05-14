import type { Metadata } from "next";
import { AccountNavbar } from "./components/account-navbar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getInitialsFromFullName } from "@/utils/formatters";

import { cache } from "react";
import { fetchApi } from "@/service/api-server";
import type { User } from "@/service/schema/user";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Up Agencies | Dashboard",
  description: "Up Agencies",
};

const getMe = cache(async () => {
  return await fetchApi<User>("/me", {
    cache: "force-cache",
  });
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getMe();

  return (
    <div
      className={cn(
        "grid grid-rows-[auto_1fr] items-start gap-x-12 mt-4",
        "grid-cols-[1fr] gap-y-6",
        "lg:grid-cols-[180px_1fr] lg:ml-8 lg:gap-y-10",
      )}
    >
      <div className="lg:col-span-2 flex gap-2">
        <Avatar className="size-12">
          <AvatarImage src={user?.avatarUrl} alt={user?.name ?? ""} />
          <AvatarFallback>{user?.name && getInitialsFromFullName(user.name)}</AvatarFallback>
        </Avatar>

        <span>
          <h1 className="text-2xl font-medium">Minha conta</h1>
          <p className="text-muted-foreground text-sm">
            Gerencie as informações de conta, dados pessoais e assinaturas
          </p>
        </span>
      </div>
      <AccountNavbar />
      {children}
    </div>
  );
}
