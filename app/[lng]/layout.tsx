'use client'; // Transformando em Componente de Cliente

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import "../globals.css";
import { dir } from 'i18next';
import { useParams } from "next/navigation"; // 1. Importar o hook useParams

// Esta metadata não será mais usada aqui, pois layouts de cliente não podem exportar metadata.
// A metadata deve ser gerenciada na page.tsx ou em um layout de servidor pai, se houver.

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams(); // 2. Usar o hook para obter os parâmetros
  const lng = params.lng as string; // 3. Extrair o idioma

  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
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
          <Header />
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}