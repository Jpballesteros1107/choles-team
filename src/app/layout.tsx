import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";

import { PublicLayout } from "@/components/layout/PublicLayout";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${bebas.variable} antialiased`}>
        <PublicLayout>
          {children}
        </PublicLayout>
      </body>
    </html>
  );
}