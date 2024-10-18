import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expert Interview Series | FAAN",
  description:
    "Join us for insightful interviews with industry leaders. Discover trends, tips, and strategies to enhance your aviation knowledge.",
  keywords:
    "FAAN, aviation interviews, industry leaders, aviation trends, expert insights, aviation strategies",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
