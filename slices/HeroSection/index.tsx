"use client";

import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { FC } from "react";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection: FC<HeroSectionProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex overflow-hidden lg:h-dvh w-full"
    >
      <div className="bg-black/20 w-full h-full absolute z-[2]"></div>

      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
      >
        <PrismicNextImage
          field={slice.primary.image}
          width={slice.primary.image.dimensions?.width}
          height={slice.primary.image.dimensions?.height}
          placeholder="blur"
          blurDataURL={getBlurSvg}
          priority={true}
          className="size-full object-cover object-top transition-transform duration-700 group-hover/image:scale-105 cursor-pointer"
        />
      </motion.div>

      <div className="absolute z-[3] bottom-4 left-0 px-4 sm:px-8 xl:px-[6.75rem] py-4 lg:py-8">
        <div className="flex flex-col md:space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <PrismicNextLink
              field={slice.primary.link}
              className="w-[fit-content] hidden md:flex items-center backdrop-blur-md bg-white/30 rounded-full py-2 px-4 space-x-4 group/button focus:outline-none"
            >
              <p className="text-white font-medium">Start a Consultation</p>

              <div className="bg-white rounded-full p-2 transition-transform duration-300 group-hover/button:rotate-45">
                <ArrowUpRight className="text-blue" />
              </div>
            </PrismicNextLink>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-extrabold text-2xl md:text-4xl lg:text-6xl xl:text-8xl text-white max-w-[57rem]"
          >
            Powering Dreams, <br /> Empowering Africa
          </motion.h1>
        </div>
      </div>

      <div className="absolute z-[3] top-[40%] right-0 px-4 sm:px-8 xl:px-[6.75rem] py-4 lg:py-8 ">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
          className="hidden lg:flex text-lg max-w-[30vw] text-white backdrop-blur-md bg-white/30 px-4 rounded-lg py-1"
        >
          {slice.primary.text}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
