import { motion, type Variants, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const Reveal = ({
  children,
  width = "100%",
  delay = 0,
  className,
  direction = "up",
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
        delay,
      },
    },
  };

  return (
    <div ref={ref} style={{ width }} className={cn("relative", className)}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};
