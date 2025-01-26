import Facebook from "../../../assets/facebook.svg";
import Twitter from "../../../assets/twiter.svg";
import LinkedIn from "../../../assets/linkedIn.svg";

export const footerList = [
  { title: "Home", pages: ["Categories", "Devices", "Pricing", "FAQ"] },
  { title: "Movies", pages: ["Genres", "Trending", "New Release", "Popular"] },
  { title: "Shows", pages: ["Genres", "Trending", "New Release", "Popular"] },
  { title: "Support", pages: ["Contact Us"] },
  { title: "Subscription", pages: ["Plans", "Features"] },
  {
    title: "Connect With Us",
    icons: [<Facebook />, <Twitter />, <LinkedIn />],
  },
];
