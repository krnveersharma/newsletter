"use client";

import SettingsTab from "@/shared/components/tabs/settings.tab";
import { useGetMembership } from "@/shared/hooks/useGetMembership";
import useSettingFilter from "@/shared/hooks/useSettings";
import { UserProfile } from "@clerk/nextjs";
import { useEffect } from "react";

const Page = () => {
  const { activeItem, setActiveItem } = useSettingFilter();
  const { data } = JSON.parse(useGetMembership());
useEffect(()=>{
  console.log("datghjka: ",data)
},[data])


  return (
    <div className="w-full p-5">
      <SettingsTab />
      {activeItem === "Customize Profile" && (
        <div className="w-full flex justify-center">
          <UserProfile />
        </div>
      )}
      {activeItem === "API Access" && (
        <div>
          {data?.plan === "GROW" ? (
            <div className="w- full h-screen flex items-center justify-center">
            <h3>
              Please update your subscription plan to get access to the API
            </h3>
            </div>
          ) : (
            <h1>Ok</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
