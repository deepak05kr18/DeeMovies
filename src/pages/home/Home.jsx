import React from 'react'
import "./style.scss";
import HeroBanner from './heroBanner/heroBanner';
import Trending from './trending/trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Upcoming from './Upcoming/Upcoming';
Upcoming
TopRated
Popular
HeroBanner


const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <Upcoming />
     
    </div>
  )
}

export default Home;