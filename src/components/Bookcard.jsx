import { useState } from "react";
import { booksData } from "../utils/constant/books";
import BookData from "../custom/bookcard/BookData";

export const Bookcard = () => {
  const [books] = useState(booksData);
  return (
    <>
      {books.map((book) => (
        <div
          key={book.id}
          className=" bg-gray-100 w-auto h-auto mx-24 flex min-h-screen "
        >
          <BookData book={book} />
          <BookData book={book} />
          <BookData book={book} />
          <BookData book={book} />
          <BookData book={book} />
          <BookData book={book} />
          <BookData book={book} />
          <BookData book={book} />
          <BookData book={book} />
          <BookData book={book} />
        </div>
      ))}
    </>
  );
};
