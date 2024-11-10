"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../../lib/utils";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max) => Math.floor(Math.random() * max);

export function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}) {
  const [displayText, setDisplayText] = useState((text || "").split("")); // Ensuring displayText initializes properly
  const [trigger, setTrigger] = useState(false);
  const interations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    if (trigger) {
      const interval = setInterval(() => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        if (interations.current < text.length) {
          setDisplayText((prevText) =>
            prevText.map((l, i) =>
              l === " " ? l : i <= interations.current ? text[i] : alphabets[getRandomInt(26)]
            )
          );
          interations.current += 0.1;
        } else {
          setTrigger(false);
          clearInterval(interval);
        }
      }, duration / (text.length * 10));

      return () => clearInterval(interval);
    }
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={triggerAnimation} // Start animation when entering viewport
      className="overflow-hidden py-2 flex cursor-default scale-100"
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.h1
            key={i}
            className={cn(letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter.toUpperCase()}
          </motion.h1>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
