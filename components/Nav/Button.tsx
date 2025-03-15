import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { JSX, ReactNode } from "react";

type IButtonProps = {
  link?: LinkField;
  children?: KeyTextField;
  className?: string;
  iconAfter?: ReactNode;
};

export const Button = ({
  link,
  children,
  iconAfter,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <div className="flex">
      <PrismicNextLink
        {...props}
        field={link}
        className={clsx(
          "px-5 py-2.5 text-[1.125rem] font-bold text-black rounded-lg before:ease relative h-12 w-[fit-content] overflow-hidden border border-black before:absolute before:left-0 hover:text-white before:-ml-2 before:h-16 before:w-72 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300 hover:before:-rotate-180",
          props.className
        )}
      >
        <span className="relative flex flex-row items-center justify-between gap-x-2">
          {children}
        </span>
        {iconAfter && <span className="relative">{iconAfter}</span>}
      </PrismicNextLink>
    </div>
  );
};
