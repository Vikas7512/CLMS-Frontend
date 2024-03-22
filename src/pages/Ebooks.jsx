import { SearchBar } from "../common/SearchBar";
import BookData from "../custom/bookcard/BookData";
import { books } from "../utils/constant/books";
console.log(books);

export const Ebooks = () => {
  return (
    <>
      <div className="flex justify-center my-8">
        <SearchBar />
      </div>
      <div className="w-full grid grid-cols-3 grid-flow-row gap-4 ml-24">
        {books.map((book) => (
          <BookData key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};
