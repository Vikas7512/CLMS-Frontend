import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-neutral-400">
        <div className="w-4/6 h-3/4 flex items-center justify-center bg-red-500 ring ring-black-300 p-6 rounded-md relative">
          {/* Left side */}
          <div className="absolute left-0 top-0 h-full w-1/2">
            <div className="flex flex-col items-center justify-center pt-28">
              <p className="text-black font-bold text-4xl mb-4">
                Welcome Back!!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-5">
              <h1 className="text-black font-semibold text-xl ">
                Stay connected with our library updates and events for a
                literary journey beyond books.
              </h1>
            </div>
            <div className="mb-4  px-32 pt-14 pl-52">
              <div>
                <Link
                  to="/login"
                  className="bg-red-100 hover:bg-red-400 text-black font-bold  px-5 rounded"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>

          {/* Right side with input div */}
          <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden bg-white rounded-tr rounded-br">
            <div className="flex flex-col items-center justify-center p-14">
              <p className="text-black font-bold text-4xl mb-4">
                Create Account
              </p>
              <div className="h-10 w-full bg-slate-400 mb-4">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className=" w-full h-12 bg-black border-none outline-none rounded-md px-4 text-white"
                />
              </div>
              <div className="h-10 w-full bg-slate-400 mb-4">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className=" w-full h-12 bg-black border-none outline-none rounded-md px-4 text-white"
                />
              </div>
              <div className="h-10 w-full bg-slate-400 mb-4">
                <input
                  type="text"
                  placeholder="Enter your Password"
                  className="w-full h-12  bg-black  border-none outline-none rounded-md px-4 text-white"
                />
              </div>

              <div className="h-10 w-full bg-slate-400 mb-4">
                <input
                  type="text"
                  placeholder="Phone No."
                  className=" w-full h-12 bg-black  border-none outline-none rounded-md px-4 text-white"
                />
              </div>
              <div className="h-10 w-full bg-slate-400 mb-4">
                <input
                  type="text"
                  placeholder="Stream"
                  className=" w-full h-12 bg-black border-none outline-none rounded-md px-4 text-white"
                />
              </div>
              <div className="h-28 w-full  mb-4">
                <p className="text-black font-bold text-xl mb-4 px-14">
                  Uplode Your fees recipt
                </p>
                <div className="h-10 w-full bg-slate-400 mb-4 px-10 py-2">
                  <button className="bg-white  text-black font-bold  px-4 rounded">
                    Choose file
                  </button>
                </div>
                <div className="mb-4  px-32">
                  <button className="bg-red-100 hover:bg-red-500 text-black font-bold  px-5 rounded">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
