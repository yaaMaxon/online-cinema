import Facebook from "../../../assets/facebook.svg";
import Twitter from "../../../assets/twiter.svg";
import LinkedIn from "../../../assets/linkedIn.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

export const footerList = [
  {
    title: "Home",
    path: "/",
    pages: [
      { name: "Categories", id: "categories" },
      { name: "Devices", id: "devices" },
      { name: "Pricing", id: "pricing" },
      { name: "FAQ", id: "faq" },
    ],
  },
  {
    title: "Movies",
    path: "/movies",
    pages: [
      { name: "Genres", id: "genres" },
      { name: "Trending", id: "trending" },
      { name: "New Release", id: "new-release" },
      { name: "Popular", id: "popular" },
    ],
  },
  {
    title: "Shows",
    path: "/movies",
    pages: [
      { name: "Genres", id: "genres-show" },
      { name: "Trending", id: "trending-show" },
      { name: "New Release", id: "new-release-show" },
      { name: "Popular", id: "popular-show" },
    ],
  },
  {
    title: "Support",
    path: "/support",
    pages: [{ name: "Contact Us", id: "contact-us" }],
  },
  {
    title: "Subscription",
    path: "/subscription",
    pages: [
      { name: "Plans", id: "plans" },
      { name: "Features", id: "features" },
    ],
  },
  {
    title: "Connect With Us",
    icons: [
      {
        icon: <FaInstagram className="fill-white w-[20px] h-[20px]" />,
        link: "https://www.instagram.com/yaamaxon?igsh=cmxjYnNycXZpaTNo&utm_source=qr",
      },
      {
        icon: <FaTelegram className="fill-white w-[20px] h-[20px]" />,
        link: "https://t.me/yaamaxon",
      },
      {
        icon: <IoLogoLinkedin className="fill-white w-[20px] h-[20px]" />,
        link: "https://www.linkedin.com/in/tkachenko-maksym/",
      },
    ],
  },
];
