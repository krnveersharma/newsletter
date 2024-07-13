import Banner from '@/modules/home/features/banner'
import Benefits from '@/modules/home/features/benifits'
import Branding from '@/modules/home/features/branding'
import FeatureHighlight from '@/modules/home/features/featurehighlight'
import Home from '@/modules/home/home'
import Header from '@/shared/widgets/header/header'
import Logo from '@/shared/widgets/header/logo'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Branding/>
      <Benefits/>
      <FeatureHighlight/>
    </div>
  )
}

export default Page