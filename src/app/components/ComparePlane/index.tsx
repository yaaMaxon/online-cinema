import SubscriptionTable from "../SubscriptionTable";
import SubscriptionPlanListSm from "../SubscriptionPlanListSm";

const ComparePlane = () => {
  return (
    <div>
      <div className="mb-5 lg:mb-[60px]">
        <h1 className="text-white text-2xl font-bold mb-[8px] lg:mb-2 lg:text-[38px]">
          Compare our plans and find the right one for you
        </h1>
        <p className="text-default text-sm mb-10 lg:mb-0 lg:text-base">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that`s right for you.
        </p>
      </div>
      <SubscriptionTable />
      <SubscriptionPlanListSm />
    </div>
  );
};

export default ComparePlane;
