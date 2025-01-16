import SubscriptionTableItem from "../SubscriptionTableItem";
import { planeConditions } from "../../types/CamparePlaneSettings";

const SubscriptionTable = () => {
  return (
    <>
      <table className="hidden lg:block">
        <thead className="bg-[#0F0F0F]">
          <tr>
            <th className="text-lg text-left font-semibold text-white p-6 border border-[#262626]">
              Features
            </th>
            <th className="text-lg text-left font-semibold text-white p-6 border border-[#262626]">
              Basic
            </th>
            <th className="flex gap-2 items-center text-lg font-semibold text-white p-6 border border-[#262626]">
              Standard
              <span className="text-sm text-white p-[6px] bg-[#E50000] rounded-sm">
                Popular
              </span>
            </th>
            <th className="text-lg text-left font-semibold text-white p-6 border border-[#262626]">
              Premium
            </th>
          </tr>
        </thead>
        <tbody>
          {planeConditions.length > 0 &&
            planeConditions.map((plan, index) => (
              <SubscriptionTableItem key={index} plan={plan} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default SubscriptionTable;
