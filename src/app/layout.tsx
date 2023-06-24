import { Nunito } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { AuthProvider } from "../contexts/AuthContext";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Ippon",
    description: "Gerenciamento de Academias de Artes Marciais",
    icons: {
        icon: "./icon.png",
        shortcut: "./shortcut-icon.png",
        apple: "./apple-icon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={twMerge(nunito.className, "bg-gray_five")}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
