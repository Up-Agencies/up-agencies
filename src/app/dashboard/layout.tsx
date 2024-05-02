import type { Metadata } from "next";

import "@/styles/globals.css";
import { Header } from "@/components/header";

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
    <div>
      <Header />
      {children}
    </div>
  );
}
