import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutImageSection`.
 */
export type AboutImageSectionProps =
  SliceComponentProps<Content.AboutImageSectionSlice>;

/**
 * Component for "AboutImageSection" Slices.
 */
const AboutImageSection: FC<AboutImageSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for about_image_section (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default AboutImageSection;
