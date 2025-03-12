// "use client";
// import React, { useState } from "react";
// import { motion } from "motion/react";
// // import { KeyTextField } from "@prismicio/client";

// type ButtonProps = {
//   text: string;
//   type: "submit" | "button";
//   disabled?: boolean;
//   children?: React.ReactNode;
// };

// export function Button({ text, type, disabled, children }: ButtonProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <button
//       type={type}
//       disabled={disabled}
//       className="relative flex justify-center items-center cursor-pointer bg-blue rounded-[1.5rem] py-3 px-12 overflow-clip border border-green"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <motion.div
//         animate={{
//           scale: isHovered ? 60 : 1,
//           backgroundColor: isHovered ? "#f00" : "#000000",
//           color: isHovered ? "#fffeff" : "#000000",
//         }}
//         transition={{
//           ease: "easeIn",
//           duration: 0.2,
//         }}
//         className="w-[6px] h-[6px] bg-black rounded-[50%] absolute left-[1.375rem]"
//       ></motion.div>
//       <motion.div
//         animate={{
//           x: isHovered ? -8 : 8,
//           color: isHovered ? "#fffeff" : "#ffffff",
//         }}
//         className="-tracking-[0.5px] font-medium z-[1]"
//       >
//         {text}
//       </motion.div>
//       <motion.div
//         animate={{
//           x: isHovered ? 0 : 24,
//           color: isHovered ? "#fffeff" : "#000000",
//         }}
//         className="flex items-center absolute right-8 pl-2"
//       >
//         {children}
//       </motion.div>
//     </button>
//   );
// }

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
