import React from 'react'
import Slider from '.././components/Slider/slider'
import Features from '.././components/features'
import NewProducts from '.././components/NewProducts/newproducts'
import BestProducts from '.././components/BestSellers/bestseller'
import CustomerReviews from '.././components/customerreviews'
import FeaturedProducts from '.././components/FeaturedProducts/featuredproducts';
import LatestBlog from './latestblog'


function Home_page() {
    return (
        <div>
            <Slider />
            <Features />
            <NewProducts />
            <BestProducts />
            <CustomerReviews />
            <FeaturedProducts />
            <LatestBlog />
        </div>

    )
}

export default Home_page
