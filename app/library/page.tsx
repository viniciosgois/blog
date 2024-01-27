import Link from "next/link";

export default function Library() {
  return (
    <div className="flex flex-1 flex-col">
      <Link href="library/books">
        <h1 className="hover:underline italic">Books List</h1>
      </Link>
    </div>
  );
}
