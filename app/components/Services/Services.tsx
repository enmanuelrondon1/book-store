import { useState } from "react";
import { ServicesData } from "./Services.data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

export const Services = () => {
  const [show, setShow] = useState(3);

  const ShowMore = () => {
    setShow(show + 3);
  };

  const handleCheckout = async (item: any) => {
    if (!item.price || !item.title || !item.img) {
      console.error("Invalid item data:", item);
      return;
    }
  
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: item.title,
          price: item.price,
          image: item.img,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
  
      const { url } = await response.json();
      if (url) {
        window.location.href = url; // Redirigir al Checkout de Stripe
      } else {
        throw new Error("No URL received from the server");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  

  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto ">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from bg-primary to-secondary">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Discover the best books available in the Bookstore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-24 place-items-center">
            {ServicesData.slice(0, show).map((item) => (
              <div
                key={item.id}
                data-aos="zomm-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-secondary hover:scale-105 duration-hight relative shadow-xl grioup max-w-[300px]"
              >
                <div className="h-[100px]">
                  <Image
                    src={item.img}
                    alt="Book"
                    width={300}
                    height={300}
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>

                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-hight text-sm line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-center gap-4 mt-4 font-bold">
                    <p>Price: ${item.price}</p>
                  </div>
                  <div className="flex justify-center gap-4 mt-2">
                    <Button
                      onClick={ShowMore}
                      className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-purple-800"
                    >
                      Show More
                    </Button>
                    <Button
                      onClick={() => handleCheckout(item)}
                      className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-purple-800"
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
