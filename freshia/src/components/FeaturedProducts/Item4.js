import React, { Component } from 'react'
import Product4 from '../../products-images/product4.jpg'

class Item4 extends Component {
    render() {
        return (
            <div>
                <div class="item">
                    <div class="item-inner">
                        <div class="item-img">
                            <div class="item-img-info"> <a class="product-image" title="Retis lapen casen"
                                href="product_detail.html"> <img alt="Retis lapen casen" src={Product4} />
                            </a>
                                <div class="new-label new-top-left">new</div>
                                <div class="box-hover">
                                    <ul class="add-to-links">
                                        <li><a class="link-quickview" href="quick_view.html">Quick View</a> </li>
                                        <li><a class="link-wishlist" href="wishlist.html">Wishlist</a> </li>
                                        <li><a class="link-compare" href="compare.html">Compare</a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item-info">
                            <div class="info-inner">
                                <div class="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis lapen
                            casen </a> </div>
                                <div class="item-content">
                                    <div class="rating">
                                        <div class="ratings">
                                            <div class="rating-box">
                                                <div style={{ width: '80%' }} class="rating"></div>
                                            </div>
                                            <p class="rating-links"> <a href="#">1 Review(s)</a> <span class="separator">|</span> <a
                                                href="#">Add Review</a> </p>
                                        </div>
                                    </div>
                                    <div class="item-price">
                                        <div class="price-box"> <span class="regular-price"> <span class="price">$425.00</span>
                                        </span> </div>
                                    </div>
                                    <div class="action">
                                        <button class="button btn-cart" type="button" title=""
                                            data-original-title="Add to Cart"><span>Add to Cart</span> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item4
