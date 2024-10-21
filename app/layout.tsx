// app/layout.tsx (Server Component)

import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";

export const metadata = {
  title: "Expert Interview Series | FAAN",
  description:
    "Join us for insightful interviews with industry leaders. Discover trends, tips, and strategies to enhance your aviation knowledge.",
  keywords:
    "FAAN, aviation interviews, industry leaders, aviation trends, expert insights, aviation strategies",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap children with ClientWrapper to handle session logic */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
