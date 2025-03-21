import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SectionTitle`.
 */
export type SectionTitleProps = SliceComponentProps<Content.SectionTitleSlice>;

/**
 * Component for "SectionTitle" Slices.
 */
const SectionTitle: FC<SectionTitleProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-16"
    >
      <div className="container">
        <h1
          className="font-extrabold text-2xl md:text-4xl lg:text-6xl
            xl:text-6xl max-w-[40rem]"
        >
          {slice.primary.title}
        </h1>
      </div>
    </section>
  );
};

export default SectionTitle;
