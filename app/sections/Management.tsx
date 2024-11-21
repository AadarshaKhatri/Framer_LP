import Image from "next/image"
export function Management(){
  const TextGradient = {
    backgroundImage: "linear-gradient(to bottom, #000000, #001354)", 
    WebkitBackgroundClip: "text", 
    color: "transparent", 
  }

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto">
      <div className="flex flex-col justify-between items-center">
          <div className="text-black text-sm px-3 py-2 border-2 border-gray-300 w-42 inline-flex rounded-lg ">Everything you need</div>
          <h2 className="text-3xl py-2 text-center font-bold tracking-tighter mt-6 md:text-5xl lg:text-7xl " style={TextGradient}>Streamlined for easy management</h2>
          <p className=" text-xl py-2 text-center text-[#010D3E] mt-6">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly</p>

          <div className="flex flex-col lg:flex-row justify-between items-center mt-5 space-y-5 lg:space-x-10">
            <div className="h-[420px] w-[350px] border-2 border-gray-100 shadow-md rounded-md bg-white">
                <div className="flex flex-col px-7 justify-between items-center">
                <Image 
                  src = "/assets/ManagmentSectionCube.png"
                  alt = "Image"
                  width = {300}
                  height = {300}
                  quality={100}
                   className="pb-3"
                  />

                  <h2 className="text-center w-60 py-1 text-black text-lg font-bold pb-1">Integration Ecosystem</h2>
                  <p className="text-center w-80 text-gray-900 text-sm ">Enhance you productivity by connecting with your favorite tools, keeping it all your essentials in one place</p>

                </div>
              </div>
              <div className="h-[420px] w-[350px] border-2 border-gray-100 shadow-md rounded-md bg-white">
                <div className="flex flex-col px-7 justify-between items-center">
              <Image 
                src = "/assets/ManagementSectionCuboid.png"
                alt = "Image"
                width = {300}
                height = {300}
                quality={100} 
                className="pb-2"
                />

                <h2 className="text-center py-1 w-60 text-black text-lg font-bold pb-1">Goal Setting and tracking</h2>
                <p className="text-center w-80 text-gray-900 text-sm ">Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>

              </div>

            </div>

          </div>
      </div>

      </div>
    </section>
  )
}