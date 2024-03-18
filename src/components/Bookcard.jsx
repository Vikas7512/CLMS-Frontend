import { useState } from "react";
import { booksData } from "../utils/constant/books";
import BookData from "../custom/bookcard/BookData";

export const Bookcard = () => {
  const [books] = useState(booksData);
  return (
    <>
      {books.map((book) => (
        <div key={book.id} className=" flex items-center">
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
