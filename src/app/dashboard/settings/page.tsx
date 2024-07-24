"use client"

import SettingsTab from "@/shared/components/tabs/settings.tab";
import useSettingFilter from "@/shared/hooks/useSettings";

const Page = () => {
  const {activeItem,setActiveItem}=useSettingFilter();
  return (
    <div className="w-full p-5">
      <SettingsTab/>
    </div>
  )
}

export default Page