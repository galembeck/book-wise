import { ReactNode } from "react";

import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";

import { bookWiseConfig } from "@/config";

import { Toaster } from "@/components/ui/toaster";

import "../styles/globals.css";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

export const metadata = bookWiseConfig;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          suppressHydrationWarning
          className={`${ibmPlexSans.className} ${bebasNeue.variable}`}
        >
          {children}

          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
