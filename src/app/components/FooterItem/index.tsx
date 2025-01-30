import Link from "next/link";

type Props = {
  title: string;
  path?: string;
  pages?: { name: string; id: string }[];
  icons?: { link: string; icon: React.ReactNode }[];
};

const FooterItem = ({ title, pages, icons, path }: Props) => {
  return (
    <li className="w-[180px]">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      {pages && (
        <ul>
          {pages.map(({ name, id }, index) => (
            <li key={index} className="text-default font-medium">
              <Link href={`${path}#${id}`} className="hover:underline">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {icons && (
        <ul className="flex gap-2.5">
          {icons.map(({ icon, link }, index) => (
            <li
              key={index}
              className="p-3 bg-[#1F1F1F] rounded-md border-[#262626] border-[1px] text-default font-medium"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default FooterItem;
