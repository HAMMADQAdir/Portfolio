"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const PinAnimation = ({
  title,
  href,
}) => {
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

          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-10 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-10" />
        </div>
      </motion.div>
    </Link>
  );
};
