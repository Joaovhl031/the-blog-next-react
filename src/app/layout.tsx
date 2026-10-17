import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The blog - feito com Next.js",
    template: "%s | The Blog",
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
          
          <Footer />
        </Container>
      </body>
    </html>
  );
}
