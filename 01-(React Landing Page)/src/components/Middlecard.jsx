import SecondC from "../assets/Second-card.jpg"



const Middlecard = () => {
  return (
    <div className="h-[480px] w-[400px] rounded-[2rem] overflow-hidden p-6 
      bg-gradient-to-br from-[#8C00FF] to-[#B14CFF] text-white relative ">

      {/* Top Section */}
      <h1 className="text-3xl font-medium leading-tight">
        2D/3D <br /> Animation
      </h1>

      <div className="h-[1px] w-full bg-white/40 mt-4"></div>

      {/* Description */}
      <p className="text-sm mt-4 opacity-80 leading-relaxed">
        Turn imagination into reality with our stunning 2D/3D animations.
      </p>

      {/* Image Section */}
      <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] overflow-hidden">
        <img
          src={SecondC}
          alt="animation"
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* Arrow Button */}
      <div className="absolute bottom-10 left-10 h-14 w-14 rounded-full 
        border-2 border-white flex items-center justify-center bg-white">
        <i className="ri-arrow-right-up-line text-3xl text-[#8C00FF]"></i>
      </div>
    </div>
  );
}

export default Middlecard
