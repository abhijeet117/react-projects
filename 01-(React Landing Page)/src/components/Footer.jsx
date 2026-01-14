import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";

const Footer = () => {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className="w-[95%] border border-gray-300 rounded-2xl py-12 flex flex-col items-center gap-6">
        <p className="text-pink-500 text-lg">
          Open the door to forging your brand’s story
        </p>

        <h1 className="text-5xl text-center leading-tight">
          <img src={F1} className="inline mr-2" />
          Embark on a Transformative Journey <br />
          Shaping{" "}
          <span className="bg-yellow-300 px-2 rounded">
            Your Brand's Destiny
          </span>{" "}
          Through Our <br />
          Dedicated Partnership
          <img src={F2} className="inline h-25 w-25 ml-2" />
        </h1>

        <p className="text-center text-gray-600 text-lg">
          Join us on a transformative journey to shape your brand’s destiny{" "}
          <br />
          through dedicated partnership, crafting a narrative that resonates
        </p>

        <div className="w-full mt-10 pt-6 border-t border-gray-300 flex items-center justify-between px-10 text-sm text-gray-500">
          <p>Via della Creatività, 23, 20121 Milano</p>

          <div className="flex gap-6 text-lg">
            <i className="ri-twitter-x-line cursor-pointer"></i>
            <i className="ri-linkedin-fill cursor-pointer"></i>
            <i className="ri-instagram-line cursor-pointer"></i>
          </div>

          <div className="flex gap-6">
            <p className="cursor-pointer">Privacy & Cookie Policy</p>
            <p>Astratto © 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
