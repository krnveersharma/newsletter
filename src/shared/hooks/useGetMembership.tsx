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
      .then((res:string|undefined) => {
        res=JSON.parse(res!);
        setData(res);
        setLoading(false);
      })
      .catch((error) => {

        setLoading(false);
      });
     
  };
  return JSON.stringify({data,loading});
};
