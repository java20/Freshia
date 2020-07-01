import React, { Component } from 'react'
import product1 from '../products-images/product5.jpg'
import product2 from '../products-images/product1.jpg'

class newproducts extends Component {
    render() {
        return (
            <>
                <div className='content-page'>
                    <div className='container'>
                        {/* featured category fashion */}
                        <div className='category-product'>
                            <div className='navbar nav-menu'>
                                <div className='navbar-collapse'>
                                    <ul className='nav navbar-nav'>
                                        <li>
                                            <div className='new_title'>
                                                <h2>New Products</h2>
                                            </div>
                                        </li>
                                        <li className="active"><a data-toggle="tab" href="#tab-1">Women</a> </li>
                                        <li><a data-toggle="tab" href="#tab-2">Furniture</a> </li>
                                        <li><a data-toggle="tab" href="#tab-3">Men</a> </li>
                                        <li><a data-toggle="tab" href="#tab-4">Kids</a> </li>
                                        <li><a data-toggle="tab" href="#tab-5">Accessories</a> </li>
                                    </ul>
                                </div>
                                {/* Navbar Collapse */}
                            </div>
                            <div className='product-bestseller'>
                                <div className='product-bestseller-content'>
                                    <div className='product-bestseller-list'>
                                        <div className='container'>
                                            {/** Tab product */}
                                            <div className='tab-panel active' id='tab1'>
                                                <div className='category-products'>
                                                    <ul className='product-grid'>
                                                        <li class="item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                                            <div class="item-inner">
                                                                <div class="item-img">
                                                                    <div class="item-img-info"> <a class="product-image" title="Retis lapen casen"
                                                                        href="product_detail.html"> <img alt="Retis lapen casen"
                                                                            src={product1} /> </a>
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
                                                                        <div class="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis
                                    lapen casen </a> </div>
                                                                        <div class="item-content">
                                                                            <div class="rating">
                                                                                <div class="ratings">
                                                                                    <div class="rating-box">
                                                                                        <div style={{width:'80%'}} class="rating"></div>
                                                                                    </div>
                                                                                    <p class="rating-links"> <a href="#">1 Review(s)</a> <span
                                                                                        class="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="item-price">
                                                                                <div class="price-box"> <span class="regular-price"> <span
                                                                                    class="price">$155.00</span> </span> </div>
                                                                            </div>
                                                                            <div class="action">
                                                                                <button class="button btn-cart" type="button" title=""
                                                                                    data-original-title="Add to Cart"><span>Add to Cart</span> </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                                            <div class="item-inner">
                                                                <div class="item-img">
                                                                    <div class="item-img-info"> <a class="product-image" title="Retis lapen casen"
                                                                        href="product_detail.html"> <img alt="Retis lapen casen"
                                                                            src={product2} /> </a>
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
                                                                        <div class="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis
                                    lapen casen </a> </div>
                                                                        <div class="item-content">
                                                                            <div class="rating">
                                                                                <div class="ratings">
                                                                                    <div class="rating-box">
                                                                                        <div style={{width:'80%'}} class="rating"></div>
                                                                                    </div>
                                                                                    <p class="rating-links"> <a href="#">1 Review(s)</a> <span
                                                                                        class="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="item-price">
                                                                                <div class="price-box"> <span class="regular-price"> <span
                                                                                    class="price">$225.00</span> </span> </div>
                                                                            </div>
                                                                            <div class="action">
                                                                                <button class="button btn-cart" type="button" title=""
                                                                                    data-original-title="Add to Cart"><span>Add to Cart</span> </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default newproducts
