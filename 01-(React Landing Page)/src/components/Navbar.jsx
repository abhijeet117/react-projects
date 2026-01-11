import Navbtn from "./Navbtn";
import logo from "../assets/Navbar-logo-img.png";

const Navbar = () => {
  return (
    <div className=" flex flex-col items-center w-full h-20">
      <div className="h-20  w-[90%] flex justify-between items-center">
        <div className="flex gap-10">
          <Navbtn name={"Services"} />
          <Navbtn name={"Work"} />
          <Navbtn name={"About"} />
        </div>
        <div className=" flex items-center gap-2 ">
          <img className=" h-8 w-8 bg-cover" src={logo}/>
          <h3 className="font-bold text-xl">Astratto</h3>
        </div>
        <div className="flex gap-10">
          <Navbtn name={"Careers"} />
          <div className="flex gap-1 w-fit h-fit px-2 border border-amber-400 rounded-full items-center justify-center">
            <a className="font-semibold text-lg opacity-75" href="#">
              Contact Us
            </a>
            <i className="ri-arrow-right-up-line text-pink-300"></i>
          </div>
        </div>
      </div>

      <div className="bg-[#A2A2A2] h-0.5 w-[90%] opacity-20">
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
