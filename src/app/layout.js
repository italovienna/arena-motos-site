import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arena Motos | Oficina Especializada",
  description: "Especialista em motocross, preparação e manutenção geral em Brasília. Mais de 20 anos de experiência com Bahia, bicampeão de motocross.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased bg-arena-lead text-arena-white`}
    >
      <body className={`min-h-screen flex flex-col font-sans bg-black`}>{children}</body>
    </html>
  );
}
