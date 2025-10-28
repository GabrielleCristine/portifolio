"use client";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header"; // 1. Importar o Header

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header /> {/* 2. Adicionar o Header aqui */}
          <main>{children}</main> {/* 3. Envolver children com <main> */}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}