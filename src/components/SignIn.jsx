export const SignIn= () => {
    return (
      <>
        <div className="h-screen flex items-center justify-center bg-neutral-400">
          <div className="w-4/6 h-3/4 flex items-center justify-center bg-red-500 ring ring-black-300 p-6 rounded-md relative">
            {/* Left side */}
            <div className="absolute left-0 top-0 h-full w-1/2  bg-white ">
              <div className="flex flex-col items-center justify-center p-14">
                <p className="text-black font-bold text-4xl mb-4 pt-4 pb-10">Sign In</p>
                <div className="h-10 w-full mb-4 ">
                <input type="email" placeholder="Email" className=" w-full h-12 bg-black border-none outline-none rounded-md px-4  text-white"   />
                
                </div>
                <div className="h-10 w-full bg-slate-400 mb-4">
                <input type="password" placeholder="Password" className=" w-full h-12 bg-black border-none outline-none rounded-md px-4 text-white"   />
  
                </div>
               
                <div className="h-28 w-full pt-20  mb-4  px-32">
  
                <button className="bg-red-100 hover:bg-red-500 text-black font-bold  px-5 rounded">Sign In</button>
                
                </div>
              </div>
            </div>
            
            {/* Right side with input div */}
            <div className="absolute  right-0 top-0 h-full w-1/2 overflow-hidden rounded-tr rounded-br">
              <div className="flex flex-col items-center justify-center pt-28">
                <p className="text-black font-bold text-4xl mb-4">Hello, Student </p>
              </div>
              <div className="flex flex-col items-center justify-center pt-14 pl-16 pr-3">
                <h1 className="text-black font-semibold text-xl ">Siddharth College of Commerce and Economics Library</h1>
              </div>
               <div className="mb-4  px-32 pt-14 pl-52">
                <button className="bg-red-100 hover:bg-red-400 text-black font-bold  px-5 rounded">Sign Up</button>
                </div>
            </div>
            
          </div>
        </div>
      </>
    );
  };
  