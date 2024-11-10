"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa6";
import { TextRevealCard } from "./ui/test-reverl-card";
import { Boxes } from "./ui/background-boxes";
const word =
  "let's do it by using your will power ";
function Hero() {
  return (
    <>
      <div className="pb-48 pt-36">
        
        <Boxes className={'opacity-[0.5]'}/>
        <div>
          <Spotlight
            className="-top-40 -left-10
            md:-left-32 md:-top-20 h-screen"
          />
          {/* <Spotlight
            className="top-10 left-full h-[80vh] w-[50vh]
           "
            fill="purple"
          /> */}
          <Spotlight
            className="top-28 left-80 h-[80vh] w-[50vw]
           "
            fill="blue"
          />
        </div>
        <div className="flex justify-center items-center max-w-[89vw] md:max-w-2xllg:max-w-[60vw] flex-col">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 md:align-middle">
            You cant do anything
          </h2>
           <TextGenerateEffect words={word} className="md:text-5xl lg:text-6xl" />
        <p className="text-sm md:text-lg lg:text-2xl ">
          Hi i am MHQ, a fullstack developer
        </p>
     <button
        
          className="relative

            mt-4 inline-flex h-12 overflow-hidden rounded-lg p-[1px]  md:w-60 md:mt-12 w-48 ">
          <span className="absolute rounded-lg inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-3 ">
            Check my work
            <FaLocationArrow />
          </span>
          

        </button>
        </div>
       
       
      </div>
    </>
  );
}

export default Hero;
