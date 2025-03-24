"use client";
import { Reveal } from "@/components/Reveal";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "motion/react";
import { FC } from "react";

/**
 * Props for `HeroBlock`.
 */
export type HeroBlockProps = SliceComponentProps<Content.HeroBlockSlice>;

/**
 * Component for "HeroBlock" Slices.
 */
const HeroBlock: FC<HeroBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-32"
    >
      <div className="container">
        <div className="flex flex-col gap-y-8">
          <Reveal initialY={10}>
            <div className="grid lg:grid-cols-2 gap-4 justify-between">
              <h1
                className="font-extrabold text-2xl md:text-4xl lg:text-6xl
            xl:text-6xl max-w-[40rem]"
              >
                {slice.primary.title}
              </h1>
              <p className="text-[1.125rem]">{slice.primary.content}</p>
            </div>
          </Reveal>

          <Reveal initialY={-10} delay={0.1}>
            <div className="relative">
              <div className="bg-black/20 w-full h-full absolute z-[2] inset-0 bg-gradient-to-b from-transparent from-60% to-black lg:from-30% rounded-lg"></div>

              {/* Image */}
              <PrismicNextImage
                field={slice.primary.image}
                width={slice.primary.image.dimensions?.width}
                height={slice.primary.image.dimensions?.height}
                className="rounded-lg mb-4"
                placeholder="blur"
                blurDataURL={getBlurSvg}
              />

              <div className="absolute z-[3] bottom-4 left-0 px-4 sm:px-8 xl:px-[6.75rem] py-4 lg:py-8">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="font-extrabold text-2xl md:text-5xl xl:text-6xl text-white max-w-[40rem]"
                >
                  {slice.primary.image_text}
                </motion.h1>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
