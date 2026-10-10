import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - feito com Next.js",
  description: "Página inicial do blog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
