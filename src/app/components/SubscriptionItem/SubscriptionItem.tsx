import Button from "../Button";

type Props = {
  plan: string;
  description: string;
  price: number;
};

const SubscriptionItem = ({ plan, description, price }: Props) => {
  return (
    <li className="bg-[#1A1A1A] rounded-[10px] border-[1px] border-[#262626] p-6 lg:p-10">
      <h3 className="text-white text-lg font-bold mb-2.5 lg:text-xl">{plan}</h3>
      <p className="text-default text-sm mb-[30px] lg:text-base">
        {description}
      </p>
      <div className="flex gap-[2px] items-baseline mb-[30px]">
        <span className=" text-white text-2xl font-semibold lg:text-3xl">
          ${price}
        </span>
        <span className="text-default text-sm font-medium lg:text-base">
          /month
        </span>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className={`bg-[#141414] text-white text-sm font-semibold rounded-md border-[1px] border-[#262626] px-5 py-3.5 cursor-pointer`}
        >
          Start Free Trial
        </button>
        <Button>Choose Plan</Button>
      </div>
    </li>
  );
};

export default SubscriptionItem;
