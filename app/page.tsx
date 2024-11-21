import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import "../app/globals.css"
import { Product } from "./sections/Product";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <LogoTicker/>
    <Product/>

   </>
  );
}
