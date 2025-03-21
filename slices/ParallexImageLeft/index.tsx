"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Zap } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

/**
 * Props for `ParallexImageLeft`.
 */
export type ParallexImageLeftProps =
  SliceComponentProps<Content.ParallexImageLeftSlice>;

/**
 * Component for "ParallexImageLeft" Slices.
 */
const ParallexImageLeft: FC<ParallexImageLeftProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  const iconsArray = new Map([
    [0, Zap],
    [1, Zap],
    [2, Zap],
  ]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-96 md:-mt-32 pb-16"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16">
          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <PrismicNextImage
              field={slice.primary.image}
              height={1000}
              className="rounded-lg"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-y-8 lg:max-w-[37.5rem]"
          >
            <SectionTitle text={slice.primary.title} />
            <p className="text-[1.125rem]">{slice.primary.content}</p>

            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              className="flex lg:hidden rounded-lg mb-4"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />

            {/* Bullet points */}

            <div className="flex flex-col gap-y-8">
              {slice.primary.items.map((item, index) => {
                const IconComponent = iconsArray.get(index);
                return (
                  IconComponent && (
                    <div key={index} className="flex items-start gap-x-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue text-white border border-black shrink-0">
                        <IconComponent className="w-6 h-6 min-w-min min-h-min" />
                      </div>
                      <span className="text-[1.125rem]">{item.text}</span>
                    </div>
                  )
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallexImageLeft;
