import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";


export function Hero () {
  const TextGradient = {
    backgroundImage: "linear-gradient(to bottom, #000000, #001354)", 
    WebkitBackgroundClip: "text", 
    color: "transparent", 
  };
  
  return (
    <section className="pt-6 pb-20 md:pt-4 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_66%)] " >
      <div className="container mx-auto px-6 md:px-0">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          {/* Text Content */}

          <div className="flex flex-col lg:-mx-20 md:w-[500px] lg:w-[1200px] ">
            <div className="text-black text-sm px-3 py-2 border-2 border-gray-300 w-40 inline-flex rounded-lg ">Version 2.0 is here</div>
            <h2 className="text-5xl font-bold tracking-tighter mt-6 md:text-5xl lg:text-7xl " style={TextGradient}>Pathway to productivity</h2>
            <p className=" text-xl text-[#010D3E] mt-6">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
            <div className="flex-row flex gap-x-4 items-center mt-[32px]">
              <button className="bg-black py-3 px-3 text-white rounded-lg">Get for Free</button>
              
              <button className="text-black flex flex-row items-center gap-2"><span>Learn More</span><FaArrowRight/></button>
            </div>
          </div>

          <div className="mt-12 md:mt-0  relative ">
            {/* Main Image */}
            <Image
              src="/assets/LandingPageVisual.png"
              alt="Landing Image"
              layout="responsive"
              width={500}
              height={300} 
              quality={100}
              priority
              className="flex lg:ml-40"
              
            />

            {/* Cylinder Image */}
            <Image
              src="/assets/LandingpageCylinder.png"
              alt="Cylinder"
              width={170}
              height={170}
              quality={100}
              className="hidden md:block absolute md:right-[300px] md:top-[-10px] lg:right-[360px] lg:top-[-10px] "
            />

<Image
              src="/assets/LandingPageU.png"
              alt="Cylinder"
              width={270}
              height={270}
              quality={100}
              className=" overflow-x-hidden z-50 hidden lg:block absolute lg:right-[-160px] lg:top-[400px] "
            />
          </div>


        </div>
        


      </div>


    </section>
  )
}