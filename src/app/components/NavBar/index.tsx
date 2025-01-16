"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LogoIcon from "../../../assets/logo.svg";
import MenuIcon from "../../../assets/menu.svg";
import SearchIcon from "../../../assets/search.svg";
import ClockIcon from "../../../assets/clock.svg";
import { navBarPages } from "./NavBarSettings";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`p-4 pt-6 sticky left-0 top-0 lg:px-20 lg:py-6 z-[100] transition-colors duration-300 ${
        isScrolled ? "bg-black/70" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center">
        <Link href="/">
          <LogoIcon />
        </Link>
        <ul className="gap-4 items-center bg-[#0F0F0F] border-[3px] border-[#1F1F1F] rounded-[10px] p-2 hidden lg:flex">
          {navBarPages.map(({ page, path }) => (
            <li
              className={`${pathname === path && "bg-[#1A1A1A] rounded-lg"}`}
              key={page}
            >
              <Link
                href={path}
                className={`${
                  pathname === path && "text-white px-5 py-3"
                } text-default text-sm font-medium inline-block`}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-[14px]">
          <SearchIcon />
          <ClockIcon />
        </div>
        <button
          type="button"
          className="p-3 bg-[#1A1A1A] rounded-[6px] md:bg-red-600 lg:bg-slate-600 xl:bg-white border-[#262626] border-[3px] cursor-pointer lg:hidden"
        >
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
