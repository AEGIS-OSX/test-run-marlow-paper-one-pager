import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marlow Paper",
  description:
    "Objects of craft and permanence for the desk and the hand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}