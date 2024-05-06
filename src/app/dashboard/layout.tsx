import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Up Agencies | Dashboard",
  description: "Up Agencies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Navbar />
      <Header />
      {children}
    </div>
  );
}
