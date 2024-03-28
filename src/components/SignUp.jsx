import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

export const SignUp = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    stream: "",
  });

  const navigate = useNavigate();

  const createUser = () => {
    if (!terms) {
      alert("Please Accept Terms and Conditions");
      return;
    }
    axios
      .post("http://localhost:3000/users", user)
      .then(() => navigate("/login"))
      .catch((error) => alert(error.response.data));
  };

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const [terms, setTerms] = useState(false);

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-neutral-400">
        {/* Right side with input div */}
        <section className="bg-gray-50 dark:bg-gray-900"></section>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your  Name"
                required="name"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required="email"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="password"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
              </label>
              <input
                type="number"
                name="phone_no"
                placeholder="Enter your Phone No"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="number"
                value={user.phone_no}
                onChange={handleInputs}
              />
            </div>

            <div>
              <label
                htmlFor="Stream"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stream
              </label>
              <input
                type="text"
                name="stream"
                id="stream"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Stream"
                required="stream"
                value={user.stream}
                onChange={handleInputs}
              />
            </div>
            <div className="h-28 w-full  mb-4">
              <p className="text-white font-bold text-xl mb-4 px-14">
                Uplode Your fees recipt
              </p>
              <div className="h-10 w-full bg-slate-400 mb-4 px-10 py-2">
                <input
                  type="file"
                  className="dark:ring-offset-gray-800    dark:border-gray-600 text-black font-bold    px-4 rounded"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                    onClick={() => setTerms((prev) => !prev)}
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={() => createUser()}
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <Link
                className="text-xl font-light text-gray-500 dark:text-gray-400  px-5 rounded"
                to="/login"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
