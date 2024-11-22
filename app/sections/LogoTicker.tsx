"use client"
import Image from "next/image";
import {motion} from "framer-motion"
export function LogoTicker() {
  return (
    <div className="py-8 md:py-12 bg-white">

  
    <div className="container mx-auto">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] pr-14">
      <motion.div
      animate ={{
        translateX :"-50%",
      }}
      transition={{
        repeat:Infinity,
        repeatType:"loop",
        duration:8,
        ease:"linear"
        
      }}
      
      className="flex flex-row gap-x-14 items-center flex-none">
        <Image
          src="/logo/AcmeLogo.png"
          alt="Acme Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/ApexLogo.png"
          alt="Apex Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/CelestialLogo.png"
          alt="Celestial Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/EchoLogo.png"
          alt="Echo Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/PulseLogo.png"
          alt="Pulse Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/QuantumLogo.png"
          alt="Quantum Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />

        {/* Second Logo Set */}

        <Image
          src="/logo/AcmeLogo.png"
          alt="Acme Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/ApexLogo.png"
          alt="Apex Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/CelestialLogo.png"
          alt="Celestial Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/EchoLogo.png"
          alt="Echo Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/PulseLogo.png"
          alt="Pulse Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
        <Image
          src="/logo/QuantumLogo.png"
          alt="Quantum Logo"
          width={120}
          height={32}
          quality={100}
          loading="lazy"
        />
      </motion.div>
      </div>
    </div>
    </div>
  );
}
