import { useState } from "react";

export function SideBar() {
  const BookContant = [
    {
      id: 1,
      action: "Add Book",
    },
    {
      id: 2,
      action: "Update Book",
    },
    {
      id: 3,
      action: "Delete Book",
    },
    {
      id: 4,
      action: "Apply Books",
    },
    {
      id: 5,
      action: "Return Books",
    },
  ];
  const [activeState, setActiveState] = useState(BookContant[0].id);
  return (
    <>
      <aside className="flex h-screen w-52 flex-col overflow-y-auto border-r bg-white px-8 ">
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                href="#"
              >
                <span className=" text-xl font-bold  ">DASHBOARD</span>
              </a>
            </div>
            <div className="space-y-3 ">
              <label className=" text-xl font-bold  mt-3">Books</label>
              {BookContant.map((book) => (
                <a
                  key={book.id}
                  className={
                    activeState !== book.id
                      ? "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                      : "flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 bg-gray-950 hover:text-slate-100"
                  }
                  onClick={() => setActiveState(book.id)}
                  href="#"
                >
                  <span className="mx-2 text-base text-center font-bold">
                    {book.action}
                  </span>
                </a>
              ))}
            </div>
            <div className="space-y-3 ">
              <label className="text-xl font-bold  mt-3">Department</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                href="#"
              >
                <span className="mx-2 text-base text-center font-bold">
                  B.Com
                </span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                href="#"
              >
                <span className="mx-2 text-base text-center font-bold">
                  Bsc.IT
                </span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                href="#"
              >
                <span className="mx-2 text-base text-center font-bold">
                  B.M.S
                </span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                href="#"
              >
                <span className="mx-2 text-base text-center font-bold">
                  B.M.M
                </span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                href="#"
              >
                <span className="mx-2 text-base text-center font-bold">
                  Jr.college
                </span>
              </a>
            </div>

            <div className="space-y-3 ">
              <label className="text-xl font-bold  mt-3">Notice</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                href="#"
              >
                <span className="mx-2 text-base text-center font-bold">
                  Previous notice
                </span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-950 hover:text-slate-100"
                href="#"
              >
                <span className="mx-2 text-base text-center font-bold">
                  New notice
                </span>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
