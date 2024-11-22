import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import "../app/globals.css"
import { Product } from "./sections/Product";
import { Management } from "./sections/Management";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
// import { SignUp } from "./sections/SignUp";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <LogoTicker/>
    <Product/>
    <Management/>
    <Pricing/>
    <Testimonials/>
    {/* <SignUp/> */}

   </>
  );
}
