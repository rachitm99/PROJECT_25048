import React, { useEffect } from "react";
import banner1 from "../public/new-banner-01.jpg";
import banner2 from "../public/new-banner-02.jpg";
import banner3 from "../public/new-banner-03.jpg";
import { useState } from "react";
import Image from "next/image";

function Slider() {
  const slides = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrent(current ===  length - 1? 0 : current + 1 );
      console.log(length)
    }, 4000);

  
    return () => clearInterval(interval);
  }, [length,current]);

  return (
    <>
      {slides.map((slide, index) => {
        return (
          <div className={index != current ? "hidden" : ""} key={index}>
            {/* {console.log(index)} */}
            <div className="">

            <Image
            className="transition -translate-y-64  sm:-translate-y-48 md:-translate-y-36 xl:-translate-y-0  ease-in-out duration-1000 scale-105"
              loading="eager"
              alt="banner"
              objectFit="contain"
              layout="fill"
              priority={true}
              src={slide}
              />
              </div>
          </div>
        );
      })}
    </>
  );
}

export default Slider;
