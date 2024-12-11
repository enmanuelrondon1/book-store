import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { products } from "./data/product";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  features: string[];
}

export const Products = () => {
  const [showMore, setShowMore] = useState(4);

  const handleShowMore = () => {
    setShowMore(showMore + 4);
  };

  const handleClick = async (product: Product) => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Failed to create checkout session");
      return;
    }

    const text = await res.text();
    if (!text) {
      console.error("Empty response");
      return;
    }

    try {
      // Solo intentamos parsear si el contenido no está vacío
      const session = JSON.parse(text);
      console.log(session);
      if (session.url) {
        window.location = session.url;
      } else {
        console.error("No URL returned in session");
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-center font-bold text-3xl text-primary mb-8">
          Latest generation of books
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, showMore).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col transition-transform duration-200 hover:scale-105"
            >
              <h2 className="text-lg font-semibold mb-2 text-center text-black">
                {product.name}
              </h2>

              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md object-cover"
                />
              </div>

              <p className="mb-4 font-bold text-lg text-center text-black">
                Price: ${product.price.toFixed(2)}
              </p>

              <div className="mt-auto">
                <Button
                  className="w-full mb-2"
                  onClick={() => handleClick(product as any)}
                >
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>

        {showMore < products.length && (
          <div className="text-center mt-8">
            <Button onClick={handleShowMore}>Show More</Button>
          </div>
        )}
      </div>

      
    </>
  );
};
