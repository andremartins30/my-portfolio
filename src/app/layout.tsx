import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "André Martins | Desenvolvedor Full Stack",
    description: "Portfólio profissional de André Martins - Engenheiro de Software especializado em desenvolvimento web moderno com React, Next.js, Node.js e TypeScript.",
    keywords: ["desenvolvedor", "programador", "full stack", "react", "nextjs", "typescript", "nodejs", "portfolio"],
    authors: [{ name: "André Martins" }],
    openGraph: {
        title: "André Martins | Desenvolvedor Full Stack",
        description: "Portfólio profissional de André Martins - Engenheiro de Software",
        type: "website",
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: "André Martins | Desenvolvedor Full Stack",
        description: "Portfólio profissional de André Martins - Engenheiro de Software",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Header />
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
