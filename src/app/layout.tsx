import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vestígios RPG",
  description:
    "Tudo que existe deixa vestígios — um universo de RPG, ARG, mistério e horror.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-black">
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, #1a1a1a 0%, #000000 70%)",
          }}
        />

        <div
          className="fixed inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "url('/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />

        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.1) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03), transparent 70%)",
          }}
        />

        {children}
      </body>
    </html>
  );
}
