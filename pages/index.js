import Head from "next/head";
import { ChevronDownIcon } from "@heroicons/react/solid";
import AOS  from "aos";
import { useEffect } from "react";
// import banner from '../public/ff.webm'
// import banner from '../public/banner1.svg'

export default function Home() {


  useEffect(() => {
    AOS.init({// Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',});
  },[]);
  return (
    <div className="overflow-clip">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className='w-10 h-[10px]'> */}
      {/* <iframe className='w-full h-10' src="https://giphy.com/embed/l0HlVXQ41386JrK6s" ></iframe> */}
      {/* <img className='w-full h-10' src='../public/ff.webm'  ></img> */}

      <div className="sticky z-10 top-0 shadow-xl flex items-center bg-white justify-around p-2  w-screen">
        <img
          src="http://aumnix.com:7993/assets/images/logo.png"
          className="w-[200px]"
        />
        <div className="flex space-x-10 ">
          <span className="mt-2 hover:cursor-pointer text-blue-900 font-bold text-xl ">
            Solution
          </span>
          <span className="mt-2  hover:cursor-pointer text-blue-900 font-bold text-xl ">
            products
          </span>
          <span className="ring-1 hover:cursor-pointer font-bold text-white text-lg ring-blue-900 bg-blue-900 pt-2 pb-2 pl-8 pr-8 rounded-3xl">
            Contact US
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
        <img
          src="/banner1.svg"
          className=" object-cover h-[600px] w-screen  "
        />
        <div data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" className="absolute  flex flex-col w-[700px] space-y-2 mt-28 -ml-72">
          <p className="font-bold text-6xl text-blue-800 ">
            Artificial Intillegence at
          </p>
          <p className="font-bold text-6xl text-blue-800 ">human doorsteps</p>
          <p className="">
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
        <div className="w-screen">
          <div className=" mt-8 bg-blue-200/20 w-[100%-260px] mr-40 rounded-tr-full rounded-bl-full ">
            <div className="flex pt-2 mx-auto space-y-4 w-[1100px] flex-col">
              <p className="text-4xl font-bold">What is AUMNIX?</p>
              <p className="text-lg">
                AUMNIX enables organizations of all sizes to unlock the value
                hidden in their growing amount of data. Our end-to-end platform
                empowers any individual user or organization to leverage
                cutting-edge AI solutions to transform from any current state to
                the desired state
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 w-screen  items-center">
          <p className="text-4xl  font-bold text-center">AUMNIX AI Solutions</p>
          <p className="mx-auto mt-2 text-center">
            Our platform covers diverse industry use cases and can be leveraged
            for a host of
          </p>
          <p className="mx-auto text-center">
            applications across different verticals
          </p>
        </div>
        <div className="grid gap-8 grid-cols-3">
          <div>
            <div data-aos="fade-right"
     className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-500 transition ease-in delay-150  shadow-2xl  px-[30px]">
              <img
                className="mx-auto"
                src="http://aumnix.com:7993/assets/images/data-engineering.png"
              />
              <p className="text-center text-3xl">Data Science</p>
            </div>
          </div>
          <div>
            <div data-aos='fade-up' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
              <img
                className="mx-auto"
                src="http://aumnix.com:7993/assets/images/ai-machine.png"
              />
              <p className="text-center text-3xl">MLOps</p>
            </div>
          </div>

          <div data-aos='fade-left' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
            <img
              className="mx-auto"
              src="http://aumnix.com:7993/assets/images/automation.png"
            />
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
          <div data-aos='fade-right' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
            <img
              className="mx-auto"
              src="http://aumnix.com:7993/assets/images/bi-implementation.png"
            />
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
          <div data-aos='fade-up' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
            <img
              className="mx-auto"
              src="http://aumnix.com:7993/assets/images/security.png"
            />
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
          <div data-aos='fade-left' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
            <img
              className="mx-auto"
              src="http://aumnix.com:7993/assets/images/smart-city.png"
            />
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
          <div data-aos='fade-right' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
            <img
              className="mx-auto"
              src="http://aumnix.com:7993/assets/images/consultancy.png"
            />
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
          <div data-aos='fade-up' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
            <img
              className="mx-auto"
              src="http://aumnix.com:7993/assets/images/consultancy.png"
            />
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
          <div data-aos='fade-left' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
            <img
              className="mx-auto"
              src="http://aumnix.com:7993/assets/images/consultancy.png"
            />
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
          <div data-aos='fade-right' className="py-[60px] w-[360px] h-[246px] shadow-slate-300 hover:shadow-slate-400 transition ease-in-out delay-200 shadow-2xl  px-[30px]">
            <img
              className="mx-auto"
              src="http://aumnix.com:7993/assets/images/consultancy.png"
            />
            <p className="text-center text-3xl">AI-as-a-Service</p>
          </div>
        </div>
        <div>
          <div className="w-screen bg-sky-900">
            <div className="mt-12 flex flex-col mx-[20%] space-y-4 pb-36">
              <p className="text-4xl text-white mt-10 ">Our Products</p>
              <p className="text-white">
                Our platform covers diverse industry use cases and can be
                leveraged for a host of applications across different verticals.
              </p>
              <div className="grid gap-8 grid-cols-3 ">
              {/* data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" */}
              
                <div data-aos="fade-up"
     className="p-4 rounded-xl bg-white w-[360px]      "  >
                  <img
                    className="mx-auto  rounded-xl"
                    src="http://aumnix.com:7993/assets/images/pro-img-1.jpg"
                  />
                  <div className="flex mt-2">
                    <div className="flex space-y-3 flex-col">


                  <p className=" text-2xl">WhiteEye</p>
                  <p>State-of-Art anomaly detector to secure system failure threat.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen mb-24 mt-10">
          <form data-aos='fade-up' className="mx-[20%] space-y-6">
            <p className="text-4xl mb-4">Contact us</p>
            <div className="flex space-x-6">
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
                className="ring-1 focus:outline-none flex-grow max-w-[40%] px-4 py-2 ring-gray-400 rounded-lg"
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
        <footer className="w-screen ">
          <div className="mx-[16%] flex justify-around space-x-8">


        <img
          src="http://aumnix.com:7993/assets/images/logo.png"
          className="w-[250px] max-h-min object-contain"
          />
          <div className="flex space-y-1 flex-col">
          <p className="text-3xl font-bold mb-2">Solution</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold">Data Science</p> 
          
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >MLOps</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >AI-as-a-Service</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >SmartCity</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >Telecommunication</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >Logistics</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >Healthcare</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >Public Sector</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >Manufacturing</p>
          <p className="text-gray-500 hover:text-sky-900 hover:font-semibold" >Agriculture</p>
          </div>
          <div className="flex space-y-1 flex-col">
<p className="text-3xl font-bold mb-2">Products</p>
<p className="text-gray-500 hover:text-sky-900 hover:font-semibold">WhiteEye</p>
<p className="text-gray-500 hover:text-sky-900 hover:font-semibold">AEKA</p>
<p className="text-gray-500 hover:text-sky-900 hover:font-semibold">Drishti</p>
<p className="text-gray-500 hover:text-sky-900 hover:font-semibold">AIS Gateway</p>
<p className="text-gray-500 hover:text-sky-900 hover:font-semibold">AIS</p>
          </div>
          </div>
          </footer>
        
      </div>
    </div>
  );
}
