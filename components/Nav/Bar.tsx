"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "./MenuContext";
import { MobileNavMenu } from "./MobileMenu";

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
            className="flex flex-row space-x-4 items-center text-[1rem] md:text-2xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            {/* <Image
              src="/images/msf-logo.png"
              alt="Msf-logo"
              width={50}
              height={50}
              priority
            /> */}
            <span>Avana Energy</span>
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
              <Menu className="w-8 h-8 text-white" />
            )}
          </button>

          {/* Nav menu */}
          <div className="hidden lg:flex items-center gap-6 ">
            {navItems.map((item, index) => (
              <div className="text-white" key={index}>
                <Link
                  href={item.path}
                  className={`
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

          {/* Button */}
          {/* <Button text="Start Consultation" type="button" /> */}
        </div>
      </nav>
      <AnimatePresence>{isOpen && <MobileNavMenu />}</AnimatePresence>
    </header>
  );
};
