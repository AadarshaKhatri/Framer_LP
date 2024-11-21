import Image from "next/image"
import { CiLock } from "react-icons/ci"
import { FaArrowRight, FaLeaf } from "react-icons/fa"
import { GoGoal } from "react-icons/go"
import { IoNotifications } from "react-icons/io5"

export function Product(){

  const ProductInformation = [
    {
      icon : <FaLeaf size = {24} className="text-black"/>,
      Title : "Integration Ecosystem",
      description:"Track your progress and motivate your efforts everyday.",

    },
    {
      icon:<GoGoal size = {24} className="text-black"/>,
      Title : "Goal Setting and tracking",
      description : "Set and track goals with manageable task breakdowns"
    },{
      icon : <CiLock size  = {24} className="text-black"/>,
      Title : "Secure data encryption",
      description : "Ensure your data's saftey with top-tier encryption",
    },{
      icon: <IoNotifications size = {24} className="text-black"/>,
      Title : "Customizable notifications",
      description: "Get alerts on tasks and deadlines that matter most."
    }
  ]
  const TextGradient = {
    backgroundImage: "linear-gradient(to bottom, #000000, #001354)", 
    WebkitBackgroundClip: "text", 
    color: "transparent", 
  }
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 overflow-x-hidden">
      <div className="container px-6 md:px-0  mx-auto mt-5 ">
          <div className="flex flex-col justify-between items-center">
                <div className="text-black text-sm px-3 py-2 border-2 border-gray-300 w-42 inline-flex rounded-lg ">Boost your Productivity</div>
                <h2 className="text-3xl h-auto py-2 text-center font-bold tracking-tighter mt-6 md:text-5xl lg:text-7xl " style={TextGradient}>A more effective way to track your progress</h2>
                <p className=" text-xl text-center pb-5 text-[#010D3E] mt-6">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
                <div className="relative ">
                  <Image
                  src = "/assets/ProductImage.png"
                  alt = "Product Image"
                  width = {2000}
                  height={2000}
                  quality={100}
                   className="object-cover w-full h-auto "
                  priority
             

                  />
                  <Image 
                  src = "/assets/ScreenSectionDonut.png"
                  alt = "Product Image 2"
                  width = {300}
                  height ={300}
                  quality={100}
                  className="absolute z-40 hidden md:flex md:max-w-[200px] md:max-h-[300px] md:-ml-36 md:top-20 lg:max-w-[300px] lg:max-h-[420px] lg:-ml-60 lg:top-40"
                  />

                <Image 
                  src = "/assets/ScreenSectionPyramid.png"
                  alt = "Product Image 2"
                  width = {300}
                  height ={300}
                  quality={100}
                  className="overflow-x-hidden absolute hidden md:block md:max-w-[180px] md:max-h-[280px] md:-top-10 md:ml-[600px]  lg:max-w-[400px] lg:max-h-[520px] lg:top-0 lg:ml-[920px]"
                  />
                  
               
                </div>

             

              <div id="Information" className=" mt-10">
                <div className="grid grid-cols-1 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {
                    ProductInformation.map((currentElement, index) => (
                      <div key={index} >
                        <div className="mb-4">{currentElement.icon}</div>
                        <h3 className="text-md font-bold text-black min-w-60">{currentElement.Title}</h3>
                        <p className="text-sm font-light text-gray-800 mt-2 min-w-60">{currentElement.description}</p>
                        <p className="flex items-center gap-2 text-sm text-gray-800 mt-4 hover:underline cursor-pointer">
                          Learn More <FaArrowRight size={16} className="text-gray-800"/>
                        </p>
                      </div>
                    ))
                  }
                </div>
              </div>

              </div>

      </div>
    </section>
  )
}