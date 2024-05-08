import Link from "next/link";
import { DotBackground } from "./components/dot-background";
import { PlaneTakeoff } from "lucide-react";
import { Logo } from "@/components/logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 min-h-screen items-stretch">
      <div className="flex flex-1">
        <aside className="flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 lg:flex bg-primary">
          <DotBackground />
        </aside>

        <main className="lg:h-[100dvh] flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-studio border-default">
          <Logo />

          <div className="relative flex flex-1 flex-col justify-center w-[338px] sm:w-[384px] m-auto">
            {children}
          </div>

          <div className="sm:text-center mt-6 sm:mt-0">
            <p className="text-xs text-muted-foreground sm:mx-auto sm:max-w-sm">
              Ao continuar, você concorda com os{" "}
              <Link className="underline hover:text-foreground-light" href="/">
                Termos de serviço
              </Link>{" "}
              e{" "}
              <Link className="underline hover:text-foreground-light" href="/">
                Política de Privacidade
              </Link>{" "}
              da Up Agencies.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
