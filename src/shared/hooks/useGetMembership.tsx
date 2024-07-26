"use client";

import { getMembership } from "@/actions/get.membership";
import { useEffect, useState } from "react";

export const useGetMembership = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    handleGetMembership();
  }, []);

  const handleGetMembership = async () => {
    await getMembership()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setLoading(false);
      });
  };
  return {data,loading};
};
