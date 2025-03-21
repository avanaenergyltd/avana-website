import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

type Props = React.PropsWithChildren<{
  initialX?: number;
  initialY?: number;
  duration?: number;
  delay?: number;
}>;

export const Reveal = ({
  children,
  initialX = 0,
  initialY = 0,
  duration = 1,
  delay = 0,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      transition={{ duration, delay }}
      animate={controls}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
