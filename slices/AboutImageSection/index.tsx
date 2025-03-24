"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "motion/react";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";

/**
 * Props for `AboutImageSection`.
 */
export type AboutImageSectionProps =
  SliceComponentProps<Content.AboutImageSectionSlice>;

/**
 * Component for "AboutImageSection" Slices.
 */
const AboutImageSection: FC<AboutImageSectionProps> = ({ slice }) => {
    const getBlurSvg = staticBlurDataUrl();
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 border-[2px] border-black rounded-lg"
        >
          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-[0px] h-full"
            placeholder="blur"
            blurDataURL={getBlurSvg}
          />
          <div className="flex flex-col justify-center space-y-8 py-12 px-4 lg:px-8">
            <h1 className="text-6xl font-extrabold">{slice.primary.title}</h1>
            <p className="text-lg lg:text-3xl">{slice.primary.content}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutImageSection;
