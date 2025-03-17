import { KeyTextField } from "@prismicio/client";
import React from "react";

type SectionTitleProps = {
  text: KeyTextField;
};

export function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-start gap-x-2 md:gap-x-4">
      <div className="w-2 bg-blue relative h-8 md:h-32"></div>
      <h1 className="text-[2rem] md:text-[4.5rem] font-bold leading-[1.115em]">{text}</h1>
    </div>
  );
}
