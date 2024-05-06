import {
  ArrowRightToLine,
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Navbar() {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b size-16 grid place-content-center">
        <Button variant="outline" size="icon" aria-label="Home">
          <ArrowRightToLine className="size-5" />
        </Button>
      </div>
      <nav className="grid gap-1 p-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg bg-muted text-primary"
              aria-label="Playground"
            >
              <SquareTerminal className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Playground
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Models">
              <Bot className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Models
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-lg" aria-label="API">
              <Code2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            API
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Documentation">
              <Book className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Documentation
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Settings">
              <Settings2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Settings
          </TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto grid gap-1 p-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Help">
              <LifeBuoy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Help
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Account">
              <SquareUser className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Account
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
