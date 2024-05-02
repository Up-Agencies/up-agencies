import { Building2 } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function TeamButton() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="rounded-md size-7 ">
        <AvatarFallback className="bg-gradient-to-br rounded-md from-purple-500 via-pink-500 to-yellow-500">
          <Building2 className="size-5" />
        </AvatarFallback>
      </Avatar>
      <span className="text-sm text-muted-foreground">Tiguer agency</span>
    </div>
  );
}
