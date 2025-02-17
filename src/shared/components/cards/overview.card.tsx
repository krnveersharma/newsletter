"use client";

import UseSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics";
import { ICONS } from "@/shared/utils/icons";
import { useEffect } from "react";
import AnimatedLoading from "../loading/loading";

const DashboardOverViewCard = () => {
  const { subscribersData, loading } = UseSubscribersAnalytics();
  let lastMonthSubscribers =
    !loading && subscribersData[subscribersData.length - 1]?.count;
  const previousLastMonthSubscribers =
    !loading && subscribersData[subscribersData.length - 2]?.count;
  let comaprePercentage = 0;
  if (!loading) {
    if (previousLastMonthSubscribers.count > 0) {
      comaprePercentage =
        ((lastMonthSubscribers - previousLastMonthSubscribers) /
          previousLastMonthSubscribers) *
        100;
    } else {
      comaprePercentage = 100;
    }
  }
  return (
    <div className="w-full  flex bg-white border rounded">
      {/* subscribers */}
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Subscribers</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">
            {loading ? (
              <>
                <AnimatedLoading />
              </>
            ) : (
              lastMonthSubscribers
            )}
          </span>
          <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
            <span className="text-[#21C55D]">{ICONS.topArrow}</span>
            <span className="text-sm pl-1">{comaprePercentage}%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
      {/* Open Rate */}
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Open Rate</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">0</span>
          <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
            <span className="text-xl">-</span>
            <span className="text-sm pl-1">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
      {/* Click Rate */}
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Click Rate</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">0</span>
          <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
            <span className="text-xl">-</span>
            <span className="text-sm pl-1">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
    </div>
  );
};

export default DashboardOverViewCard;
