import { useEffect } from "react";
import BookData from "../custom/bookcard/BookData";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../store/auth/selector";

export const Ebooks = () => {
  const [books, setBooks] = useState([]);
  const user = useSelector(selectUserDetails);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => setBooks(response.data));
  }, []);

  return (
    <>
      <div className="w-[100wh] grid grid-cols-3 grid-flow-row gap-4 pl-32">
        {books &&
          books.length > 0 &&
          books.map((book) => (
            <BookData key={book._id} book={book} user={user} />
          ))}
      </div>
    </>
  );
};
