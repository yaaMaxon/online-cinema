import { SubscriptionTableSettings } from "@/app/types/subscriptionTable";

interface ISubscriptionTableItemProps {
  plan: SubscriptionTableSettings;
  index: number;
  activePlan: string;
}

const SubscriptionPlanItemSm = ({
  plan,
  index,
  activePlan,
}: ISubscriptionTableItemProps) => {
  const { basic, standard, premium, features } = plan;

  const colSpanClass = index === 2 || index === 3 ? "col-span-2" : "col-span-1";

  return (
    <li className={`flex flex-col gap-1 ${colSpanClass}`}>
      <span className="text-sm font-medium text-default">{features}</span>
      <span className="text-sm font-medium text-[#F1F1F3]">
        {(activePlan === "Basic" && basic) ||
          (activePlan === "Standard" && standard) ||
          (activePlan === "Premium" && premium)}
      </span>
    </li>
  );
};

export default SubscriptionPlanItemSm;
