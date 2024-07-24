import { settingsActiveItem } from "@/app/configs/constants";
import { useAtom } from "jotai";

const useSettingFilter=()=>{
    const [activeItem,setActiveItem]=useAtom<string>(settingsActiveItem);
    return {activeItem,setActiveItem};
}

export default useSettingFilter;