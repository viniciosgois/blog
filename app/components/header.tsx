import Link from "next/link";

type Anchor = {
  name: string;
  href: string;
};

export default function Header() {
  const anchors: Anchor[] = [
    {
      name: "about",
      href: "/about",
    },
  ] as const;

  return (
    <header className="flex justify-between">
      <Link href="/">
        <h1 className="font-bold text-2xl">Vinicios Gois</h1>
      </Link>
      <div className="flex gap-6">
        {anchors.map((anchor) => (
          <Link href={anchor.href}>
            <span className="capitalize">{anchor.name}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
