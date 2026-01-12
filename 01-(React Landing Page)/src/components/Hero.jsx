import Hero1 from "../assets/hero1-img.png";
import Hero2 from "../assets/hero2-img.png";
import Herotext from "../assets/hero-text-logo.png";

import Rope1 from "../assets/left-rope.svg";
import Rope2 from "../assets/right-rope.svg";
import Sparkle from "../assets/btn-rgt.svg";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* ===== TOP BAR ===== */}
      <div className="relative flex justify-between items-start w-[90%] pt-10">
        <div className=" w-110">
          <img className="w-full" src={Hero1} alt="" />
          <img className="-mt-20 mx-20" src={Rope1} />
        </div>

        <p className="mt-16 text-lg font-medium opacity-70">
          Igniting the Spark of Inspiration
        </p>

        <div className="flex flex-col gap-2 mt-12">
          <span className="bg-[#8802FE] text-white px-3 py-1 rounded-full text-sm">
            Via della Creatività, 23
          </span>
          <span className="bg-[#8802FE] text-white px-3 py-1 rounded-full text-sm w-fit">
            20121 Milano
          </span>
        </div>
      </div>

      {/* ===== CENTER TEXT ===== */}
      <div className=" absolute top-[28%] left-[33%] text-center z-10">
        <h1 className="text-7xl font-medium leading-tight tracking-wider">
          Unleash Your <br />
          Brand
          <img
            src={Herotext}
            className="inline w-30 mx-2 align-middle"
            alt=""
          />
          with Our <br />
          <span className="inline-block mt-4  bg-[#FBF990] px-4 py-1 rounded-2xl -rotate-5">
            <span className="block rotate-3 text-[#8802FE] font-semibold">
              Mágico
            </span>
          </span>{" "}
          Design
        </h1>
      </div>

      {/* ===== RIGHT IMAGE ===== */}

      <div className="">
        <img
          src={Hero2}
          className="absolute right-8 top-[40%] w-[25%]"
          alt=""
        />
      </div>

      <div className="flex -rotate-6">

        <div className="flex gap-2">
          <div className="border-2 h-fit px-4 py-2 rounded-full border-[#F07133]">
            <button className="font-medium text-lg">Create Magic</button>
          </div>
          

          <div className="h-14 w-14] relative">
            <img className="h-full w-full " src={Sparkle} />
            <h1 className="text-4xl absolute top-8 -right-2">👆</h1>
          </div>
        </div>

        <img src={Rope2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
