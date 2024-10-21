// app/components/ClientWrapper.tsx (Client Component)
"use client"; // Mark this as a client component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
