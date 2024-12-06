import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Urbanist } from 'next/font/google'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tienda",
  description: "Tienda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        <ModalProvider />
        <ToastProvider />
        <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
