import axios from "axios";
import { Dashboard } from "../Dashboard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddBooks = () => {
  const [addBooks, setBooks] = useState({
    title: "",
    author: "",
    publisher: "",
    department: "",
    semeter: "",
    url: "",
  });

  const handleAddBook = () => {
    axios
      .post("http://localhost:3000/books", addBooks)
      .then(() => toast.success("Book added successfully"))
      .catch((error) => toast.error(error.response.data));
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setBooks({ ...addBooks, [name]: value });
  };

  return (
    <>
      <Dashboard />
      <div className="w-full bg-white  translate-x-96 mx-96 -my-24 -translate-y-full  ">
        <div className=" rounded-lg shadow  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6  sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add New Book
            </h1>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Book Title"
                value={addBooks.title}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Author Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={addBooks.author}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Publisher
              </label>
              <input
                type="text"
                name="publisher"
                id="publisher"
                placeholder="Publisher Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={addBooks.name}
                onChange={handleInputs}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                placeholder="Department Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={addBooks.name}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Semster
              </label>
              <input
                type="number"
                name="semeter"
                id="Semster"
                placeholder="Semster"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={addBooks.semeter}
                onChange={handleInputs}
              />
            </div>

            <p className="text-white font-bold text-xl mb-4 px-14">
              Uplode Book image
            </p>
            <div className="h-10 w-full bg-slate-400 mb-4 px-10 py-2">
              <input
                type="file"
                id="image"
                className="dark:ring-offset-gray-800    dark:border-gray-600 text-black font-bold    px-4 rounded"
                value={addBooks.id}
                onChange={handleInputs}
              />
            </div>

            <button
              type="submit"
              className="w-full hover:bg-slate-950 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={() => handleAddBook()}
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
