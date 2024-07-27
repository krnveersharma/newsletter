import useSettingFilter from '@/shared/hooks/useSettings';
import { Tab, Tabs } from '@nextui-org/react';
import React from 'react'

const SettingsTab = () => {
  const {activeItem,setActiveItem}=useSettingFilter();
  const handleSelectionChange = (key: React.Key) => {
    setActiveItem(String(key)); 
  };
  return (
    <Tabs
      variant='underlined'
      aria-label='Tabs variants'
      selectedKey={activeItem}
      onSelectionChange={handleSelectionChange}
    >
      <Tab key={'API Access'} title='API ACCESS'/>
      <Tab key={'Customize Profile'} title='CUSTOMIZE PROFILE'/>

    </Tabs>
  )
}

export default SettingsTab