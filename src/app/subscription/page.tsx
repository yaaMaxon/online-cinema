import SubscriptionPlan from "../components/Subscription";
import ComparePlane from "../components/ComparePlane";
import FreeTrail from "../components/FreeTrail";

const Subscription = () => {
  return (
    <>
      <div
        id="plans"
        className="mb-20 px-4 lg:mb-[120px] lg:px-20 scroll-mt-[128px]"
      >
        <SubscriptionPlan />
      </div>
      <div
        id="features"
        className="mb-20 px-4 lg:mb-[113px] lg:px-20 scroll-mt-[128px]"
      >
        <ComparePlane />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <FreeTrail />
      </div>
    </>
  );
};

export default Subscription;
