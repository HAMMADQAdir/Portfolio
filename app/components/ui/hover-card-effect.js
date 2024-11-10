"use client";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
// PinAnimation component
export const PinAnimation = ({ title, href }) => {
  return (
    <Link href={href || "/"} target="_blank" className="relative group">
      <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10 transition duration-500">
        <div className="w-full h-full flex-none inset-0">
          <div className="absolute top-0 inset-x-0 flex justify-center">
            <a
              href={href}
              className="relative flex space-x-2 items-center rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
            >
              <span className="text-white text-xs font-bold">{title}</span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </a>
          </div>

          <div
            style={{
              perspective: "1000px",
              transform: "rotateX(70deg) translateZ(0)",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {[0, 2, 4].map((delay) => (
              <motion.div
                key={delay}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
                transition={{ duration: 6, repeat: Infinity, delay }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              ></motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// HoverEffect component
export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
               <motion.span
               className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
               layoutId="hoverBackground"
               initial={{ opacity: 0 }}
               animate={{
                 opacity: 1,
                 transition: { duration: 0.15 },
               }}
               exit={{
                 opacity: 0,
                 transition: { duration: 0.15, delay: 0.2 },
               }}
             />
            )}
          </AnimatePresence>
          <Card className="w-[32.5rem] h-[32rem] bg-[#04071D]" isHovered={hoveredIndex === idx} item={item.iconLists}>
            {/* Pin Animation positioned at the top of the Card */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <PinAnimation title={item.link} href={'/link'}/>
            </div> */}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription isHovered={hoveredIndex === idx}>
              {item.des}
            </CardDescription>
            <motion.div whileHover={{scale:1.05,rotateZ:-2}}>
              <Image src={item.img} width={500} height={400} alt={item.title}  />

            </motion.div>
            <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center justify-items-end" >
                  {item.iconLists.map((icon, index) => (
                    <motion.div
                    whileInView={{rotateZ:3}}
                    whileHover={{rotateZ:-3}}
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} width={100} height={100}/>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                </div>
                
      
       
     
               
          </Card>
          
        </Link>
        
        
      ))}

      
    </div>
  );
};

// Card component
export const Card = ({ className, children,item }) => {
  return (
    <motion.div
      
      

      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
        
      </div>
      
    </motion.div>
  );
};

// CardTitle component
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className)}>
      {children}
    </h4>
  );
};

// CardDescription component
export const CardDescription = ({ className, children, isHovered }) => {
  return (
    <motion.p
      initial={{ y: 10, opacity: 0 }}
      animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </motion.p>
  );
};
