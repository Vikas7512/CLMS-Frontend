import { Hamburger } from "../common/Hamburger";
import { SearchBar } from "../common/SearchBar";
import { Bookcard } from "../components/Bookcard";

export const Ebooks = () => {
  return (
    <>
      <div className=" flex justify-center  w-auto mt-12 h-auto mb-10 ">
        <SearchBar />
        <Hamburger />
      </div>

      <div className="bg-gray-100 w-auto h-auto mx-24 justify-center min-h-screen">
        <Bookcard />
      </div>
    </>
  );
};
