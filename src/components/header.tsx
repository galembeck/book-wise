"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Session } from "next-auth";

import { cn, getInitials } from "@/lib/utils";

import { Avatar, AvatarFallback } from "./ui/avatar";

export function Header({ session }: { session: Session }) {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="Logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>

        <li>
          <Link href="/profile">
            <Avatar>
              <AvatarFallback className="bg-primary-avatar">
                {getInitials(session?.user?.name || "BW")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
}
