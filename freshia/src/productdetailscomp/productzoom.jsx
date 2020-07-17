import React, { Component } from 'react'
import Product1 from '../products-images/product16.jpg'
import Product2 from '../products-images/product2.jpg'
import Product3 from '../products-images/product3.jpg'
import Product4 from '../products-images/product4.jpg'
import Product5 from '../products-images/product5.jpg'
import Product6 from '../products-images/product6.jpg'

class productzoom extends Component {

    constructor(props) {
        super(props)

        this.state = {
            quantity: 1
        }
    }

    handleMinusButton = () => {
        let result = document.getElementById('qty');
        let qty = result.value;
        if (!isNaN(qty) && qty >= 0)
            this.setState({
                quantity: this.state.quantity - 1
            });
        else
            return false;
    }

    handlePlusButton = () => {
        var result = document.getElementById('qty');
        var qty = result.value;
        if (!isNaN(qty) && qty < 12)
            this.setState({
                quantity: this.state.quantity + 1
            });
        else
            return false;
    }


    render() {
        return (
            <>
                <div className="col-main">
                    <div className="product-view">
                        <div className="product-essential">
                            <form action="#" method="post" id="product_addtocart_form">
                                <input name="form_key" value="6UbXroakyQlbfQzK" type="hidden" />
                                <div className="product-img-box col-lg-4 col-sm-5 col-xs-12">
                                    <div className="new-label new-top-left"> New </div>
                                    <div className="product-image">
                                        <div className="product-full"> <img id="product-zoom" src={Product1} data-zoom-image={Product1} alt="product-image" /> </div>
                                        <div className="more-views">
                                            <div className="slider-items-products">
                                                <div id="gallery_01" className="product-flexslider hidden-buttons product-img-thumb">
                                                    <div className="slider-items slider-width-col4 block-content owl-carousel owl-theme"
                                                        style={{ opacity: '1', display: 'block' }}>
                                                        <div className="owl-wrapper-outer">
                                                            <div className='owl-wrapper' style={{ width: '330px', left: '0px', display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(-66px, 0px, 0px)' }}>
                                                                <div className="owl-item" style={{ width: '50px' }}>
                                                                    <div className='more-views-items'>
                                                                        <a href='#' data-image={Product2}
                                                                            data-zoom-image={Product2}>
                                                                            <img id='product-zoom' src={Product2} alt='product-image' />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item" style={{ width: '50px' }}>
                                                                    <div className='more-views-items'>
                                                                        <a href='#' data-image={Product3}
                                                                            data-zoom-image={Product3}>
                                                                            <img id='product-zoom' src={Product3} alt='product-image' />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item" style={{ width: '50px' }}>
                                                                    <div className='more-views-items'>
                                                                        <a href='#' data-image={Product4}
                                                                            data-zoom-image={Product4}>
                                                                            <img id='product-zoom' src={Product4} alt='product-image' />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item" style={{ width: '50px' }}>
                                                                    <div className='more-views-items'>
                                                                        <a href='#' data-image={Product5}
                                                                            data-zoom-image={Product5}>
                                                                            <img id='product-zoom' src={Product5} alt='product-image' />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item" style={{ width: '50px' }}>
                                                                    <div className='more-views-items'>
                                                                        <a href='#' data-image={Product6}
                                                                            data-zoom-image={Product6}>
                                                                            <img id='product-zoom' src={Product6} alt='product-image' />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="owl-controls clickable">
                                                            <div className="owl-buttons">
                                                                <div className="owl-prev">
                                                                    <a className="flex-prev"></a>
                                                                </div>
                                                                <div className="owl-next">
                                                                    <a className="flex-next"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end: more-images   */}
                                <div className="product-shop col-lg-8 col-sm-7 col-xs-12">
                                    <div className="product-next-prev"> <a className="product-next" href="#"><span></span></a> <a className="product-prev" href="#"><span></span></a> </div>
                                    <div className="product-name">
                                        <h1>Grapes - Thompson Seedless</h1>
                                    </div>
                                    <div className="ratings">
                                        <div className="rating-box">
                                            <div style={{ width: '60%' }} className="rating"></div>
                                        </div>
                                        <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Your Review</a> </p>
                                    </div>
                                    <div className="price-block">
                                        <div className="price-box">
                                            <p className="special-price"> <span className="price-label">Special Price</span> <span id="product-price-48" className="price"> $309.99 </span> </p>
                                            <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $315.99 </span> </p>
                                            <p className="availability in-stock pull-right"><span>In Stock</span></p>
                                        </div>
                                    </div>
                                    <div className="short-description">
                                        <h2>Quick Overview</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. </p>
                                    </div>
                                    <div className="add-to-box">
                                        <div className="add-to-cart">
                                            <div className="pull-left">
                                                <div className="custom pull-left">
                                                    <button onClick={this.handleMinusButton} className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                                                    <input type="text" className="input-text qty" title="Qty" value={this.state.quantity} maxlength="12" id="qty" name="qty" />
                                                    <button onClick={this.handlePlusButton} className="increase items-count" type="button"><i className="fa fa-plus">&nbsp;</i></button>
                                                </div>
                                            </div>
                                            <button onClick="productAddToCartForm.submit(this)" className="button btn-cart" title="Add to Cart" type="button">Add to Cart</button>
                                        </div>
                                        <div className="email-addto-box">
                                            <ul className="add-to-links">
                                                <li> <a className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a></li>
                                                <li><span className="separator">|</span> <a className="link-compare" href="compare.html"><span>Add to Compare</span></a></li>
                                            </ul>
                                            <p className="email-friend"><a href="#" className=""><span>Email to a Friend</span></a></p>
                                        </div>
                                    </div>
                                    <div className="social">
                                        <ul className="link">
                                            <li className="fb"><a href="#"></a></li>
                                            <li className="tw"><a href="#"></a></li>
                                            <li className="googleplus"><a href="#"></a></li>
                                            <li className="rss"><a href="#"></a></li>
                                            <li className="pintrest"><a href="#"></a></li>
                                            <li className="linkedin"><a href="#"></a></li>
                                            <li className="youtube"><a href="#"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default productzoom
