import React from 'react';
import Categories from '../../components/Categories/Categories';
//import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeaturedProduts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        {/* filter featured products by types */}
        <FeaturedProduts type='featured'/>
        <Categories/>
        <FeaturedProduts type='trending' />
        <Contact/>
    </div>
  )
}

export default Home