import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookData = ({ book, user }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[450px] rounded-md border bg-gray-200">
      <img
        src={
          book.url ||
          "https://books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png"
        }
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {book?.title} &nbsp; <ArrowUpRightIcon className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">{book.author}</p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {book.semeter}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {book.department}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {book.author}
          </span>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/home/${book._id}`)}
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Apply
        </button>
        {user.isAdmin && (
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate(`/home/${book._id}`)}
              className="mt-4 w-1/3 rounded-sm bg-green-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Edit details
            </button>
            <button
              type="button"
              onClick={() => navigate(`/home/${book._id}`)}
              className="mt-4 w-1/3 rounded-sm bg-red-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookData;
