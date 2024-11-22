import { TestimonialsCard } from "../componenents/TestimonailsCard"
export function Testimonials(){
  const TextGradient = {
    backgroundImage: "linear-gradient(to bottom, #000000, #001354)", 
    WebkitBackgroundClip: "text", 
    color: "transparent",
  }
  return (
    <section className="py-20 bg-white">
      <div>
      <div className="flex flex-col justify-between items-center">
          <div className="text-black text-sm px-3 py-2 border-2 border-gray-300 w-42 inline-flex rounded-lg ">Testimonials</div>
          <h2 className="text-3xl py-2 text-center font-bold tracking-tighter mt-6 md:text-5xl lg:text-7xl " style={TextGradient}>What our users say</h2>
         

        <TestimonialsCard/>

      </div>


      </div>
    
    </section>
  )
}