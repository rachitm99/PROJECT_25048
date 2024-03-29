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
            <div className=" ">
            {/* <div className="top-20 lg:top-0 mt-[100px] max-w-[500px] lg:mt-0"> */}

            <Image
            className=""
            // className="transition max-h-10   -translate-y-40  sm:-translate-y-48 md:-translate-y-36 lg:-translate-y-24 xl:-translate-y-16 2xl:-translate-x-10    ease-in-out duration-1000 scale-105"
            // className="transition    sm:-translate-y-48 md:-translate-y-36 lg:-translate-y-24 xl:-translate-y-0  ease-in-out duration-1000 scale-105"
            // height="512px"  
            loading="eager"
              alt="banner"
              objectFit="contain"
              // layout="fill"
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
