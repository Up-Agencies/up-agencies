import { Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

import { Empty } from "./components/empty";

export default function People() {
  return (
    <div className="min-h-screen bg-white">
      <header className="h-[49px] flex items-center px-4 border-b w-full">
        <div className="flex items-center gap-1.5">
          <h1 className="text-lg font-medium">Pessoas</h1>
          <Tooltip>
            <TooltipTrigger className="*:size-3 text-muted-foreground mt-0.5">
              <Info />
            </TooltipTrigger>
            <TooltipContent side="right">Pessoas</TooltipContent>
          </Tooltip>
        </div>
      </header>

      <div className="p-6 h-[calc(100vh-49px)]">
        <Empty />
      </div>
    </div>
  );
}
