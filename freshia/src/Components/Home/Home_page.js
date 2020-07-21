import React from 'react'
import Slider from '.././Home/Slider/slider'
import Features from '.././Home/features'
import NewProducts from '.././Home/NewProducts/newproducts'
import BestProducts from '.././Home/BestSellers/bestseller'
import CustomerReviews from '.././Home/customerreviews'
import FeaturedProducts from '.././Home/FeaturedProducts/featuredproducts';
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
