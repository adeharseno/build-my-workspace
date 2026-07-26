import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build My Workspace",
  description: "Configure a workspace that works like you do.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
