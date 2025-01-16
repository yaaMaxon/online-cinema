type Prop = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const VariousDeviceItem = ({ icon, title, description }: Prop) => {
  return (
    <li
      className="rounded-[10px] border-[#262626] border-[1px] p-[24px] lg:p-10 lg:w-[413px]"
      style={{
        background:
          "linear-gradient(222deg, rgba(229, 0, 0, 0.50) -208.03%, rgba(229, 0, 0, 0.00) 41.32%), #0F0F0F",
      }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div className="p-2.5 bg-[#141414] rounded-lg border-[#262626] border-[1px]">
          {icon}
        </div>
        <h3 className="text-white text-lg font-semibold lg:text-xl">{title}</h3>
      </div>
      <p className="text-default text-sm lg:text-base">{description}</p>
    </li>
  );
};

export default VariousDeviceItem;
