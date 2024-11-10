import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/Navbar";

import { FaHouseChimney } from "react-icons/fa6";
import { BentoGridSecondDemo } from "./components/BentoGrid";
import { navItems } from "./data";
import RecentProject from "./components/RecentProject";
import { PinAnimation } from "./components/ui/card-pin";


export default function Home() {
  return (
   <>
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
   <FloatingNav navItems={navItems}/>
   <Hero/>
   <BentoGridSecondDemo />
   <RecentProject/>
   
   </main>
   </>
  );
}
