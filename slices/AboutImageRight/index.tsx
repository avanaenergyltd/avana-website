"use client";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "motion/react";
import { FC } from "react";


/**
 * Props for `AboutImageRight`.
 */
export type AboutImageRightProps =
  SliceComponentProps<Content.AboutImageRightSlice>;

/**
 * Component for "AboutImageRight" Slices.
 */
const AboutImageRight: FC<AboutImageRightProps> = ({ slice }) => {
      const getBlurSvg = staticBlurDataUrl();
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 md:py-16"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 border-2 border-black rounded-lg">
            <div className="flex flex-col justify-center space-y-8 py-12 px-4 lg:px-8 bg-blue text-white rounded-t-lg md:rounded-l-lg md:rounded-tr-[0px]">
              <h1 className="text-6xl font-extrabold">{slice.primary.title}</h1>
              <p className="text-lg lg:text-3xl">{slice.primary.content}</p>
            </div>
            <PrismicNextImage
              field={slice.primary.image}
              className="rounded-b-lg md:rounded-r-lg md:rounded-tl-[0px] h-full"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutImageRight;
