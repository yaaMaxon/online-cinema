"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navBarPages } from "./NavBarSettings";
import SearchMovies from "../SearchMovies";
import MobileMenu from "../MobileMenu";
import LogoIcon from "../../../assets/logo.svg";
import MenuIcon from "../../../assets/menu.svg";
import { MdClose } from "react-icons/md";
import { FiBellOff } from "react-icons/fi";
import SearchIcon from "../../../assets/search.svg";
import ClockIcon from "../../../assets/clock.svg";

const NavBar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchMoviesOpen, setSearchMoviesState] = useState(false);
  const [isActiveBell, setIsActiveBellState] = useState(false);
  const [isMobileMenuOpen, setMobileMenuState] = useState(false);

  const handleSearchMoviesOpen = () => {
    setSearchMoviesState(true);
  };

  const handleMenuToggle = () => {
    setMobileMenuState((prev) => !prev);
  };

  const handleActiveBell = () => {
    setIsActiveBellState((prev) => !prev);
  };

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

  const getHeaderStyles = () => {
    if (isMobileMenuOpen) {
      return "bg-[#0F0F0F]";
    }

    if (isScrolled) {
      return "bg-black/70";
    }

    if (!isScrolled) {
      return "bg-transparent";
    }
  };

  return (
    <>
      <header
        className={`p-4 pt-6 sticky left-0 top-0 lg:px-20 lg:py-6 z-[200] transition-colors duration-300 ${getHeaderStyles()} `}
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
            <SearchIcon
              className="cursor-pointer"
              onClick={handleSearchMoviesOpen}
            />
            {isActiveBell ? (
              <ClockIcon
                onClick={handleActiveBell}
                className="cursor-pointer"
              />
            ) : (
              <FiBellOff
                onClick={handleActiveBell}
                className="text-white w-6 h-6 cursor-pointer"
              />
            )}
          </div>
          <button
            type="button"
            onClick={handleMenuToggle}
            className={
              isMobileMenuOpen
                ? "lg:hidden"
                : "p-3 bg-[#1A1A1A] rounded-[6px] md:bg-red-600 lg:bg-slate-600 xl:bg-white border-[#262626] border-[3px] cursor-pointer lg:hidden"
            }
          >
            {isMobileMenuOpen ? (
              <MdClose className="fill-[#999] w-[53px] h-[53px] p-[14px] cursor-pointer" />
            ) : (
              <MenuIcon />
            )}
          </button>
        </nav>
      </header>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        navBarPages={navBarPages}
        handleMenuToggle={handleMenuToggle}
        handleSearchMoviesOpen={handleSearchMoviesOpen}
      />
      <SearchMovies
        isSearchMoviesOpen={isSearchMoviesOpen}
        setSearchMoviesState={setSearchMoviesState}
      />
    </>
  );
};

export default NavBar;
