import { Building2 } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Agency } from "@/service/schema/agency";
import { fetchApi } from "@/service/api-server";
import { Skeleton } from "./ui/skeleton";

export async function TeamButton() {
  const agency = await fetchApi<Agency>("/agency", {
    cache: "force-cache",
  });

  return (
    <div className="flex items-center gap-2">
      <Avatar className="rounded-md size-7">
        <AvatarFallback className="bg-gradient-to-br rounded-md from-purple-500 via-pink-500 to-yellow-500">
          <Building2 className="size-5" />
        </AvatarFallback>
      </Avatar>

      <span className="text-sm text-muted-foreground">{agency.name}</span>
    </div>
  );
}

export function TeamButtonSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div aria-label="Carregando agência" className="sr-only" />
      <Skeleton className="rounded-md size-7" />
      <Skeleton className="h-5 w-32" />
    </div>
  );
}
