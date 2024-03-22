import { SearchBar } from "../../common/SearchBar";

const LandingContainer = () => {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url("https://free4kwallpapers.com/uploads/originals/2019/03/14/the-library-wallpaper.jpg")`,
        }}
      >
        <SearchBar />
      </div>
    </>
  );
};

export default LandingContainer;
