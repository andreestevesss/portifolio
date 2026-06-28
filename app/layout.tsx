import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andre Esteves — IT Support & IAM Engineer",
  description: "Portfolio of Andre Esteves, IT Support and Identity & Access Management professional based in Oakland, CA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
