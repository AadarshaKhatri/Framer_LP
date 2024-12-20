"use client"

import { FaArrowRight } from "react-icons/fa"


import {motion, useScroll , useTransform} from "framer-motion";
import { useRef } from "react";




export function SignUp(){
  const SignUpRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target : SignUpRef,
    offset : ["start end", "end start"] 
    
  })

  const translateingY = useTransform(scrollYProgress,[0,1],[300,-300]);
  const TextGradient = {
    backgroundImage: "linear-gradient(to bottom, #000000, #001354)", 
    WebkitBackgroundClip: "text", 
    color: "transparent", 
  }
  return (
    <section ref = {SignUpRef} className="py-20 overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF,#D2DCFF)]">
      <div className="container mx-auto px-6">

        <div className="relative  ">

          <div className="flex flex-col items-center justify-between gap-y-3">
 
            <h2 className="text-5xl py-2 text-center font-bold tracking-tighter mt-6 md:text-5xl lg:text-7xl " style={TextGradient}>Sign up for free today</h2>
            <p className=" text-xl text-[#010D3E] text-center mt-6 lg:w-[600px]">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
            <div className="flex-row flex gap-x-4 items-center mt-[32px]">
              <button className="bg-black py-3 px-3 text-white rounded-lg">Get for Free</button>
              
              <button className="text-black flex flex-row items-center gap-2"><span>Learn More</span><FaArrowRight/></button>
            </div>
          </div>


          <motion.img 
            src = "/assets/SignUpSectionStar.png"
            alt = "Image"
            width = {300}
            height = {300}
            style={{translateY:translateingY}}
         
            className=" absolute hidden md:block  md:top-[-80px] md:-left-[150px]"
          />

          
          <motion.img 
            src = "/assets/SignUpSectionSolenoid.png"
            alt = "Image"
            width = {300}
            height = {300}
            style={{translateY:translateingY}}
            
            className=" absolute hidden md:block   md:top-[80px] md:right-[-150px]"
          />


        
        </div>


      </div>
    </section>
  )
}