"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Titles } from "@/components/Titles";
import { SectionTitle } from "@/components/SectionTitle";
import { CardImage } from "@/components/CardImage";
import { motion } from "motion/react";

/**
 * Props for `TextImageLeft`.
 */
export type TextImageLeftProps =
  SliceComponentProps<Content.TextImageLeftSlice>;

/**
 * Component for "TextImageLeft" Slices.
 */
const TextImageLeft: FC<TextImageLeftProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-32 md:pb-0 pt-16"
    >
      <div className="container">
        <div className="flex flex-col gap-y-8 max-w-[530px] mb-8">
          <SectionTitle text={slice.primary.title} />
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[1.125rem]"
          >
            {slice.primary.description}
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2">
          <Titles data={slice.primary.items} />
          <CardImage data={slice.primary.items} />
        </div>
      </div>
    </section>
  );
};

export default TextImageLeft;
