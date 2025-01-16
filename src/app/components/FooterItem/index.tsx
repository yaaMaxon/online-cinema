import { isValidElement as isIcon } from "react";

import Link from "next/link";

type Props = {
  title: string;
  pages: string[] | React.ReactNode[];
};

const FooterItem = ({ title, pages }: Props) => {
  return (
    <li className="w-[180px]">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className={`${isIcon(pages[0]) && "flex gap-2.5"}`}>
        {pages.map((page, index) => (
          <li
            key={index}
            className={`${
              isIcon(page) &&
              "p-3 bg-[#1F1F1F] rounded-md border-[#262626] border-[1px]"
            } text-default font-medium`}
          >
            <Link href="">{page}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default FooterItem;
