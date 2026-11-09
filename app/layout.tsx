import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/modules/technologies/components/header";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const isDev = process.env.NODE_ENV === "development";

export const ORIGIN_URL = isDev ? "http://localhost:3001" : "";
// export const ORIGIN_URL = isDev ? "http://localhost:300" : "https://open-source-spirit-shop.vercel.app"
export const metadata: Metadata = {
  title: "Open Source Spirit Shop",
  description:
    "Open source Spirit Shop - discover magical potions brewed from the powers of popular open-source tools",
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <div className="container mx-auto px-4 py-8">
            <Header />
            <main className="min-h-screen p-8"> {children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
