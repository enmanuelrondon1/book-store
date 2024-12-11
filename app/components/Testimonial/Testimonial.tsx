import Slider from "react-slick";
import { TestimonialData } from "./Testimonial.data";
import Image from "next/image";

export const Testimonial = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto ">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold ">Testimonial</h1>
            <p>
              Don't forget following us on social media, and share your
              experience with us.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 mx-auto gap-6  "
          >
            <Slider {...settings}>
              {TestimonialData.map((item) => {
                return (
                  <div key={item.id} className="my-6">
                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative  ">
                      <div>
                        <Image
                          src={item.img}
                          alt="Book"
                          width={100}
                          height={100}
                          className="rounded-full w-20 h-20"
                        />
                      </div>
                      <div className="flex items-center gap-4 ">
                        <div>
                          <p className="text-gray-500 text-sm">{item.text}</p>
                          <h1 className="text-xl font-bold text-black/80 ">
                            {item.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>


    
    </>
  );
};
