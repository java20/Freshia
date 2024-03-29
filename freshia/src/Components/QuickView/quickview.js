import React, { Component } from 'react'

class quickview extends Component {

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
                <div style={{ backgroundColor: 'rgb(119, 119, 119)', opacity: '0.7', cursor: 'pointer', height: '1024px', display: 'block' }}
                    id="fancybox-overlay"></div>
                <div style={{ width: '1190px', height: 'auto', top: '20%', left: '581px', display: 'block' }} id="fancybox-wrap">
                    <div id="fancybox-outer">
                        <div style={{ borderWidth: '10px', width: '1170px', height: 'auto' }} id="fancybox-content">
                            <div style={{ width: 'auto', height: 'auto', overflow: 'auto', position: 'relative' }}>
                                <div className="product-view">
                                    <div className="product-essential">
                                        <form action="#/" method="post" id="product_addtocart_form">
                                            <input name="form_key" value="6UbXroakyQlbfQzK" type="hidden" />
                                            <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                                                <div className="new-label new-top-left"> New </div>
                                                <div className="product-image">
                                                    <div className="product-full"> <img id="product-zoom" src={process.env.PUBLIC_URL + '/assets/images/product1.jpg'}
                                                        data-zoom-image={process.env.PUBLIC_URL + '/assets/images/product1.jpg'} alt="product-image" /> </div>
                                                    <div className="more-views">
                                                        <div className="slider-items-products">
                                                            <div id="gallery_01" className="product-flexslider hidden-buttons product-img-thumb">
                                                                <div className="slider-items slider-width-col4 block-content owl-carousel owl-theme"
                                                                    style={{ opacity: '1', display: 'block' }}>
                                                                    <div className="owl-wrapper-outer">
                                                                        <div className='owl-wrapper' style={{ width: '330px', left: '0px', display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(-66px, 0px, 0px)' }}>
                                                                            <div className="owl-item" style={{ width: '50px' }}>
                                                                                <div className='more-views-items'>
                                                                                    <a href='#' data-image={process.env.PUBLIC_URL + '/assets/images/product2.jpg'}
                                                                                        data-zoom-image={process.env.PUBLIC_URL + '/assets/images/product2.jpg'}>
                                                                                        <img id='product-zoom' src={process.env.PUBLIC_URL + '/assets/images/product2.jpg'} alt='product-image' />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="owl-item" style={{ width: '50px' }}>
                                                                                <div className='more-views-items'>
                                                                                    <a href='#' data-image={process.env.PUBLIC_URL + '/assets/images/product3.jpg'}
                                                                                        data-zoom-image={process.env.PUBLIC_URL + '/assets/images/product3.jpg'}>
                                                                                        <img id='product-zoom' src={process.env.PUBLIC_URL + '/assets/images/product3.jpg'} alt='product-image' />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="owl-item" style={{ width: '50px' }}>
                                                                                <div className='more-views-items'>
                                                                                    <a href='#' data-image={process.env.PUBLIC_URL + '/assets/images/product4.jpg'}
                                                                                        data-zoom-image={process.env.PUBLIC_URL + '/assets/images/product4.jpg'}>
                                                                                        <img id='product-zoom' src={process.env.PUBLIC_URL + '/assets/images/product4.jpg'} alt='product-image' />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="owl-item" style={{ width: '50px' }}>
                                                                                <div className='more-views-items'>
                                                                                    <a href='#' data-image={process.env.PUBLIC_URL + '/assets/images/product5.jpg'}
                                                                                        data-zoom-image={process.env.PUBLIC_URL + '/assets/images/product5.jpg'}>
                                                                                        <img id='product-zoom' src={process.env.PUBLIC_URL + '/assets/images/product5.jpg'} alt='product-image' />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="owl-item" style={{ width: '50px' }}>
                                                                                <div className='more-views-items'>
                                                                                    <a href='#' data-image={process.env.PUBLIC_URL + '/assets/images/product6.jpg'}
                                                                                        data-zoom-image={process.env.PUBLIC_URL + '/assets/images/product6.jpg'}>
                                                                                        <img id='product-zoom' src={process.env.PUBLIC_URL + '/assets/images/product6.jpg'} alt='product-image' />
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
                                                {/* end: more-images  */}
                                            </div>
                                            <div className="product-shop col-lg-7 col-sm-7 col-xs-12">

                                                <div className="product-name">
                                                    <h1>GRAPES - THOMPSON SEEDLESS</h1>
                                                </div>
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '60%' }} className="rating"></div>
                                                    </div>
                                                    <p className="rating-links"> <a href="#/">1 Review(s)</a> <span className="separator">|</span> <a
                                                        href="#/">Add Your Review</a> </p>
                                                </div>
                                                <div className="price-block">
                                                    <div className="price-box">
                                                        <p className="special-price"> <span className="price-label">Special Price</span> <span
                                                            id="product-price-48" className="price"> $309.99 </span> </p>
                                                        <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $315.99 </span> </p>
                                                        <p className="availability in-stock pull-right"><span>In Stock</span></p>
                                                    </div>
                                                </div>
                                                <div className="short-description">
                                                    <h2>Quick Overview</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique
                                                    auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
                                                    Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
                                                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
                                                    eros eget velit. Donec ac tempus ante. </p>
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
                                                        <button onClick="productAddToCartForm.submit(this)" className="button btn-cart" title="Add to Cart"
                                                            type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                    <div className="email-addto-box">
                                                        <ul className="add-to-links">
                                                            <li> <a className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a></li>
                                                            <li><span className="separator">|</span> <a className="link-compare" href="/compare"><span>Add to Compare</span></a></li>
                                                        </ul>
                                                        <p className="email-friend"><a href="#/" className=""><span>Email to a Friend</span></a></p>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* product-view */}

                            </div>
                        </div>
                        <a style={{ display: 'inline' }} id="fancybox-close" href="/home"></a>
                    </div>
                </div>
                <div className='zoomContainer' style={{ transform: 'translateZ(0px)', position: 'absolute', left: '47.9125px', top: '164.475px', height: '289px', width: '289px' }}>
                    <div className="zoomWindowContainer" style={{ width: '400px' }}>
                        <div style={{ zIndex: '999', overflow: 'hidden', marginLeft: '0px', marginTop: '0px', backgroundPosition: '-511px -169.756px', width: '289px', height: '289px', float: 'left', cursor: 'crosshair', backgroundRepeat: 'no-repeat', position: 'absolute', backgroundImage: `url(process.env.PUBLIC_URL + '/assets/images/product1.jpg')`, top: '0px', left: '0px', display: 'none' }} className='zoomWindow'>
                            &nbsp;
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default quickview
