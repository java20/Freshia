import React, { Component } from 'react'
import Product1 from '../products-images/product16.jpg'
import Product2 from '../products-images/product2.jpg'
import Product3 from '../products-images/product3.jpg'
import Product4 from '../products-images/product4.jpg'
import Product5 from '../products-images/product5.jpg'
import Product6 from '../products-images/product6.jpg'
import Product7 from '../products-images/product7.jpg'
import Product8 from '../products-images/product8.jpg'
import Product9 from '../products-images/product9.jpg'
import Product10 from '../products-images/product10.jpg'
import Product11 from '../products-images/product11.jpg'
import Product12 from '../products-images/product12.jpg'
import Product13 from '../products-images/product13.jpg'
import Product14 from '../products-images/product14.jpg'
import Product15 from '../products-images/product1.jpg'

class products extends Component {
    render() {
        return (
            <>
                <h2 className="page-heading"> <span className="page-heading-title">Vegetables</span> </h2>
                <div className="display-product-option">
                    <div className="pager hidden-xs">
                        <div className="pages">
                            <ul className="pagination">
                                <li><a href="/grid">&laquo;</a></li>
                                <li className="active"><a href="/grid">1</a></li>
                                <li><a href="/grid">2</a></li>
                                <li><a href="/grid">3</a></li>
                                <li><a href="/grid">4</a></li>
                                <li><a href="/grid">5</a></li>
                                <li><a href="/grid">&raquo;</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sorter">
                        <div className="view-mode"> <span title="Grid" className="button button-active button-grid">&nbsp;</span><a href="list.html" title="List" className="button-list">&nbsp;</a> </div>
                    </div>
                </div>
                <div className="category-products">
                    <ul className="products-grid">
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product1} alt="Retis lapen casen" /></a>
                                        <div className="new-label new-top-left">New</div>
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
                                        <div className="item-title"> <a title="Retis lapen casen" href="/grid"> Retis lapen casen </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '80%' }} className="rating"></div>
                                                    </div>
                                                    <p className="rating-links"> <a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box">
                                                    <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                    <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product2} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product3} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product4} alt="Retis lapen casen" /></a>
                                        <div className="new-label new-top-left">New</div>
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
                                        <div className="item-title"> <a title="Retis lapen casen" href="/grid"> Retis lapen casen </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '80%' }} className="rating"></div>
                                                    </div>
                                                    <p className="rating-links"> <a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box">
                                                    <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                    <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product5} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product6} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product7} alt="Retis lapen casen" /></a>
                                        <div className="new-label new-top-left">New</div>
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
                                        <div className="item-title"> <a title="Retis lapen casen" href="/grid"> Retis lapen casen </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '80%' }} className="rating"></div>
                                                    </div>
                                                    <p className="rating-links"> <a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box">
                                                    <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                    <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product8} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product9} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product10} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$249.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product11} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$148.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product12} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$458.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product13} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product14} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$600.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><a href="/grid" title="Retis lapen casen" className="product-image"><img src={Product15} alt="Retis lapen casen" /></a>
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
                                        <div className="item-title"><a href="/grid" title="Retis lapen casen">Retis lapen casen</a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <p className="rating-links"><a href="/grid">1 Review(s)</a> <span className="separator">|</span> <a href="/grid">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span className="price">$999.00</span> </span> </div>
                                            </div>
                                            <div className="action">
                                                <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="toolbar">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div id="sort-by">
                                <label className="left">Sort By: </label>
                                <ul>
                                    <li><a href="/grid">Position<span className="right-arrow"></span></a>
                                        <ul>
                                            <li><a href="/grid">Name</a></li>
                                            <li><a href="/grid">Price</a></li>
                                            <li><a href="/grid">Position</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-7 col-md-5">
                            <div className="pager">
                                <div className="pages">
                                    <label>Page:</label>
                                    <ul className="pagination">
                                        <li><a href="/grid">&laquo;</a></li>
                                        <li className="active"><a href="/grid">1</a></li>
                                        <li><a href="/grid">2</a></li>
                                        <li><a href="/grid">3</a></li>
                                        <li><a href="/grid">4</a></li>
                                        <li><a href="/grid">5</a></li>
                                        <li><a href="/grid">&raquo;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-3">
                            <div id="limiter">
                                <label>View: </label>
                                <ul>
                                    <li><a href="/grid">09<span className="right-arrow"></span></a>
                                        <ul>
                                            <li><a href="/grid">15</a></li>
                                            <li><a href="/grid">20</a></li>
                                            <li><a href="/grid">30</a></li>
                                            <li><a href="/grid">35</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <a className="button-asc left" href="/grid" title="Set Descending Direction"><span className="top_arrow"></span></a> </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default products
