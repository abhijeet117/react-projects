import ServicesCard from "./ServicesCard"

const Services = () => {
  return (
    <div className="w-[100%] h-screen flex items-center justify-center">
        <div className="border-2 border-[#A2A2A2] h-full w-[95%] rounded-2xl">
            {/* Upper Services Section */}
            <div className=" mt-5 p-5 flex justify-between ">
                <h1 className="text-3xl font-normal">Our Services</h1>

                <p className="text-[#7c7676] text-lg">Discover a wide range of opportunities through <br />
                a comprehensive range of qualified services
                </p>
            </div>

            {/* Card Services Section */}
            <div className="w-full h-full p-4 flex justify-between">
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>


        </div>
    </div>
  )
}

export default Services;