"use client";
import { subscribersAnalytics } from "@/actions/subscribers.analytics";
import React, { useEffect, useState } from "react";

const UseSubscribersAnalytics = () => {
  const [subscribersData, setSubscribersData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    SubscribersAnalytics();
  }, []);
  const SubscribersAnalytics = async () => {
    const res = await subscribersAnalytics();
    const data = await JSON.parse(res || "");
    setSubscribersData(data.last7Months);
    setLoading(false);
  };

  return {subscribersData,loading};
};

export default UseSubscribersAnalytics;
