import FirstCard from "../assets/First-card.jpg";

const ProjectCard = ({ className = "", img, btnN, tittle, p }) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Image */}
      <div
        className="h-[520px] w-[520px] bg-cover bg-center rounded-[32px] relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Arrow */}
        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center absolute right-4 top-4">
          <i className="ri-arrow-right-up-line text-4xl"></i>
        </div>

        {/* Tag */}
        <div className="absolute bottom-4 left-4 bg-white px-4 py-1 rounded-full">
          <h2 className="text-sm font-medium">{btnN}</h2>
        </div>
      </div>

      {/* Text */}
      <div className="mt-4 ">
        <h1 className="text-[#8A3A94] text-3xl font-medium">
          {tittle}
        </h1>
        <p className="text-lg opacity-70 leading-relaxed  w-[520px] mt-2 ">
          {p}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;


