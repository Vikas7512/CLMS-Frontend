import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../common/Header";

const ShowBookDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [bookDetails, setBookDetails] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((data) => setBookDetails(data.data));
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center m-20">
        <div className="h-full w-full md:h-[200px] md:w-[300px] border-2">
          <img
            src={
              bookDetails.url ||
              "https://books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png"
            }
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {bookDetails.title} <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm text-gray-600">{bookDetails.author}</p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {bookDetails.publisher}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {bookDetails.department}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {bookDetails.semeter}
              </span>
            </div>
            <div className="mt-3 flex items-center space-x-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBookDetail;
