"use client";
import Image from "next/image";
import Logo from "../../../public/website/logo.png";
import { DropdownLinks, Menu } from "./Navbar.data";
import { FaCaretDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { DarkMode } from "./DarkMode";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-white dark:bg-black dark:text-white p-4 sm:mx:0">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <Image src={Logo} alt="Logo" width={40} height={40} />
              Books
            </a>
          </div>
          <div className="flex  justify-between items-center gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((item, index) => (
                <li key={index} className="inline-block">
                  <a
                    href={item.link}
                    className=" hover:text-primary font-semibold dark:hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer ">
                <a href="/" className="flex h-[72px] items-center gap-2 hover:text-primary dark:hover:text-primary font-semibold">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-3">
                    {DropdownLinks.map((item, index) => (
                      <li key={index}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <Button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-blue-400 rounded-md group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-full opacity-100 object-stretch"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-cover w-full h-full"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
              <span className="relative text-base font-semibold flex items-center text-center -ml-3 justify-center">
              Order
                <FaCartShopping className="text-xl absolute -right-7" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
