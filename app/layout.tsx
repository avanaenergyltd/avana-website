import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/components/Nav/MenuContext";
import { Navbar } from "@/components/Nav/Bar";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avana Energy",
  description: "Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body className="font-plus min-h-screen overflow-x-hidden m-0 p-0 flex flex-col text-black bg-white">
        <MenuProvider>
          <Navbar />
          <main className="flex-grow-[1]">{children}</main>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
