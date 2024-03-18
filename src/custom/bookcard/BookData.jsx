/* eslint-disable react/prop-types */
const BookData = ({ book }) => {
  return (
    <div className=" h-64  w-64 items-center p-4 ">
      <figure>
        <img src={book.url} alt="books" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-left font-bold mb-2">
          {book.name}
          <span className="badge badge-secondary bg-gray-500 text-white ml-0.50 rounded-full px-1 py-1">
            {book.stream}
          </span>
        </h2>
        <p>{book.subject}</p>
        <div className="card-actions justify-end flex flex-wrap gap-2">
          <div className="badge badge-outline rounded-full px-2 py-1 border border-gray-300 hover:border-gray-500 hover:text-gray-500">
            Apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookData;
