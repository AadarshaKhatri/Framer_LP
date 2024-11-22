

export function TestimonialsCard(){
  const testimonailsUser = [
    {
      text : "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      imageSrc : "",
      name:"Alex Rivera",
      username : "@jamietechguru00",

    },   {
      text : "I was amazed at how quickly we were able to integrate this app into our workflow.",
      imageSrc : "",
      name:"Casey Jordan",
      username : "@caseyj",

    },   {
      text : "Adopting this app for our team has streamlined our project management and improved communication across the board. ",
      imageSrc : "",
      name:"Jordan Patels",
      username : "@jpatelsdesign",

    },   {
      text : "Our team’s productivity has skyrocketed since we started using this tool. ",
      imageSrc : "",
      name:"Josh Smith",
      username : "@jjsmith",

    },   {
      text : "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      imageSrc : "",
      name:"Sam Dawson",
      username : "@dawsontechtips",

    },   {
      text : "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      imageSrc : "",
      name:"Taylor Kim",
      username : "@taylorkimm",

    },   {
      text : "This app has completely transformed how I manage my projects and deadlines.",
      imageSrc : "",
      name:"Morgan Lee",
      username : "@morganleewhiz",

    },   {
      text : "The customizability and integration capabilities of this app are top-notch.",
      imageSrc : "",
      name:"Riley Smith",
      username : "@rileysmith1",

    }, {
      text : "Its user-friendly interface and robust features support our diverse needs.",
      imageSrc : "",
      name:"Casey Harper",
      username : "@casey09",

    },
  ]
  return (
    <section className="py-10">
      <div className="container px-6 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 [mask-image:linear-gradient(to_top,transparent,black,transparent)]">
        {testimonailsUser.map((currentElement,index)=>(
          <div  key={index} className="">
            <div className="border border-gray-100 shadow-md rounded-3xl py-5 px-10">
            <p className="text-black text-sm ">{currentElement.text}</p>
          <div className="flex flex-row items-center justify-start gap-x-4 mt-3">
            <div style={{width:"42px",height:"42px"}} className="bg-gray-200 rounded-full">

            </div>

            <div className="flex flex-col items-start">
              <p className="text-black font-semibold">{currentElement.name}</p>
              <p className="text-black text-sm">{currentElement.username}</p>

            </div>

          </div>
        </div>
  
          
          </div>

        ))}

      </div>


      </div>

    
    </section>
  )
}