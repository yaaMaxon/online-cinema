import FooterItem from "../FooterItem";
import { footerList } from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] px-4 pt-[50px] pb-5 lg:p-20 lg:pb-10">
      <ul className="flex flex-wrap gap-y-[30px] mb-[50px] lg:justify-between">
        {footerList.map(({ title, pages, icons }, index) => (
          <FooterItem key={index} title={title} pages={pages} icons={icons} />
        ))}
      </ul>
      <div className="border-t border-t-[#262626] pt-5 lg:flex lg:justify-between">
        <span className="text-default text-sm">
          @2023 streamvib, All Rights Reserved
        </span>
        <ul className="flex mt-5 lg:mt-0">
          {["Terms of Use", "Privacy Policy", "Cookie Policy"].map(
            (item, index) => (
              <li
                key={index}
                className="text-default text-sm border-r border-r-[#262626] last:border-r-0 px-4 first:pl-0 last:pr-0"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
