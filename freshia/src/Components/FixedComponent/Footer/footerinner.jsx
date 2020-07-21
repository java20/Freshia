import React, { Component } from 'react'


class footerinner extends Component {
    render() {
        return (
            <div>
                <div className="footer-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-12 col-lg-8 col-md-8">
                                <div className="footer-column pull-left">
                                    <h4>My Account</h4>
                                    <ul className="links">
                                        <li className="first"><a title="Login" href="/login">Login</a> </li>
                                        <li><a title="About us" href="/aboutus">About us</a> </li>
                                        <li><a title="Wishlist" href="/wishlist">Wishlist</a> </li>
                                        <li><a title="Checkout" href="/checkout">Checkout</a> </li>
                                        <li><a title="FAQs" href="/faq">FAQs</a> </li>
                                        <li className="last"><a title="Contact Us" href="/contactus">Contact Us</a> </li>
                                    </ul>
                                </div>
                                <div className="footer-column pull-left">
                                    <h4>Style Advisor</h4>
                                    <ul className="links">
                                        <li className="first"><a title="Your Account" href="#/">Your Account</a> </li>
                                        <li><a title="Information" href="#/">Information</a> </li>
                                        <li><a title="Addresses" href="#/">Addresses</a> </li>
                                        <li><a title="Addresses" href="#/">Discount</a> </li>
                                        <li><a title="Orders History" href="#/">Orders History</a> </li>
                                        <li className="last"><a title=" Additional Information" href="#/">Additional Information</a> </li>
                                    </ul>
                                </div>
                                <div className="footer-column pull-left">
                                    <h4>Information</h4>
                                    <ul className="links">
                                        <li className="first"><a href="/sitemap" title="Site Map">Site Map</a> </li>
                                        <li><a href="#/" title="Search Terms">Search Terms</a> </li>
                                        <li><a href="#/" title="Advanced Search">Advanced Search</a> </li>
                                        <li><a href="/contactus" title="Contact Us">Privacy Policy</a> </li>
                                        <li><a href="#/" title="Suppliers">Suppliers</a> </li>
                                        <li className=" last"><a href="#/" title="Our stores" className="link-rss">Our stores</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="footer-column-last">

                                    <div className="social">
                                        <h4>Follow Us</h4>
                                        <ul className="link">
                                            <li className="fb pull-left"> <a href="#/"></a> </li>
                                            <li className="tw pull-left"> <a href="#/"></a> </li>
                                            <li className="googleplus pull-left"> <a href="#/"></a> </li>
                                            <li className="rss pull-left"> <a href="#/"></a> </li>
                                            <li className="pintrest pull-left"> <a href="#/"></a> </li>
                                            <li className="linkedin pull-left"> <a href="#/"></a> </li>
                                            <li className="youtube pull-left"> <a href="#/"></a> </li>
                                        </ul>
                                    </div>
                                    <div className="payment-accept">
                                        <h4>Payment Option</h4>
                                        <div><img src={process.env.PUBLIC_URL + '/assets/images/payment-1.png'} alt="payment1" /> <img src={process.env.PUBLIC_URL + '/assets/images/payment-2.png'} alt="payment2" />
                                            <img src={process.env.PUBLIC_URL + '/assets/images/payment-3.png'} alt="payment3" /> <img src={process.env.PUBLIC_URL + '/assets/images/payment-4.png'} alt="payment4" />
                                        </div>
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

export default footerinner
