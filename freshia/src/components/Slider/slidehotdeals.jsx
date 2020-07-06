import React, { Component } from 'react'
import HotDealProduct from '../../products-images/product16.jpg'

class slidehotdeals extends Component {
    render() {
        return (
            <>
                <div className="col-md-3 hot-deal">
                    <ul className="products-grid">
                        <li className="right-space two-height item">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"> <a href="#/" title="Retis lapen casen" className="product-image"> <img
                                        src={HotDealProduct} alt="Retis lapen casen" /> </a>
                                        <div className="hot-label hot-top-left">Hot</div>
                                        <div className="box-hover">
                                            <ul className="add-to-links">
                                                <li><a className="link-quickview" href="quick_view.html">Quick View</a> </li>
                                                <li><a className="link-wishlist" href="wishlist.html">Wishlist</a> </li>
                                                <li><a className="link-compare" href="compare.html">Compare</a> </li>
                                            </ul>
                                        </div>
                                        <div className="box-timer">
                                            <div className="countbox_1 timer-grid"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="info-inner">
                                        <div className="item-title"> <a href="product_detail.html" title="Retis lapen casen"> Retis lapen
                                 casen </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"> <a href="#/">1 Review(s)</a> <span className="separator">|</span> <a
                                                        href="#/">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span>
                                                </span> </div>
                                            </div>
                                            <div className="action">
                                                <button data-original-title="Add to Cart" title="" type="button"
                                                    className="button btn-cart"><span>Add to Cart</span> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default slidehotdeals
