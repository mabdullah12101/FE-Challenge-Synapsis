import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navlink({ href, children }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${
        router.asPath === href ? "text-white" : "text-gray-400"
      } hover:text-white`}
    >
      {children}
    </Link>
  );
}
