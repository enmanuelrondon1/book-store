"use client";

import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Banner } from "./components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppStore } from "./components/AppStore";
import { Books } from "./components/Books";
import { Testimonial } from "./components/Testimonial";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { Products } from "./components/Products";
import { MeteorDemo } from "./Shared/MeteorDemo";

export default function Page() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white  duration-200 ">
      <Navbar />
      <MeteorDemo />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Books />
      <Products />
      <Testimonial />
      <Footer />

      <ChatWidget />
    </div>
  );
}
