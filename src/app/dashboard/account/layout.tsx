import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Up Agencies | Dashboard",
  description: "Up Agencies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>Account</div>;
}
