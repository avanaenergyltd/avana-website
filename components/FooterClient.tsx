"use client";

import { GroupField, KeyTextField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { LocateIcon, Mail, PhoneCall } from "lucide-react";
import { JSX } from "react";
import { BackToTopBtn } from "./BackToTopBtn";
import {
  FooterDocumentDataContactItem,
  FooterDocumentDataLinksItem,
  Simplify,
} from "@/prismicio-types";
type FooterProps = {
  title: KeyTextField;
  description: KeyTextField;
  companyName: KeyTextField;
  links: GroupField<Simplify<FooterDocumentDataLinksItem>>;
  contact: GroupField<Simplify<FooterDocumentDataContactItem>>;
  copyright: KeyTextField;
};

export const FooterClient = (props: FooterProps): JSX.Element => {
  const { title, description, copyright, links, companyName, contact } = props;

  const year = new Date().getFullYear();

  const iconsArray = new Map([
    [0, LocateIcon],
    [1, PhoneCall],
    [2, Mail],
  ]);

  return (
    <footer className="backdrop-blur-md bg-black text-white relative">
      <div className="container">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="flex items-center gap-3"></div>
          <div className="grid lg:grid-cols-3 lg:items-center gap-4 xl:gap-16">
            {/* Logo and Description */}
            <div className="flex flex-col gap-y-4">
              <h1 className="capitalize text-lime text-2xl font-bold">{title}</h1>

              <h2 className="text-xl text-white/80">{description}</h2>

              <p className="text-green/30">{`${year} ${copyright}`}</p>
            </div>
            {/* Navigation Links */}
            <div>
              <div className="flex flex-col lg:items-center xl:items-end">
                <span className="mt-16 lg:mt-0 lg:mb-8 font-bold uppercase text-green">
                  navigation
                </span>
              </div>
              <nav className="flex flex-col lg:items-center xl:items-end gap-8 mt-8 lg:mt-0">
                {links.map((item, index) => (
                  <div key={index} className="relative">
                    <PrismicNextLink
                      field={item.link}
                      className="inline-flex capitalize text-lg h-auto px-0 border-transparent after:content-[''] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:bg-lime hover:after:w-[8%] md:hover:after:w-full focus:outline-none"
                    >
                      {item.text}
                    </PrismicNextLink>
                  </div>
                ))}
              </nav>
            </div>

            {/* Navigation Links */}
            <div className="">
              <div className="flex flex-col lg:items-end">
                <span className="text-green mt-16 lg:mt-0 lg:mb-8 font-aktiv font-bold uppercase">
                  contact
                </span>
              </div>
              <nav className="flex flex-col lg:items-left xl:items-end gap-8 mt-8 lg:mt-0">
                {contact.map((item, index) => {
                  const IconComponent = iconsArray.get(index);
                  return (
                    IconComponent && (
                      <div key={index}>
                        <PrismicNextLink field={item.link} type="button">
                          <div className="flex items-center gap-x-2 text-sm">
                            <IconComponent className="w-4 h-4 text-green" />
                            {item.text}
                          </div>
                        </PrismicNextLink>
                      </div>
                    )
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <BackToTopBtn />

        <div className="max-w-xl lg:max-w-7xl mx-auto pt-8 text-center">
          <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {companyName}
          </h1>
        </div>
      </div>
    </footer>
  );
};
