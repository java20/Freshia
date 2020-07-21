import React, { Component } from 'react'
import Slide from '../Grid/slide'
import Products from './products'
import Categories from '../Grid/categories'
import ShopBy from '../Grid/shopby'
import MyCart from '../Grid/mycart'
import CompareProduct from '../Grid/compareproducts'
import SideSlide from '../Grid/sideslide'
import RecentlyViewed from '../Grid/recentlyviewed'
import CommunityPoll from '../Grid/communitypoll'
import PopularTags from '../Grid/populartags'


class list extends Component {
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
                                <article className='col-main'>
                                    <Products />
                                </article>
                            </div>
                            <div className='col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9'>
                                <aside className='col-left sidebar'>
                                    <Categories />
                                    <div className="hot-banner"><img alt="banner" src={process.env.PUBLIC_URL + '/assets/images/hot-trends-banner.jpg'} /></div>
                                    <ShopBy />
                                    <MyCart />
                                    <CompareProduct />
                                    <SideSlide />
                                    <RecentlyViewed />
                                    <CommunityPoll />
                                    <PopularTags />
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

                {/** Main Contaiiner */}
            </>
        )
    }
}

export default list
