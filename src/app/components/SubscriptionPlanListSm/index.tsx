"use client";

import SubscriptionPlanItemSm from "../SubscriptionPlanItemSm";
import { planeConditions } from "../../types/CamparePlaneSettings";
import { useState } from "react";

const SubscriptionPlanListSm = () => {
  const [activePlan, setActivePlan] = useState("Standard");

  const handleActivePlan = (plan: string) => {
    setActivePlan(plan);
  };

  return (
    <div className="lg:hidden">
      <ul className="flex bg-[#0F0F0F] rounded-lg border-[1px] border-[#262626] p-2 mb-5">
        {["Basic", "Standard", "Premium"].map((plan, index) => (
          <li
            key={index}
            className={`${
              activePlan === plan
                ? "bg-[#1F1F1F] rounded-md text-white"
                : "text-default"
            } text-sm font-medium py-3 px-5 cursor-pointer`}
            onClick={() => handleActivePlan(plan)}
          >
            {plan}
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-2 gap-6 bg-[#0F0F0F] border border-[#262626] rounded-xl p-6">
        {planeConditions.length > 0 &&
          planeConditions.map((plan, index) => (
            <SubscriptionPlanItemSm
              key={index}
              plan={plan}
              index={index}
              activePlan={activePlan}
            />
          ))}
      </ul>
    </div>
  );
};

export default SubscriptionPlanListSm;
