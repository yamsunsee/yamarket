import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Footer, Header } from "@/components";

const font = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Yamarket",
  description: "The Ultimate Shopping Destination - Perfectly Catering To Everyone's Needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} flex flex-col items-center bg-neutral-900 text-white`}>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
