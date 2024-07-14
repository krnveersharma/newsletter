import Banner from '@/modules/home/elements/banner'
import Benefits from '@/modules/home/elements/benifits'
import Branding from '@/modules/home/elements/branding'
import FeatureHighlight from '@/modules/home/elements/featurehighlight'
import Pricing from '@/modules/home/elements/pricing'
import Home from '@/modules/home/home'
import Footer from '@/shared/widgets/footer/footer'
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
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Page