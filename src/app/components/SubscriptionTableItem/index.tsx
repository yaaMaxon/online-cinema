import { SubscriptionTableSettings } from "@/app/types/subscriptionTable";

interface ISubscriptionTableItemProps {
  plan: SubscriptionTableSettings;
}

const SubscriptionTableItem = ({ plan }: ISubscriptionTableItemProps) => {
  const { basic, standard, premium, features } = plan;

  return (
    <tr className="border border-[#262626]">
      <td className="text-default border border-[#262626] p-6">{features}</td>
      <td className="text-default border border-[#262626] p-6">{basic}</td>
      <td className="text-default border border-[#262626] p-6">{standard}</td>
      <td className="text-default border border-[#262626] p-6">{premium}</td>
    </tr>
  );
};

export default SubscriptionTableItem;
