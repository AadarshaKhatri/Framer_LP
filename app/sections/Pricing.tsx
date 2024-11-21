import { PricingCards } from "../componenents/PricingCards"

export function Pricing(){
  const TextGradient = {
    backgroundImage: "linear-gradient(to bottom, #000000, #001354)", 
    WebkitBackgroundClip: "text", 
    color: "transparent", 
  }

  return(
    <section className="py-24 bg-white">
      <div className="container mx-auto">
      <div className="flex flex-col justify-between items-center">
         
            <h2 className="text-3xl py-2 text-center font-bold tracking-tighter mt-6 md:text-5xl lg:text-7xl " style={TextGradient}>Pricing</h2>
            <p className=" text-xl w-96 py-2 text-center text-[#010D3E] mt-6">Free Forever. Upgrade for unlimited tasks better security and exclusive features</p>

            <PricingCards/>
        </div>

      </div>
    </section>
  )
}