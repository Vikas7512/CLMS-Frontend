import Header from "../common/Header";
import { SearchBar } from "../common/SearchBar";
import { Ebooks } from "../pages/Ebooks";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center p-10">
        <SearchBar />
      </div>
      <Ebooks />
    </>
  );
};
