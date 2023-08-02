import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Footer, Header, Theme } from "@/components";
import { ToastContainer } from "react-toastify";

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
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
      <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
      <body className={`${font.className} flex justify-center dark:bg-neutral-900 dark:text-white`}>
        <Theme>
          <div className="container min-h-screen flex flex-col gap-4">
            <Header />
            <div className="flex-1 border p-4">{children}</div>
            <Footer />
          </div>
        </Theme>
        <ToastContainer />
      </body>
    </html>
  );
}
