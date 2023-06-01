import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Header from "components/Header";
import Footer from "components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dynamic Dungeon",
  description: "Text based D&D adventures powered by GPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Header />
          {children}
          {/* <Footer /> */}
        </ClerkProvider>
      </body>
    </html>
  );
}
