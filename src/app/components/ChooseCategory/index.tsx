"use client";

import { useState } from "react";
import MoviesCategories from "../MoviesCategories";
import ShowsCategories from "../ShowsCategories";

const ChooseCategory = () => {
  const [activePlan, setActivePlan] = useState("Movies");

  const handleActivePlan = (plan: string) => {
    setActivePlan(plan);
  };

  return (
    <div>
      <div className="flex justify-center">
        <ul className="inline-flex justify-center bg-[#0F0F0F] rounded-lg border-[1px] border-[#262626] p-2 mb-[50px] lg:hidden ">
          {["Movies", "Shows"].map((plan, index) => (
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
      <div className="lg:hidden">
        {activePlan === "Movies" ? <MoviesCategories /> : <ShowsCategories />}
      </div>
      <div className="hidden lg:block">
        <MoviesCategories />
        <ShowsCategories />
      </div>
    </div>
  );
};

export default ChooseCategory;
