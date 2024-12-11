"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import Pago from '../../../public/website/mi-pago-movi;.jpeg'
import Image from "next/image";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="fixed  bottom-4 right-4 z-50 text-black">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 transition-all duration-300 ease-in-out">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Si quieres hacer una donación a nuestro proyecto por aqui lo puedes hacer</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            {/* <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea id="message" name="message" required className="mt-1" />
            </div> */}
            <div className="items-center justify-center flex">
              <Image src={Pago} alt="Pago" width={200} height={200} />
             </div>
            <Button type="submit" className="w-full">
              Donar ahora
            </Button>
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          aria-label="Open chat"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      )}
    </div>
  );
};
