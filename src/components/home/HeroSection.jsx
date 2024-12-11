import React from 'react'
import SearchBar from './SearchBar'

const HeroSection = () => {
  return (
    <div>
        <img src="/assets/Hero-section.png" alt="" className="relative z-0"/>
        <div className="container relative z-10 top-[-20px] sm:top-[-25px] md:top-[-35px] lg:top-[-40px] xl:top-[-50px] xxl:top-[-60px]">
          <SearchBar />
        </div>
    </div>
  )
}

export default HeroSection