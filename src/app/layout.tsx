import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Wuthering Waves - Personajes y Guías",
  description: "Sitio oficial de la comunidad de Wuthering Waves",
  icons: {
    icon: '/browserico.png', // Icono principal
    shortcut: '/browserico.png', // Icono para accesos directos
    apple: '/browserico.png', // Icono para dispositivos Apple
    other: {
      rel: 'wuthering-waves-icon',
      url: '/browserico.png', // Icono alternativo
    },
  },
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="es" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }