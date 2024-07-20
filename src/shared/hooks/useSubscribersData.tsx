"use client";

import { getSubscribers } from "@/actions/getsubscribers";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const useSubscribersData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useClerk();
  useEffect(() => {
    GetSubscribers();
  }, [user]);
  const GetSubscribers = async () => {
    try {
      const res = await getSubscribers({ newsLetterOwnerId: user?.id! });
      const data=await JSON.parse(res||"");
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return { data,loading };
};

export default useSubscribersData;
