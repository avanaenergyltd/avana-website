import useStore from "@/lib/CardStore";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import {
  Simplify,
  TextImageLeftSliceDefaultPrimaryItemsItem,
} from "@/prismicio-types";
import { GroupField, ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

type CardImageProps = {
  data: GroupField<Simplify<TextImageLeftSliceDefaultPrimaryItemsItem>>;
};

export function CardImage({ data }: CardImageProps) {

  return (
    <div className="flex-1 flex-col items-start flex">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-screen hidden md:flex items-start"
        >
          <Card image={item.image} index={index} />
        </div>
      ))}
    </div>
  );
}

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
