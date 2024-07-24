import useSettingFilter from '@/shared/hooks/useSettings';
import { Tab, Tabs } from '@nextui-org/react';
import React from 'react'

const SettingsTab = () => {
  const {activeItem,setActiveItem}=useSettingFilter();
  return (
    <Tabs
      variant='underlined'
      aria-label='Tabs variants'
      selectedKey={activeItem}
      onSelectionChange={setActiveItem}
    >
      <Tab key={'API ACESS'} title='API ACCESS'/>
      <Tab key={'CUSTOMIZE PROFILE'} title='CUSTOMIZE PROFILE'/>

    </Tabs>
  )
}

export default SettingsTab