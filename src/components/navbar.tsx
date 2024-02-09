"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import FileProcess from "@/app/file-process";
import { usePathname } from "next/navigation";

const links = [
  { href: "/decision-tree", label: "Decision Tree" },
  { href: "/family-values", label: "Family Values" },
  { href: "/family-code", label: "Family Code" },
  { href: "/family-vision", label: "Family Vision" },
  { href: "/family-crest", label: "Family Crest" },
  { href: "/family-garden", label: "Family Garden" },
  { href: "/org-chart", label: "Organizational Chart" },
  { href: "/policy-tree", label: "Policy Tree" },
  { href: "/family-tree", label: "Family Tree" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="flex h-dvh max-w-xs flex-col items-center justify-center border-r p-10">
      <h1 className="mb-8 min-w-0 text-4xl font-bold">ICF</h1>
      <nav className="flex flex-col justify-center gap-2">
        {links.map((link) => (
          <Button
            key={link.label}
            variant={pathname === link.href ? "default" : "ghost"}
          >
            <Link className="w-full" href={link.href}>
              {link.label}
            </Link>
          </Button>
        ))}
      </nav>
      <Separator className="my-4" />
      <FileProcess />
    </header>
  );
}