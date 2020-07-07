import React, { Component } from 'react';
import Slide from './slide'
import Categories from './categories'
import HotTrends from '../images/hot-trends-banner.jpg'
import ShopBy from './shopby'
import MyCart from './mycart'
import CompareProduct from './compareproducts'
import SideSlide from './sideslide'
import RecentlyViewed from './recentlyviewed'
import CommunityPoll from './communitypoll'
import PopularTags from './populartags'

class Grid extends Component {
    render() {
        return (
            <>
                {/* Bread Crums */}
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <ul>
                                    <li className="home"> <a href="/" title="Go to Home Page">Home</a> <span>/</span> </li>
                                    <li className="category1599"> <a href="/grid" title="">Salad</a> <span>/ </span> </li>
                                    <li className="category1600"> <a href="/grid" title="">Fruits Salad</a> <span>/</span> </li>
                                    <li className="category1601"> <strong>Green Salad</strong> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bread Crums */}

                {/** Main Contaiiner */}
                <section className='main-container col2-left-layout bounceInUp animated'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-9 col-sm-push-3'>
                                <Slide />
                                <article>
                                    {/* { Main grid products goes here} */}
                                </article>
                            </div>
                                <Categories />
                        </div>
                        <div className="hot-banner"><img alt="banner" src={HotTrends} /></div>
                        <ShopBy />
                        <MyCart />
                        <CompareProduct />
                        <SideSlide />
                        <RecentlyViewed />
                        <CommunityPoll />
                        <PopularTags />
                    </div>
                </section>

                {/** Main Contaiiner */}


            </>
        )
    }
}

export default Grid
