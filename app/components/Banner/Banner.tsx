import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import Vector from "../../../public/website/vector3.png";
import BooksStack from "../../../public/website/library.jpg";
import Image from "next/image";
import { BookAudioIcon } from "lucide-react";

export const Banner = () => {


  return (
    <>
      <div className="min-h-[550px] ">
        <div className="minh-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div data-aos="slide-up" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div>
                <Image
                  src={BooksStack}
                  alt="BookStack"
                  className="max-w-[420px] h-[390px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover mr-8 "
                />
              </div>
              <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
                <h1 className="text-3xl sm:text-4xl font-bold ">
                  Library at your fingertips
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5  ">
                  Discover the best places to find books, magazines, and other
                  learning material. If you want to learning new things or
                  explore new genres, BookStack is the place to go.
                  <br />
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-300 dark:bg-violet-400 " />
                    <p>Quality Books</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-300 dark:bg-orange-400 " />
                    <p>Fast Delivery</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-300 dark:bg-green-400 " />
                    <p>Easy Payment method</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <BookAudioIcon className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-300 dark:bg-blue-400 " />
                    <p>Get Offers on Books</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
