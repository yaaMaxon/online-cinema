import Link from "next/link";

type Props = {
  title: string;
  pages?: string[];
  icons?: React.ReactNode[];
};

const FooterItem = ({ title, pages, icons }: Props) => {
  return (
    <li className="w-[180px]">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      {pages && (
        <ul>
          {pages.map((page, index) => (
            <li key={index} className="text-default font-medium">
              <Link href={`#${page.toLowerCase()}`} className="hover:underline">
                {page}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {icons && (
        <ul className="flex gap-2.5">
          {icons.map((icon, index) => (
            <li
              key={index}
              className="p-3 bg-[#1F1F1F] rounded-md border-[#262626] border-[1px] text-default font-medium"
            >
              <Link href="">{icon}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default FooterItem;
