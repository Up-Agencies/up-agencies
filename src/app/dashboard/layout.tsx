import type { Metadata } from "next";

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
    <div className="h-screen w-full grid lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background-foreground">
      <Navbar />

      {children}
    </div>
  );
}
