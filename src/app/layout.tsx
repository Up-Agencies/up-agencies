import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Up Agencies | Home",
  description: "Up Agencies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={GeistSans.className}>
          {children}

          <Toaster richColors />

          <div className="fixed bottom-0 right-0 flex items-center justify-center w-6 h-6 p-3 m-8 font-mono text-xs text-white bg-black rounded-lg pointer-events-none ">
            <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">al</div>
            <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</div>
            <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
            <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">lg</div>
            <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
