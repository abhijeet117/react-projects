import ServicesCard from "./ServicesCard";
import Middlecard from "./Middlecard"
import S1svg from "../assets/Servi-W1.png";
import S2svg from "../assets/Servi-3.png";
import ropesvg from "../assets/Services-rope.svg";

import FirstC from "../assets/First-card.jpg"

import ThirdC from "../assets/Third-card.jpg"

import logo from "../assets/Navbar-logo-img.png";

const Services = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="border-2 border-[#A2A2A2] h-full w-[95%] rounded-2xl mb-5">
        {/* Upper Services Section */}
        <div className=" mt-5 p-5 flex justify-between ">
          <h1 className="text-3xl font-normal">Our Services</h1>

          <p className="text-[#7c7676] text-lg">
            Discover a wide range of opportunities through <br />a comprehensive
            range of qualified services
          </p>
        </div>

        {/* Card Services Section */}
        <div className="Wrapper">
          <div className="w-full h-full p-4 flex justify-between">
            <ServicesCard 
             img={FirstC}
             tittle={'Motion Graphics'}
             dec={'Bring your ideas to life through dynamic visuals and engaging animations'} 
            />

            <Middlecard />

            <ServicesCard 
             img={ThirdC}
             tittle={'Motion Graphics'}
             dec={'Bring your ideas to life through dynamic visuals and engaging animations'} 
            /> 

          </div>

          <div className="px-5 flex justify-between">
            <div className="flex gap-2">
              <i className="ri-arrow-left-long-line text-4xl opacity-60"></i>
              <i className="ri-arrow-right-long-line text-4xl"></i>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-[2px] w-10 bg-gray-800"></span>
              <span className="h-[2px] w-6 bg-gray-300"></span>
              <span className="h-[2px] w-6 bg-gray-300"></span>
              <span className="h-[2px] w-6 bg-gray-300"></span>
              <span className="h-[2px] w-6 bg-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="flex flex-col items-center text-center gap-6 mt-15">
          <p className="text-gray-400 tracking-widest text-sm">
            — ABOUT ASTRATTO
          </p>

          <h1 className="text-5xl font-medium leading-tight max-w-5xl">
            <img
              src={S1svg}
              alt=""
              className="inline h-20 w-20 mr-2 align-middle object-cover"
            />
            Our <span className="text-gray-400">visionary</span>{" "}
            <span className="text-orange-500">artisans</span> collaborate
            <br />
            <span className="text-purple-500">seamlessly</span> to craft
            <img
              src={logo}
              alt=""
              className="inline h-15 w-15 mx-2 align-middle"
            />
            inspiring <span className="text-gray-400">experiences,</span>
            <br />
            <span className="text-orange-400">leaving</span> lasting{" "}
            <span className="text-gray-400">imprints</span> on{" "}
            <span className="text-purple-500">brands</span>
            <br />
            and spaces.
            <img
              src={S2svg}
              alt=""
              className="inline h-15 w-15 mx-2 ml-6 align-middle"
            />
          </h1>
        </div>

        {/* Bottom Rope */}
        <div className="mb-15">
          <img className="-mt-12 rotate-6 ml-15 " src={ropesvg} />
        </div>
      </div>
    </div>
  );
};

export default Services;
