import Image from "next/image";
import { BooksData } from "./Books.data";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Books = () => {
  return (
    <>
      <div
      data-aos="zoom-in"
      className="mt-4 mb-12 ">
        <div className="container">
          <div className="text-center mb-10 max-w-[600px] mx-auto ">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400 ">
              We are the best books in the world, and we are here to help you
              find the best books for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
            {BooksData.map(({ id, img, title, rating, author }) => (
              <div key={id} className="space-y-3 ">
                <Image
                  src={img}
                  alt="Book"
                  className="h-[220px] w-[150px] object-cover rounded-md "
                />
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm text-gray-700">{author}</p>
                  <div className="flex items-center gap-1 ">
                    <FaStar className="text-yellow-500" />
                    <span>{rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
            <Button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              See more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
