"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface NavBarItems {
  page: string;
  path: string;
}

type Prop = {
  navBarPages: NavBarItems[];
  isMobileMenuOpen: boolean;
  handleMenuToggle: () => void;
  handleSearchMoviesOpen: () => void;
};

const MobileMenu = ({
  navBarPages,
  isMobileMenuOpen,
  handleMenuToggle,
  handleSearchMoviesOpen,
}: Prop) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed w-full flex flex-col justify-between pb-3 h-[calc(100vh-93px)] bg-[#0F0F0F] z-[150] lg:hidden "
        >
          <div className="flex flex-col items-center gap-6">
            <ul className="flex flex-col gap-6 items-center">
              {navBarPages.map(({ page, path }: NavBarItems) => (
                <li key={page} onClick={handleMenuToggle}>
                  <Link
                    href={path}
                    className={`${
                      pathname === path && "text-white"
                    } text-default text-lg font-medium hover:text-white`}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              onClick={() => {
                handleSearchMoviesOpen();
                handleMenuToggle();
              }}
              className="cursor-pointer"
            >
              <span className="text-default text-lg font-medium hover:text-white">
                Search Movies
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center px-2">
            <span className="text-default text-sm">
              @2023 streamvib, All Rights Reserved
            </span>
            <ul className="flex mt-5">
              {["Terms of Use", "Privacy Policy", "Cookie Policy"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-default text-sm text-center border-r border-r-[#262626] last:border-r-0 px-4 first:pl-0 last:pr-0"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
