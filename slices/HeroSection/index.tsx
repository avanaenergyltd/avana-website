import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Button } from "@/components/Nav/Button";
import { ArrowUpRight } from "lucide-react";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection: FC<HeroSectionProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex overflow-hidden lg:h-dvh w-full"
    >
      <div className="bg-black/10 w-full h-full absolute z-[2]"></div>

      <PrismicNextImage
        field={slice.primary.image}
        width={slice.primary.image.dimensions?.width}
        height={slice.primary.image.dimensions?.height}
        placeholder="blur"
        blurDataURL={getBlurSvg}
        priority={true}
        className="size-full object-cover object-top transition-transform duration-700 group-hover/image:scale-105 cursor-pointer"
      />

      <div className="absolute z-[3] bottom-4 left-0 px-4 sm:px-8 xl:px-[6.75rem] py-4 lg:py-8">
        <div className="flex flex-col md:space-y-4 text-white max-w-[44rem] backdrop-blur-md bg-white/30 p-4 rounded-lg">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-7xl ">
            Powering Dreams,
            <br /> Empowering Africa
          </h1>
          <p className="hidden lg:flex text-lg max-w-[60vw]">
           {slice.primary.text}
          </p>

          <PrismicNextLink
            field={slice.primary.link}
            className="w-[fit-content] hidden md:flex items-center bg-blue rounded-full border py-2 px-4 border-orange space-x-4 group/button focus:outline-none"
          >
            <p className="text-white font-medium">Start a Consultation</p>

            <div className="bg-white rounded-full p-2 transition-transform duration-300 group-hover/button:rotate-45">
              <ArrowUpRight className="text-blue" />
            </div>
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
