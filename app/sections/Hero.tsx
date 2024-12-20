"use client"

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll , useTransform} from "framer-motion"
import { useRef } from "react";

export function Hero () {
  const HeroRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target : HeroRef,
    offset : ["start end" , "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1] , [200,-300]);
 
  const TextGradient = {
    backgroundImage: "linear-gradient(to bottom, #000000, #001354)", 
    WebkitBackgroundClip: "text", 
    color: "transparent", 
  };
  
  return (
    <section    ref = {HeroRef} className=" overflow-hidden  pt-6 pb-20 md:pt-4 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_66%)] " >
      <div className="container mx-auto px-6 md:px-0">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          {/* Text Content */}

          <motion.div 
          initial={{
         
            opacity:0,
          }}

          animate={{
            x:[-100,0],
            opacity:1,
          }}

          transition={{
            duration : 0.3,
            ease :["easeIn"]
          }}
          
          className="flex flex-col lg:-mx-20 md:w-[500px] lg:w-[1200px] ">
            <div className="text-black text-sm px-3 py-2 border-2 border-gray-300 w-40 inline-flex rounded-lg ">Version 2.0 is here</div>
            <h2 className="text-5xl font-bold tracking-tighter mt-6 md:text-5xl lg:text-7xl " style={TextGradient}>Pathway to productivity</h2>
            <p className=" text-xl text-[#010D3E] mt-6">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
            <div className="flex-row flex gap-x-4 items-center mt-[32px]">
              <button className="bg-black py-3 px-3 text-white rounded-lg">Get for Free</button>
              
              <button className="text-black flex flex-row items-center gap-2"><span>Learn More</span><FaArrowRight/></button>
            </div>
          </motion.div>

          <motion.div
       
          initial={{
            opacity:0,
          }}
          animate={{
            x:[100,0],
            opacity:1,
          }}
          transition={{
            duration:0.3,
            ease:["easeIn"]
          }}
            
            className="mt-12 md:mt-0  relative ">
            {/* Main Image */}

            <motion.div 
            animate={{
              translateY : [-20,20],
            }}

            transition={{
              repeat:Infinity,
              repeatType:"mirror",
              duration:3,
              ease:["easeIn","easeOut"]
            }} >

          
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

          </motion.div>

            {/* Cylinder Image */}
            <motion.img
              src="/assets/LandingpageCylinder.png"
              alt="Cylinder"
              width={170}
              height={170}
              style={{
                translateY:translateY,
              }}
              className="hidden md:block absolute lg:w-[200px] lg:h-[190px] md:right-[300px] md:top-[-10px] lg:right-[360px] lg:top-[-10px] "
            />

<motion.img
              src="/assets/LandingPageU.png"
              alt="Cylinder"
              width={270}
              height={270}
              style={{
                translateY:translateY,
              }}
           
              className="  overflow-x-hidden z-10 hidden lg:block absolute lg:right-[-160px] lg:top-[500px] "
            />
          </motion.div>


        </div>
        


      </div>


    </section>
  )
}