import Head from "next/head";
import { ChevronDownIcon } from "@heroicons/react/solid";
import AOS from "aos";
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { useEffect, useRef } from "react";
import Image from "next/image";
import banner from "../public/banner1.jpeg";
import logo from "../public/logo.png";
import dataEngineering from "../public/data-engineering.png";
import aiMachine from "../public/ai-machine.png";
import automation from "../public/automation.png";
import biImplementation from "../public/bi-implementation.png";
import security from "../public/security.png";
import smartCity from "../public/smart-city.png";
import consultancy from "../public/consultancy.png";
// import banner from '../public/ff.webm'
// import banner from '../public/banner1.svg'

export default function Home() {
  const solutionRef = useRef();
  const productRef = useRef();
  const contactRef = useRef();

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
    <div className="overflow-clip">
      <Head>
        <title>Aumnix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className='w-10 h-[10px]'> */}
      {/* <iframe className='w-full h-10' src="https://giphy.com/embed/l0HlVXQ41386JrK6s" ></iframe> */}
      {/* <img className='w-full h-10' src='../public/ff.webm'  ></img> */}

      <div className="sticky z-10 top-0 shadow-xl flex items-center bg-white justify-around p-2  w-screen">
        <div className="!w-[200px]">
          <Image src={logo} className="w-[200px]" layout="responsive" />
        </div>
        <div className="flex space-x-10 ">
          <span
            onClick={() => {
              solutionRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-2 hidden md:block hover:cursor-pointer text-[rgb(16,54,84)] font-bold text-xl "
          >
            Solution
          </span>
          <span
            onClick={() => {
              productRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-2 hidden md:block hover:cursor-pointer text-[rgb(16,54,84)] font-bold text-xl "
          >
            products
          </span>
          <span
            onClick={() => {
              contactRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="ring-1 hover:cursor-pointer text-base font-bold text-white md:text-lg  ring-[rgb(16,54,84)] bg-[rgb(16,54,84)] md:pt-2 pt-1 md:pb-2 pb-1 md:pl-8 pl-6 md:pr-8 pr-6 rounded-3xl"
          >
            Contact Us
          </span>
        </div>
      </div>
      <div className="  flex flex-col items-center  bg-white ">
        {/* <img className=' ' src='http://aumnix.com:7993/assets/images/banner.jpg' />
        <div className=' absolute  block  '>
        
          <video className='h-[500px] ml-auto  w-full block ' playsInline data-object-fit="fill" autoPlay loop muted data-wf-ignore="true">
          <source src='https://assets-global.website-files.com/5e067beb4c88a64e31622d4b/60afbbfd99567275226e2da5_60350557b9c34ba2fc2ee024_Hero-video-transcode-transcode.mp4' type="video/mp4" data-wf-ignore="true" />
          </video>
        </div> */}
        <div className=" !object-cover mr-[800px] sm:mr-0 mt-36 sm:mt-0  sm:h-[700px]  w-[1900px]  ">
          <Image
            loading="eager"
            layout="responsive"
            priority={true}
            src={banner}
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="absolute mt-10 flex flex-col 2xl:max-w-[700px]  sm:max-w-[450px] md:max-w-[600px]  sm:space-y-2 sm:mt-28 sm:-ml-72"
        >
          <p className="font-bold mx-[20px] text-3xl sm:text-6xl text-[rgb(16,54,84)] ">
            Artificial Intillegence at
          </p>
          <p className="font-bold mx-[20px] text-3xl sm:text-6xl text-[rgb(16,54,84)] ">
            human doorsteps
          </p>
          <p className="mx-[20px] mt-4 text-lg">
            Aumnix is a cluster of deep tech products transforming human
            experiences and industry outcomes by building AI algorithms on
            video, voice, and sensor data, for edge devices by providing a
            decentralized AI-as-a-Service.
          </p>
        </div>
        {/* <picture className=' h-[500px] ml-auto w-full' >
            <source src='/banner1.svg' className='w-[200px]' />
          </picture> */}

        {/* </div> */}
        <div data-aos="fade-up" className="w-screen">
          <div className=" mt-8 sm:bg-blue-200/20 w-[100%-260px] sm:mr-40 sm:rounded-tr-full  sm:rounded-bl-full ">
            <div className="flex pt-2 !mx-auto w-screen  space-y-4 md:w-[1100px] flex-col">
              <p className="text-4xl  text-[rgb(16,54,84)] mx-[20px] md:mx-[50px] font-bold">
                What is AUMNIX?
              </p>
              <p className="text-lg mx-[20px] md:mx-[50px] text-[rgb(16,54,84)] ">
                AUMNIX enables organizations of all sizes to unlock the value
                hidden in their growing amount of data. Our end-to-end platform
                empowers any individual user or organization to leverage
                cutting-edge AI solutions to transform from any current state to
                the desired state
              </p>
            </div>
          </div>
        </div>
        <div ref={solutionRef} className="mt-16 w-screen  items-center">
          <p className="text-2xl  sm:text-4xl  font-bold text-center">
            AUMNIX AI Solutions
          </p>
          <p className="  mx-[20px] md:mx-auto mt-2 text-center">
            Our platform covers diverse industry use cases and can be leveraged
            for a host of applications across different verticals
          </p>
          <p className="mx-auto text-center"></p>
        </div>
        <div className="grid max-w-7xl text-[rgb(16,54,84)] font-semibold text-sm grid-cols-1 gap-6 md:gap-8 mt-4 md:grid-cols-3  mx-4">
          <div>
            <div
              data-aos="fade-right"
              className="py-[60px] space-y-4 md:max-w-[360px] h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-500 transition ease-in delay-150  shadow-2xl  px-[30px]"
            >
              <div className="mx-auto w-[90px]">
                <Image layout="responsive" src={dataEngineering} />
              </div>
              <p className="text-center text-3xl">Data Science</p>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up"
              className="py-[60px] space-y-4 md:max-w-[360px]  h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
            >
              <div className="mx-auto w-[90px]">
                <Image layout="responsive" src={aiMachine} />
              </div>
              <p className="text-center text-3xl">MLOps</p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="py-[60px] space-y-4 md:max-w-[360px] h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
          >
            <div className="mx-auto w-[90px]">
              <Image src={automation} layout="responsive" />
            </div>
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
          <div
            data-aos="fade-right"
            className="py-[60px] space-y-4 md:max-w-[360px] h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
          >
            <div className="mx-auto w-[90px]">
              <Image src={biImplementation} layout="responsive" />
            </div>
            <p className="text-center text-3xl">SmartCity</p>
          </div>
          <div
            data-aos="fade-up"
            className="py-[60px] space-y-4 md:max-w-[360px] h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
          >
            <div className="mx-auto w-[90px]">
              <Image src={security} layout="responsive" />
            </div>
            <p className="text-center text-3xl">Telecommunication</p>
          </div>
          <div
            data-aos="fade-left"
            className="py-[60px] space-y-4 md:max-w-[360px] h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
          >
            <div className="mx-auto w-[90px]">
              <Image src={smartCity} layout="responsive" />
            </div>
            <p className="text-center text-3xl">Logistics</p>
          </div>
          <div
            data-aos="fade-right"
            className="py-[60px] space-y-4 md:max-w-[360px] h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
          >
            <div className="mx-auto w-[90px]">
              <Image src={consultancy} layout="responsive" />
            </div>
            <p className="text-center text-3xl">Healthcare</p>
          </div>
          <div
            data-aos="fade-up"
            className="py-[60px] space-y-4 md:max-w-[360px] h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
          >
            <div className="mx-auto w-[90px]">
              <Image layout="responsive" src={consultancy} />
            </div>
            <p className="text-center text-3xl">Public Sector</p>
          </div>
          <div
            data-aos="fade-left"
            className="py-[60px] space-y-4 md:max-w-[360px]  h-[246px] shadow-slate-600 md:shadow-slate-300 sm:hover:shadow-slate-500 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
          >
            <div className="mx-auto w-[90px]">
              <Image layout="responsive" src={consultancy} />
            </div>
            <p className="text-center text-3xl">Manufacturing</p>
          </div>
          <div
            data-aos="fade-right"
            className="py-[60px] space-y-4  md:max-w-[360px]  h-[246px] shadow-slate-600 md:shadow-slate-300 md:hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]"
          >
            <div className="mx-auto w-[90px]">
              <Image layout="responsive" src={consultancy} />
            </div>
            <p className="text-center text-3xl">Agriculture</p>
          </div>
          <div className="w-screen">
            &#8203;
          </div>
        </div>
        <div>
          <div
            ref={productRef}
            className="w-screen bg-[rgb(16,54,84)] "
          >
            <div className="mt-12 flex flex-col mx-auto  max-w-6xl space-y-4 px-2 pb-36">
              <p className="text-4xl font-bold text-white mt-10 mx-4 max-w-6xl">
                Our Products
              </p>
              <p className="text-white/60 mx-4 max-w-6xl">
                Our platform covers diverse industry use cases and can be
                leveraged for a host of applications across different verticals.
              </p>
              <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3 text-[rgb(16,54,84)] mx-4 ">
                {/* data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" */}

                <div
                  data-aos="fade-up"
                  className="p-4  rounded-xl bg-white w-[500px]      "
                >
                  <img
                    className="mx-auto w-full rounded-xl"
                    src="http://aumnix.com:7993/assets/images/pro-img-1.jpg"
                  />
                  <div className="flex mt-2">
                    <div className="flex space-y-3 ml-2 flex-col">
                      <p className=" text-[rgb(16,54,84)] font-bold text-2xl">WhiteEye</p>
                      <div className="flex">
                        <p>
                          State-of-Art anomaly detector to secure system failure
                          threat.
                        </p>
                        <span className="bg-[rgb(16,54,84)] text-white text-base font-bold my-auto p-2 text-center  w-[200px] px-2 rounded-full">
                          Get Demo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={contactRef} className="w-screen  mb-24 mt-10">
          <form data-aos="fade-up" className="mx-[20px] lg:mx-auto   max-w-6xl  space-y-6">
            <p className="text-4xl mb-4">Contact us</p>
            <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 md:space-x-6">
              <input
                className="ring-1 focus:outline-none flex-grow px-4 py-2 ring-gray-400 rounded-lg"
                placeholder="Full Name"
              />
              <input
                className="ring-1 focus:outline-none flex-grow px-4 py-2 ring-gray-400 rounded-lg"
                placeholder="E-mail"
              />
            </div>
            <div className="flex space-x-6">
              <div className="ring-1 flex hover:cursor-pointer px-4 py-2 ring-gray-400 rounded-lg">
                +91 <ChevronDownIcon className="h-5 mt-1 ml-1" />{" "}
              </div>
              <input
                className="ring-1 focus:outline-none flex-grow w-full md:max-w-[40%] px-4 py-2 ring-gray-400 rounded-lg"
                placeholder="98765 43210"
              />
            </div>
            <div className="flex">
              <textarea
                className="w-60 h-40 focus:outline-none ring-1 flex-grow px-4 py-2 ring-gray-400 rounded-lg"
                placeholder="Message"
              />
            </div>
            <div className="flex items-center">
              <button className="bg-sky-900 mx-auto text-white text-2xl rounded-full  px-10 py-2 ">
                Submit
              </button>
            </div>
          </form>
        </div>
        <footer className="w-screen mb-20 ">
          <div className="  md:mx-[16%] flex md:flex-row flex-col space-y-8 md:space-y-0 justify-around space-x-8">
            <div className="w-[250px] ml-3 mb-6 md:mb-0 max-h-min object-contain">
              <Image layout="responsive" src={logo} />
            </div>
            <div className="flex space-y-1 flex-col">
              <p className="text-3xl font-bold mb-2">Solution</p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                Data Science
              </p>

              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                MLOps
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                AI-as-a-Service
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                SmartCity
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                Telecommunication
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                Logistics
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                Healthcare
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                Public Sector
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                Manufacturing
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                Agriculture
              </p>
            </div>
            <div className="flex space-y-1 flex-col">
              <p className="text-3xl font-bold mb-2">Products</p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                WhiteEye
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                AEKA
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                Drishti
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                AIS Gateway
              </p>
              <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">
                AIS
              </p>
            </div>
            <div className="text-gray-500 space-y-6 mt-10">
              <div className="flex space-x-3">
                <PhoneIcon className="h-5 w-5" />
                <p className="hover:text-gray-900 hover:cursor-pointer">
                  <a href="tel:1204303655">1204303655</a>
                </p>
              </div>
              <div className="flex space-x-4">
                <LocationMarkerIcon className="h-5 w-5" />
                <div className="flex flex-col hover:text-gray-900 hover:cursor-pointer">
                  <a href="https://goo.gl/maps/aGPtLUNvbS86NRhB7">
                    <p>Apex Athena</p>
                    <p>Sector-75, Noida</p>
                    <p>201304</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
