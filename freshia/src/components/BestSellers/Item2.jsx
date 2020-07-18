import React, { Component } from 'react'

class Item2 extends Component {
    render() {
        return (
            <>
                <div className="item">
                    <div className="item-inner">
                        <div className="item-img">
                            <div className="item-img-info"> <a className="product-image" title="Retis lapen casen"
                                href="/productdetails"> <img alt="Retis lapen casen" src={process.env.PUBLIC_URL + '/assets/images/product11.jpg'} />
                            </a>
                                <div className="box-hover">
                                    <ul className="add-to-links">
                                        <li><a className="link-quickview" href="quick_view.html">Quick View</a> </li>
                                        <li><a className="link-wishlist" href="wishlist.html">Wishlist</a> </li>
                                        <li><a className="link-compare" href="compare.html">Compare</a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item-info">
                            <div className="info-inner">
                                <div className="item-title"> <a title="Retis lapen casen" href="/productdetails"> Retis lapen
                                                            casen </a> </div>
                                <div className="item-content">
                                    <div className="rating">
                                        <div className="ratings">
                                            <div className="rating-box">
                                                <div style={{ width: '80%' }} className="rating"></div>
                                            </div>
                                            <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a
                                                href="#">Add Review</a> </p>
                                        </div>
                                    </div>
                                    <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">$325.00</span>
                                        </span> </div>
                                    </div>
                                    <div className="action">
                                        <button className="button btn-cart" type="button" title=""
                                            data-original-title="Add to Cart"><span>Add to Cart</span> </button>
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

export default Item2
