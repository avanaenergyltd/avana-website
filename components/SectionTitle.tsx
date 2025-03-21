import { KeyTextField } from "@prismicio/client";
import { motion } from "motion/react";
import React from "react";

type SectionTitleProps = {
  text: KeyTextField;
};

export function SectionTitle({ text }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center justify-start gap-x-2 md:gap-x-4"
    >
      <div className="w-2 bg-blue relative self-stretch"></div>
      <h1 className="text-[2rem] md:text-[2.6rem] xl:text-[4.5rem] font-bold leading-[1.115em]">
        {text}
      </h1>
    </motion.div>
  );
}
