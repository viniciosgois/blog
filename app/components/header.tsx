import Link from "next/link";

import { navbarAnchors } from "@/app/util/data";

export default function Header() {
  return (
    <header className="flex gap-6 justify-center mb-16">
      {navbarAnchors.map((anchor) => (
        <Link key={anchor.name} href={anchor.href}>
          <span className="hover:underline font-medium">{anchor.name}</span>
        </Link>
      ))}
    </header>
  );
}
