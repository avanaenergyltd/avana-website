"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Zap } from "lucide-react";
import { motion } from "motion/react";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { PrismicNextImage } from "@prismicio/next";
import { SectionTitle } from "@/components/SectionTitle";

/**
 * Props for `ImageTextLeft`.
 */
export type ImageTextLeftProps =
  SliceComponentProps<Content.ImageTextLeftSlice>;

/**
 * Component for "ImageTextLeft" Slices.
 */
const ImageTextLeft: FC<ImageTextLeftProps> = ({ slice }) => {
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
      className="py-16"
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

            {slice.primary.items.map((item, index) => {
              const IconComponent = iconsArray.get(index);
              return (
                IconComponent && (
                  <div key={index} className="space-x-8 relative mb-8 md:mb-4">
                    <IconComponent className="size-8 rounded-full bg-blue text-white px-2 border border-black" />
                    <span className="absolute -top-2 left-12 inline-flex text-[1.125rem]">
                      {item.text}
                    </span>
                  </div>
                )
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextLeft;
