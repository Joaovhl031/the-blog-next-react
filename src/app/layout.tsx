import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default:'The blog - feito com Next.js',
    template:'%s | The Blog',
  },
  description: "Página do blog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
          {children}
          <footer>
            <p className="text-6xl font-bold text-center py-8">Footer</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
