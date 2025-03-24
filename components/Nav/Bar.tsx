"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "./MenuContext";
import { MobileNavMenu } from "./MobileMenu";
import Image from "next/image";
import clsx from "clsx";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
];

export const Navbar = () => {
  const { isOpen, toggleMenu } = useMenu();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-20 z-[99]">
        <div className="container text-center flex items-center justify-between h-full px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex space-x-2 items-center text-[1.125rem] md:text-2xl font-medium text-white"
          >
            <Image
              src="/images/avana-logo.png"
              alt="avana-logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
            <span className={clsx("hidden md:flex", isOpen ? "text-white" : "rounded-full bg-black px-4 py-2 text-white")}>
              Avana Energy
            </span>
          </Link>

          {/* Toggle Menu */}
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-full"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-black" />
            )}
          </button>

          {/* Nav menu */}
          <div className="hidden lg:flex items-center gap-6 text-black backdrop-blur-md bg-white/30 p-4 rounded-full">
            {navItems.map((item, index) => (
              <div className="text-white" key={index}>
                <Link
                  href={item.path}
                  className={`text-black
                    ${
                      isActive(item.path) &&
                      "rounded-full px-3 py-2 !text-blue font-bold bg-white border border-blue"
                    }  
                    `}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <AnimatePresence>{isOpen && <MobileNavMenu />}</AnimatePresence>
    </header>
  );
};
