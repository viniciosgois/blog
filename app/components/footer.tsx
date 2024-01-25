import { currentYear } from "@/app/util/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-8 flex justify-between">
      <span>{currentYear}</span>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/viniciosgois/">
          <span className="hover:underline">LinkedIn</span>
        </Link>
        <Link href="https://x.com/vinigadd">
          <span className="hover:underline">Twitter</span>
        </Link>
        <Link href="https://github.com/viniciosgois">
          <span className="hover:underline">GitHub</span>
        </Link>
      </div>
    </footer>
  );
}
