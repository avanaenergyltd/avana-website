import useStore from "@/lib/CardStore";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import {
  Simplify,
  TextImageLeftSliceDefaultPrimaryItemsItem,
} from "@/prismicio-types";
import { GroupField, ImageField, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

type TitlesProps = {
  data: GroupField<Simplify<TextImageLeftSliceDefaultPrimaryItemsItem>>;
};

export const Titles = ({ data }: TitlesProps) => {
  return (
    <div className="h-screen flex-1 sticky top-16 flex items-start container">
      <div className="flex flex-col gap-12 border-l-2 border-blue pl-4">
        {data.map((item, index) => (
          <Title
            key={index}
            index={index}
            title={item.text}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

const Title = ({
  index,
  title,
  image,
}: {
  index: number;
  image: ImageField;
  title: KeyTextField;
}) => {
  const { currentIndex } = useStore();
  return (
    <h1 className="relative pl-4 md:pl-7 flex items-center">
      <span
        className={clsx(
          "absolute -start-[2.6rem] size-12 inline-flex justify-center items-center rounded-full bg-[#e0e4f4] text-lg transition-colors duration-300",
          currentIndex === index &&
            "bg-blue text-bold text-white border border-black"
        )}
      >
        {index + 1}
      </span>
      <div className="flex flex-col gap-y-4">
        <span
          className={clsx(
            "text-[#66687A] text-xl transition-colors duration-300",
            currentIndex === index && "text-black font-bold"
          )}
        >
          {title}
        </span>

        <div className="flex md:hidden">
          <Card image={image} index={index} />
        </div>
      </div>
    </h1>
  );
};

const Card = ({ image, index }: { image: ImageField; index: number }) => {
  const getBlurSvg = staticBlurDataUrl();
  const CardRef = useRef<HTMLDivElement>(null);
  const { setCurrentIndex } = useStore();
  const inView = useInView(CardRef);

  useEffect(() => {
    if (inView) {
      setCurrentIndex(index);
    }
  }, [index, inView, setCurrentIndex]);
  return (
    <div ref={CardRef}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: CardRef }}
      >
        <PrismicNextImage
          field={image}
          width={image.dimensions?.width}
          height={image.dimensions?.height}
          placeholder="blur"
          blurDataURL={getBlurSvg}
          className="rounded-lg"
        />
      </motion.div>
    </div>
  );
};
