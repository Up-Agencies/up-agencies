import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Up Agencies",
  description: "Up Agencies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background-foreground">
      <Header />

      <Navbar />

      <main className="flex flex-col max-w-[1352px] w-full p-6 pb-10 gap-10 mx-auto overflow-auto">
        {children}
      </main>
    </div>
  );
}
