import { features } from "process"
import { FaCheck } from "react-icons/fa"

export function PricingCards(){
  const PricingTags = [
    {
      title:"Free",
      price:0,
      buttonText:"Get started for free",
      popular:false,
      inverse:false,
      icon : <FaCheck size={16} className="text-black/80"/>,
      features:[
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic Support",
      ]
    },
    {
      title:"Pro",
      price:9,
      buttonText:"Sign up now",
      popular:true,
      inverse:true,
      icon : <FaCheck size={16} className="text-white"/>,
      features:[
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Priority Support",
        "Advanced Support",
        "Export Support",
      ]
    }, {
      title:"Business",
      price:19,
      buttonText:"Get started for free",
      popular:false,
      inverse:false,
      icon : <FaCheck size={16} className="text-black/80"/>,
      features:[
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom Fields",
        "Advanced analytics",
        "Export capabilities",
        "API Cases",
        "Advanced security features"
      ]
    }
  ]

  return (
    
    <section >
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-10 justify-between items-end">
      {
        PricingTags.map((currentEle,index)=>(
          <>
          {currentEle.inverse === true ? 
          (
            <div key = {index} className=" flex flex-col gap-y-5 p-10 border bg-black border-[#F1F1F1] rounded-3xl shadow-md">
              <div className = "flex flex-row justify-between items-center">
                <h3 className="text-white/50 text-lg font-semibold">{currentEle.title}</h3>
                {currentEle.popular === true ? 
                (
                      <div className="text-white text-sm px-3 py-2 border border-gray-600 w-42 inline-flex rounded-lg"><span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF)] text-transparent bg-clip-text font-semibold">Most Popular</span></div>
                  )
                  :null}
                
              </div>
              <h3 className="text-white font-bold text-4xl ">${currentEle.price}<span className="text-sm text-white/50">/monthly</span></h3>
              <button className="text-black bg-white px-3 py-2 rounded-md">{currentEle.buttonText}</button>
            <ul>
              {currentEle?.features?.map((feature,index)=>(
                <li key = {index} className=" ml-5 flex flex-row gap-2 py-3">
                  {currentEle.icon}
                  <span className="text-white text-sm  ">{feature}</span>

                </li>

              ))}
            </ul>
          </div>

          )
          :
          (
            <div key = {index} className=" flex flex-col gap-y-5 p-10 border border-[#F1F1F1] rounded-3xl shadow-md">
              <div className = "flex flex-row justify-between items-center">
                <h3 className="text-black/50 text-lg font-semibold">{currentEle.title}</h3>
                {currentEle.popular === true ? 
                (
                      <div className="text-black text-sm px-3 py-2 border-2 border-gray-300 w-42 inline-flex rounded-lg">Most Popular</div>
                  )
                  :null}
                
              </div>
              <h3 className="text-black font-bold text-4xl ">${currentEle.price}<span className="text-sm text-black/70">/monthly</span></h3>
              <button className="text-white bg-black px-3 py-2 rounded-md">{currentEle.buttonText}</button>
            <ul>
              {currentEle?.features?.map((feature,index)=>(
                <li key = {index} className=" ml-5 flex flex-row gap-2 py-3">
                  {currentEle.icon}
                  <span className="text-black/80 text-sm  ">{feature}</span>

                </li>

              ))}
            </ul>
          </div>

          )
          }
            
        </>

        ))
      }
   

      </div>

      
     
    

    </section>
  )
};