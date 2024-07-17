'use client'
import { ICONS } from '@/shared/utils/icons';
import { useUser } from '@clerk/nextjs'
import React from 'react'
import DashboardItems from './dashboarditems';
import UserPlan from './user.plan';

const DashBoardSideBar = () => {
    const {user}=useUser();
  return (
    <div className='p-2'>
        <div className='p-2 flex items-center bg-[#f5f5f5] rounded'>
            <span className='text-2xl'>{ICONS.home}</span>
            <h5 className='pl-2 pt-1 capitalize'>{user?.username} Newsletter</h5>
        </div>
        <div>
            <DashboardItems/>
            <UserPlan/>
            <DashboardItems bottomContent={true}
/>
        </div>
    </div>
  )
}

export default DashBoardSideBar