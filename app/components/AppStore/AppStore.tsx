import AppStoreImg from ".././../../public/website/play_store.png";
import PlayStore from "../../../public/website/app_store.png";
import Image from "next/image";

const bannerImage = {
  backgroundImage: "url('/website/board.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const AppStore = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 text-white py-10   sm:mb-24 md:mb-24 lg:mb-24"
        style={bannerImage}
      >
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-xl mx-auto"
          >
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold ">
              Read Books at Your Fingertips
            </h1>
            <div className="flex flex-wrap justify-center items-center">
              <a href="#">
                <Image
                  src={PlayStore}
                  alt="Play store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <Image
                  src={AppStoreImg}
                  alt="App store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
