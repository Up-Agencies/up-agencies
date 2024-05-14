"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Preferences() {
  const { setTheme, theme } = useTheme();

  return (
    <Card className="max-w-[760px] w-full mx-auto">
      <CardContent className="p-6">
        <CardTitle>Preferências</CardTitle>

        <RadioGroup
          value={theme}
          onValueChange={setTheme}
          defaultValue="comfortable"
          className="grid lg:grid-cols-3 gap-4 mt-6"
        >
          <Label htmlFor="r1">
            <div className="flex flex-col gap-2 p-3 border border-border rounded-md bg-background-foreground/40">
              <div className="bg-gradient-to-br from-[#11998e] to-[#78ffd6] w-full h-[110px] rounded-sm grid place-content-center">
                <Settings className="text-zinc-200 size-10" />
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="system" id="r1" />
                <span>Sistema</span>
              </div>
            </div>
          </Label>
          <Label htmlFor="r2">
            <div className="flex flex-col gap-2 p-3 border border-border rounded-md bg-background-foreground/40">
              <div className="bg-gradient-to-br from-[#11998e] to-[#78ffd6] w-full h-[110px] rounded-sm grid place-content-center">
                <Sun className="text-zinc-200 size-10" />
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="light" id="r2" />
                <span>Claro</span>
              </div>
            </div>
          </Label>
          <Label htmlFor="r3">
            <div className="flex flex-col gap-2 p-3 border border-border rounded-md bg-background-foreground/40">
              <div className="bg-gradient-to-br from-[#11998e] to-[#78ffd6] w-full h-[110px] rounded-sm grid place-content-center">
                <Moon className="text-zinc-200 size-10" />
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="dark" id="r3" />
                <span>Escuro</span>
              </div>
            </div>
          </Label>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
