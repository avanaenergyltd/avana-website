"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { motion } from "motion/react";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { ArrowUpRight, Zap } from "lucide-react";

/**
 * Props for `ContactCard`.
 */
export type ContactCardProps = SliceComponentProps<Content.ContactCardSlice>;

/**
 * Component for "ContactCard" Slices.
 */
const ContactCard: FC<ContactCardProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex overflow-hidden w-full md:max-h-[60dvh] rounded-md"
        >
          <div className="w-full h-full absolute z-[2] bg-black/50"></div>

          <PrismicNextImage
            field={slice.primary.image}
            width={slice.primary.image.dimensions?.width}
            height={slice.primary.image.dimensions?.height}
            placeholder="blur"
            blurDataURL={getBlurSvg}
            className="size-full object-cover object-top transition-transform duration-700 group-hover/image:scale-105 cursor-pointer"
          />

          {/* text */}
          <div className="absolute z-[3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[70vw] flex flex-col justify-center items-center gap-y-3 md:gap-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
              viewport={{ once: true }}
              className="flex text-xl w-[fit-content] text-white backdrop-blur-md bg-white/30 px-4 rounded-full py-1 md:py-2 space-x-2"
            >
              <span>
                <Zap />
              </span>
              <span className="text-[1rem]">{slice.primary.subtitle}</span>
            </motion.p>

            {/* title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex font-extrabold text-[0.9rem] md:text-2xl lg:text-4xl text-white text-center"
            >
              {slice.primary.title}
            </motion.h1>

            {/* button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              <PrismicNextLink
                field={slice.primary.link_url}
                className="w-[fit-content] flex items-center bg-green border border-black rounded-full py-2 px-4 space-x-4 group/button focus:outline-none"
              >
                <p className="text-black font-medium">
                  {slice.primary.link_text}
                </p>

                <div className="bg-white rounded-full border border-black p-2 transition-transform duration-300 group-hover/button:rotate-45">
                  <ArrowUpRight className="text-green" />
                </div>
              </PrismicNextLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCard;
