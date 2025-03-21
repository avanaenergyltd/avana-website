import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ChoiceBlock`.
 */
export type ChoiceBlockProps = SliceComponentProps<Content.ChoiceBlockSlice>;

/**
 * Component for "ChoiceBlock" Slices.
 */
const ChoiceBlock: FC<ChoiceBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for choice_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ChoiceBlock;
