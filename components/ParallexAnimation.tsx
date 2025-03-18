import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Sparkles } from "lucide-react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type IParallexAnimationProps = {
  image: ImageField;
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function ParallexAnimation({ image }: IParallexAnimationProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -1);
  // Map scroll progress (0 to 1) to y-axis range (300px to 0px)
    // const y = useTransform(scrollYProgress, [0, 0.75], [300, 0]);

  return (
    <section className="h-screen snap-start  relative">
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y }}
        >
          <div className="flex  space-x-4">
            <span>
              <Sparkles />
            </span>
            <span>fnsjnfjfnerjkrj</span>
          </div>
        </motion.div>

        <div ref={ref}>
          <PrismicNextImage
            field={image}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
