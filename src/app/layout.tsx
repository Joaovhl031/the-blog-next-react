import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - feito com Next.js",
  description: "Página inicial do blog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <header>
        <h1>header</h1>
      </header>

      <body>{children}</body>

      <footer>
        <h1>footer</h1>
      </footer>
    </html>
  );
}
