"use client";
import { valueVariants } from "@/lib/animation";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ChartNoAxesCombined, HardHat, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

/**
 * Props for `ChoiceBlock`.
 */
export type ChoiceBlockProps = SliceComponentProps<Content.ChoiceBlockSlice>;

/**
 * Component for "ChoiceBlock" Slices.
 */
const ChoiceBlock: FC<ChoiceBlockProps> = ({ slice }) => {
  const iconsArray = new Map([
    [0, ChartNoAxesCombined],
    [1, HardHat],
    [2, ShieldCheck],
  ]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <h1
          className="font-extrabold text-4xl lg:text-6xl
            xl:text-6xl max-w-[40rem]"
        >
          {slice.primary.title}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 xl:gap-x-16 mt-8 lg:mt-16">
          {slice.primary.items.map((item, index) => {
            const IconComponent = iconsArray.get(index);
            return (
              IconComponent && (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={valueVariants}
                  viewport={{ once: true }}
                  className="flex flex-col space-y-8 py-12 px-8 border border-black rounded-lg"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue text-white border border-black shrink-0">
                    <IconComponent className="w-6 h-6 min-w-min min-h-min" />
                  </div>
                  <h3 className="text-4xl">{item.title}</h3>
                  <p className="text-4xl text-[1.25rem]">{item.content}</p>
                </motion.div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChoiceBlock;
