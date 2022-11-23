"use client";

import { SessionProvider } from "next-auth/react";

function providers({ children, session }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default providers;
