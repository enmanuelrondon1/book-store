import { useState } from "react";
import Book1 from "../../../public/book/book1.jpg";
import Book2 from "../../../public/book/book2.jpg";
import Book3 from "../../../public/book/book3.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life will forever be Changed",
    description:
      "His Life will forever be Changed, It's time to cahnge your life, with the best books ever written, one of a kind, and only available in the Bookstore.",
  },
  {
    id: 2,
    img: Book2,
    title: "Who's there",
    description:
      "Our books are the best, a collection of the best books ever written, one of a kind, and only available in the library of Bookstore.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "A great variety of books to choose from, science fiction, fantasy, romance, and more.",
  },
];

export const Hero = () => {
  const [active, setActive] = useState(Book1);
  const [title, setTitle] = useState("His Life will forever be Changed");
  const [description, setDescription] = useState(
    "His Life will forever be Changed, It's time to cahnge your life, with the best books ever written, one of a kind, and only available in the Bookstore."
  );

  const handleImageClick = {
    backgroundImage: `url(${active})`,
    bakcgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200  "
      style={handleImageClick}
    >
      <div className="container pb-8 sm:pb-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  ">
          <div
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 "
          >
            <NeonGradientCard className="max-w-4xl items-center justify-center text-center mt-8">
            <h1
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold "
            >
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary mt-7 ">
                By Enmanuel
              </p>
            </h1>
            <p
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="text-lg mt-6"
            >
              {description}
            </p>

            <div>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full mt-24 mb-">
                Order now
              </Button>
            </div>
            </NeonGradientCard>
         
          </div>

          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center ">
              <Image
                data-aos="zoom-in"
                data-aos-once="true"
                src={active}
                alt="Book"
                className="w-[300px] h-[300px] sm:h-[450px] sm:scale-125 object-contain mx-auto "
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full  ">
              {ImageList.map((item, index) => (
                <Image
                  data-aos="zoom-in"
                  data-aos-once="true"
                  key={index}
                  src={item.img}
                  onClick={() => {
                    setActive(
                      item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                    );
                    setTitle(item.title);
                    setDescription(item.description);
                  }}
                  alt="Book"
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
