import React, { Component } from 'react'
import Banner1 from '../images/offer-banner2.jpg'
import RelatedProduct1 from '../products-images/product1.jpg'
import RelatedProduct2 from '../products-images/product2.jpg'
import RelatedProduct3 from '../products-images/product13.jpg'
import RelatedProduct4 from '../products-images/product4.jpg'
import RelatedProduct5 from '../products-images/product5.jpg'
import RelatedProduct6 from '../products-images/product6.jpg'
import RelatedProduct7 from '../products-images/product7.jpg'

class relatedproductslider extends Component {
    render() {
        return (
            <>
                <div className="related-pro">
                    {/* Related Slider */}
                    <div className="slider-items-products">
                        <div className="related-block">
                            <div id="related-products-slider" className="product-flexslider hidden-buttons">
                                <div className="home-block-inner">
                                    <div className="block-title">
                                        <h2>Related</h2>
                                    </div>
                                    <div className="pretext"><a title="Retis lapen casen" href="#"> <img alt="Retis lapen casen" src={Banner1} /> </a>
                                        <div className="offer-text">Save upto 25% Today!</div>
                                    </div>
                                    <a href="grid.html" className="view_more_bnt">View All</a>

                                </div>
                                <div className="slider-items slider-width-col4 products-grid block-content">
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="Retis lapen casen" src={RelatedProduct1} /> </a>
                                                    <div className="new-label new-top-right">new</div>
                                                    <div className="box-hover">
                                                        <ul className="add-to-links">
                                                            <li><a className="link-quickview" href="quick_view.html">Quick View</a>
                                                            </li>
                                                            <li><a className="link-wishlist" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li><a className="link-compare" href="compare.html">Compare</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="info-inner">
                                                    <div className="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis lapen casen </a> </div>
                                                    <div className="rating">
                                                        <div className="ratings">
                                                            <div className="rating-box">
                                                                <div style={{ width: '80%' }} className="rating"></div>
                                                            </div>
                                                            <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                        </div>
                                                    </div>
                                                    <div className="item-content">
                                                        <div className="item-price">
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item */}
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="Retis lapen casen" src={RelatedProduct2} /> </a>
                                                    <div className="box-hover">
                                                        <ul className="add-to-links">
                                                            <li><a className="link-quickview" href="quick_view.html">Quick View</a>
                                                            </li>
                                                            <li><a className="link-wishlist" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li><a className="link-compare" href="compare.html">Compare</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="info-inner">
                                                    <div className="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis lapen casen </a> </div>
                                                    <div className="item-content">
                                                        <div className="rating">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div style={{ width: '80%' }} className="rating"></div>
                                                                </div>
                                                                <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div className="item-price">
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$235.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item */}

                                    {/* Item */}
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="Retis lapen casen" src={RelatedProduct3} /> </a>
                                                    <div className="box-hover">
                                                        <ul className="add-to-links">
                                                            <li><a className="link-quickview" href="quick_view.html">Quick View</a>
                                                            </li>
                                                            <li><a className="link-wishlist" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li><a className="link-compare" href="compare.html">Compare</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="info-inner">
                                                    <div className="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis lapen casen </a> </div>
                                                    <div className="item-content">
                                                        <div className="rating">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div style={{ width: '80%' }} className="rating"></div>
                                                                </div>
                                                                <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div className="item-price">
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$325.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item */}

                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="Retis lapen casen" src={RelatedProduct4} /> </a>
                                                    <div className="new-label new-top-left">new</div>
                                                    <div className="box-hover">
                                                        <ul className="add-to-links">
                                                            <li><a className="link-quickview" href="quick_view.html">Quick View</a>
                                                            </li>
                                                            <li><a className="link-wishlist" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li><a className="link-compare" href="compare.html">Compare</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="info-inner">
                                                    <div className="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis lapen casen </a> </div>
                                                    <div className="item-content">
                                                        <div className="rating">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div style={{ width: '80%' }} className="rating"></div>
                                                                </div>
                                                                <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div className="item-price">
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$425.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item */}
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="Retis lapen casen" src={RelatedProduct5} /> </a>
                                                    <div className="box-hover">
                                                        <ul className="add-to-links">
                                                            <li><a className="link-quickview" href="quick_view.html">Quick View</a>
                                                            </li>
                                                            <li><a className="link-wishlist" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li><a className="link-compare" href="compare.html">Compare</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="info-inner">
                                                    <div className="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis lapen casen </a> </div>
                                                    <div className="item-content">
                                                        <div className="rating">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div style={{ width: '80%' }} className="rating"></div>
                                                                </div>
                                                                <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div className="item-price">
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$525.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item */}
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="Retis lapen casen" src={RelatedProduct6} /> </a>
                                                    <div className="box-hover">
                                                        <ul className="add-to-links">
                                                            <li><a className="link-quickview" href="quick_view.html">Quick View</a>
                                                            </li>
                                                            <li><a className="link-wishlist" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li><a className="link-compare" href="compare.html">Compare</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="info-inner">
                                                    <div className="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis lapen casen </a> </div>
                                                    <div className="item-content">
                                                        <div className="rating">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div style={{ width: '80%' }} className="rating"></div>
                                                                </div>
                                                                <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div className="item-price">
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$225.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Item */}
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="Retis lapen casen" src={RelatedProduct7} /> </a>
                                                    <div className="box-hover">
                                                        <ul className="add-to-links">
                                                            <li><a className="link-quickview" href="quick_view.html">Quick View</a>
                                                            </li>
                                                            <li><a className="link-wishlist" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li><a className="link-compare" href="compare.html">Compare</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="info-inner">
                                                    <div className="item-title"> <a title="Retis lapen casen" href="product_detail.html"> Retis lapen casen </a> </div>
                                                    <div className="item-content">
                                                        <div className="rating">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div style={{ width: '80%' }} className="rating"></div>
                                                                </div>
                                                                <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div className="item-price">
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$185.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item  */}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* End related products Slider   */}
            </>
        )
    }
}

export default relatedproductslider
