import { books } from "@/app/content/books";

export default function Books() {
  return (
    <div className="flex flex-1 flex-col">
      <p>The books that I read</p>
      <ul className="mt-8">
        {books.map((book) => (
          <li key={book.name}>
            {book.name}, <span>{book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
