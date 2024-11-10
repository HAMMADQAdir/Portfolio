"use client";
import { gridItems } from "@/app/data";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "../../lib/utils";
import { BackgroundGradientAnimation } from "../ui/gradietn-animation";
import { FaLocationArrow } from "react-icons/fa6";
import animationData from "../../data/confettie.json";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Spotlight } from "./Spotlight";
import { AuroraBackground } from "./aurora-background";
export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-16 gap-4 lg:gap-8 mx-auto ",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id, // Still use key for React's internal tracking
  index, // Pass the index as a prop to BentoGridItem
  title,
  description,
  header,
  className,
  icon,
  leftList,
  rightList,
  TitleClassName,
  img,
  imgClassName,
  spareImg,
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "email@emai.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 sm:row-span-full relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      id="about"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            TitleClassName,

            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>
          <div className="font-sans font-extralight md:max-w-full md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>

          {/* {id === 2 && <GridGlobe />} */}

          {id === 1 && (
           
            <div className="mt-3 grid gap-5 grid-rows-6 row-span-1 col-span-1 w-full grid-cols-1 font-serif">
         
              <h3 className="font-bold md:text-xl">
                Fullname:
                <span className="font-normal md:text-xl text-sm ">
                  {" "}
                  {gridItems[0].fullname}
                </span>
              </h3>
              <h3 className="font-bold md:text-xl">
                DOB:
                <span className="font-normal md:text-xl  text-sm">
                  {" "}
                  {gridItems[0].DOB}
                </span>
              </h3>
              <h3 className="font-bold md:text-xl">
                Address:
                <span className="font-normal md:text-xl  text-sm">
                  {" "}
                  {gridItems[0].address}
                </span>
              </h3>
              <h3 className="font-bold md:text-xl">
                Zipcode:
                <span className="font-normal md:text-xl text-sm">
                  {" "}
                  {gridItems[0].zipcode}
                </span>
              </h3>
              <h3 className="font-bold md:text-xl">
                Phone Number:
                <span className="font-normal md:text-xl text-sm">
                  {" "}
                  8745971753
                </span>
              </h3>

            </div>
         
          )}
          {id === 3 && (
            <motion.div
              whileInView={{ scale: 1.1, rotateZ: -5 }}
              transition={{ delay: 0.25 }}
              className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 mr-2 ">
               
             <div className="relative flex overflow-y-hidden">
             <div className="flex flex-col gap-3 md:gap-3 lg:gap-2 animate-marquee">
            
            {leftLists.map((item, i) => (
              <span
                key={i}
                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
            
          </div>
          <div className="flex flex-col gap-3 md:gap-3 lg:gap-2 animate-marquee2 absolute">
        
            {leftLists.map((item, i) => (
              <span
                key={i}
                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
            
          </div>
             </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-2">
                <span className="lg:py-6 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              {/* <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              /> */}
              <button
                className="relative
            mt-4 inline-flex h-12 overflow-hidden rounded-lg p-[1px]  md:w-60 md:mt-12 w-48 ">
                <span className="absolute rounded-lg inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-3 "
                  onClick={handleCopy}>
                  Check my work
                  <FaLocationArrow />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
