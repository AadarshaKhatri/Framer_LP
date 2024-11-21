import Image from "next/image";

export function LogoTicker() {
  return (
    <div className="py-8 md:py-12 bg-white">

  
    <div className="container mx-auto">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <div className="flex flex-row gap-x-14 items-center flex-none">
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
      </div>
      </div>
    </div>
    </div>
  );
}
