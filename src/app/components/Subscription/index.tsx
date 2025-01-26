"use client";

import { currentPlans } from "./CurrentPlans";
import SubscriptionItem from "../SubscriptionItem/SubscriptionItem";
import { useState } from "react";

const Subscription = () => {
  const [activePlan, setActivePlan] = useState("Monthly");

  const handleActivePlan = (plan: string) => {
    setActivePlan(plan);
  };

  return (
    <div>
      <div className="mb-10 lg:flex lg:gap-20 lg:items-center">
        <div>
          <h2 className="text-white text-2xl font-bold mb-2.5 lg:text-[28px]">
            Choose the plan that`s right for you
          </h2>
          <p className="text-default text-sm mb-5 lg:text-base lg:mb-0">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <ul className="flex bg-[#0F0F0F] rounded-lg border-[1px] border-[#262626] p-2 w-[190px]">
          {["Monthly", "Yearly"].map((plan, index) => (
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
      </div>
      <ul className="flex flex-col gap-5 lg:flex-row">
        {currentPlans.map(({ plan, description, price }, index) => (
          <SubscriptionItem
            key={index}
            plan={plan}
            description={description}
            price={activePlan === "Yearly" ? price * 12 : price}
          />
        ))}
      </ul>
    </div>
  );
};

export default Subscription;
