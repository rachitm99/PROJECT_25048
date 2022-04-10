import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";

function Product({innerStuff,tagLine ,imageTag}) {

    useEffect(() => {
        AOS.init({
          // Global settings:
          disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
          startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
          initClassName: "aos-init", // class applied after initialization
          animatedClassName: "aos-animate", // class applied on animation
          useClassNames: false, // if true, will add content o `data-aos` as classes on scroll
          disableMutationObserver: false, // disables automatic mutations' detections (advanced)
          debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
          throttleDelay: 10, // the delay on throttle used while scrolling the page (advanced)
    
          // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
          offset: 120, // offset (in px) from the original trigger point
          delay: 0, // values from 0 to 3000, with step 50ms
          duration: 900, // values from 0 to 3000, with step 50ms
          easing: "ease", // default easing for AOS animations
          once: false, // whether animation should happen only once - while scrolling down
          mirror: false, // whether elements should animate out while scrolling past them
          anchorPlacement: "top-bottom",
        });
      }, []);
  return (
    <div
                  data-aos="fade-up"
                  className="p-4  rounded-xl bg-white      "
                >
                  <Image
                  layout="responsive"
                    className="mx-auto w-full rounded-xl"
                    src={imageTag}
                  />
                  <div className="flex mt-2">
                    <div className="flex space-y-3 ml-2 flex-col">
                      <p className=" text-[rgb(16,54,84)] font-bold text-2xl">{tagLine}</p>
                      <div className="flex">
                        <p className="min-w-[60%] ">
                          {innerStuff}
                        </p>
                        <span className="bg-[rgb(16,54,84)] text-white text-base font-bold my-auto p-2 text-center  w-[200px] px-2 rounded-full">
                          Get Demo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default Product