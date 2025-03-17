"use client"

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Titles } from "@/components/Titles";
import { SectionTitle } from "@/components/SectionTitle";
import { CardImage } from "@/components/CardImage";

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
      className="py-16"
    >
      <div className="container">
        <div className="flex flex-col gap-y-8 max-w-[530px] mb-8">
          <SectionTitle text={slice.primary.title} />
          <p className="text-[1.125rem]">{slice.primary.description}</p>
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
