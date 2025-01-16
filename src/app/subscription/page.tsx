import SubscriptionPlan from "../components/Subscription";
import ComparePlane from "../components/ComparePlane";
import FreeTrail from "../components/FreeTrail";

const Subscription = () => {
  return (
    <>
      <div className="mb-20 px-4 lg:mb-[120px] lg:px-20">
        <SubscriptionPlan />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <ComparePlane />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <FreeTrail />
      </div>
    </>
  );
};

export default Subscription;
