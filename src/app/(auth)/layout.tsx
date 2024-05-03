import Link from "next/link";
import { DotBackground } from "./components/dot-background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 min-h-screen">
      <aside className="flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex bg-primary">
        <DotBackground />
      </aside>
      <main className="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r sm:shadow-lg border-border min-h-screen">
        <div className="relative flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
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
  );
}
