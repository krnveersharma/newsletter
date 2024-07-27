"use client";

import SettingsTab from "@/shared/components/tabs/settings.tab";
import { useGetMembership } from "@/shared/hooks/useGetMembership";
import useSettingFilter from "@/shared/hooks/useSettings";
import { UserProfile } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import { generateApiKey } from "@/shared/widgets/token.generator";
const Page = () => {
  const { activeItem, setActiveItem } = useSettingFilter();
  const { data } = JSON.parse(useGetMembership());
  const [apiKey, setApiKey] = useState("second")
  useEffect(() => {
    const apiKey=Cookies.get('api_key');
    if(!apiKey){
      generateApiKeyHandler();
    }
    else{
      setApiKey(apiKey);
    }
  }, []);
  const generateApiKeyHandler=async()=>{
    await generateApiKey().then((res)=>{
      Cookies.set('api_key',res);
    });
  }

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
          {data?.plan === "GROW" || data?.plan === "LAUNCH" ? (
            <div className="w- full h-[90vh] flex items-center justify-center">
              <h3>
                Please update your subscription plan to get access to the API
              </h3>
            </div>
          ) : (
            <div className="p-4">
              <h3>API KEY:</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
