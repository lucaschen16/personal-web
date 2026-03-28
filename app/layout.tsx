import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/page-shell";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Chen",
  description:
    "Personal site for Lucas Chen, an incoming Systems Design Engineering student interested in software, design, and building useful things.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
