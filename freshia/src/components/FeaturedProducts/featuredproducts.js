import React, { Component } from 'react'
import Banner from '../../images/offer-banner1.jpg'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'
import Item4 from './Item4'
import Item5 from './Item5'
import Item6 from './Item6'
import Item7 from './Item7'



class featuredproducts extends Component {
    render() {
        return (
            <div>
                <section class="featured-pro">
                    <div class="container">
                        <div class="slider-items-products">
                            <div class="featured-block">
                                <div id="featured-slider" class="product-flexslider hidden-buttons">
                                    <div class="home-block-inner">
                                        <div class="block-title">
                                            <h2>Featured</h2>
                                        </div>
                                        <div class="pretext"><a title="Retis lapen casen" href="#"> <img alt="Retis lapen casen"
                                            src={Banner} /> </a>
                                            <div class="offer-text">Use Promo Fresh123</div>
                                        </div>
                                        <a href="grid.html" class="view_more_bnt">View All</a>
                                    </div>
                                    <div class="slider-items slider-width-col4 products-grid block-content">
                                        <Item1 />
                                        <Item2 />
                                        <Item3 />
                                        <Item4 />
                                        <Item5 />
                                        <Item6 />
                                        <Item7 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default featuredproducts
