import ProjectCard from "./ProjectCard";

import Rimg1 from "../assets/Rimg1.jpg";
import Rimg2 from "../assets/Rimg2.jpg";
import Rimg3 from "../assets/Rimg3.jpg";
import Rimg4 from "../assets/Rimg4.jpg";


const RecentProject = () => {
  return (
    <div className=" p-12">
      {/* Heading */}
      <div className="flex justify-between items-start px-10 mb-14">
        <h1 className="text-4xl font-medium">Recent Projects</h1>

        <p className="text-[#7c7676] text-lg">
          Step into the world of our most recent projects, a showcase <br /> of our
          unwavering commitment to progressive design
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-24 ml-20" >
        <ProjectCard 
        img={Rimg1}
        btnN={'2D Animation'}
        tittle={'The Lighthouse'}
        p={'Adding a new dimension to projects through thoughtfully crafted 2D animations that guide users with clarity and visual harmony.'}/>

        <ProjectCard 
        img={Rimg2}
        btnN={'Visual Identity'}
        tittle={'Snowscape Haven'}
        p={'Crafting a calm and immersive visual identity that reflects the serenity and charm of a peaceful winter retreat.'}
        className="mt-24" />
        
        <ProjectCard
        img={Rimg3}
        btnN={'Motion graphics'}
        tittle={'Navigating Possibilities'}
        p={'Motion graphics that bring ideas to life by blending direction, storytelling, and creative energy into every frame.'}
        className="-mt-20" />

        <ProjectCard
        img={Rimg4}
        btnN={'3D animation'}
        tittle={'Nocturnal Symphony'}
        p={'An artistic 3D animation inspired by the night, where light, shadow, and imagination dance together in harmony.'}
        />
      </div>
    </div>
  );
};

export default RecentProject;
