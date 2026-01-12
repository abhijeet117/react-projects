import FirstCard from "../assets/First-card.jpg";

const ServicesCard = ({title}) => {
  return (
    <div className="h-[480px] w-[400px] border-3 border-[#8C00FF] rounded-[2rem] overflow-hidden p-5">
      {/* Card Upper section */}
      <div className=" flex justify-between ">
        <h1 className="font-medium text-5xl">
          Motion <br /> Graphics
        </h1>
        <div className=" h-25 w-25 rounded-full bg-[#8C00FF] flex items-center justify-center">
          <i className="ri-arrow-right-up-line text-7xl text-white"></i>
        </div>
      </div>
      <div className="h-0.5 w-full bg-[#8C00FF] mt-5 opacity-60"></div>

        {/* Center Section */}
      <div className=" mt-5 ">
        <p className="font-medium opacity-60 text-[18px]"> Bring your ideas to life through dynamic
           visuals and engaging animations
        </p>
      </div>

      <div className="rounded-[2rem] overflow-hidden mt-8 border-2 border-[#8C00FF]">
        <img src={FirstCard} alt="" />
      </div>

    </div>
  );
};

export default ServicesCard;
