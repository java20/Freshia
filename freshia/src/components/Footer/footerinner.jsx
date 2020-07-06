import React, { Component } from 'react'
import PaymentImg1 from '../../images/payment-1.png'
import PaymentImg2 from '../../images/payment-2.png'
import PaymentImg3 from '../../images/payment-3.png'
import PaymentImg4 from '../../images/payment-4.png'


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
                                        <li className="first"><a title="Login" href="login.html">Login</a> </li>
                                        <li><a title="About us" href="about_us.html">About us</a> </li>
                                        <li><a title="Wishlist" href="wishlist.html">Wishlist</a> </li>
                                        <li><a title="Checkout" href="checkout.html">Checkout</a> </li>
                                        <li><a title="FAQs" href="faq.html">FAQs</a> </li>
                                        <li className="last"><a title="Contact Us" href="contact_us.html">Contact Us</a> </li>
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
                                        <li className="first"><a href="sitemap.html" title="Site Map">Site Map</a> </li>
                                        <li><a href="#/" title="Search Terms">Search Terms</a> </li>
                                        <li><a href="#/" title="Advanced Search">Advanced Search</a> </li>
                                        <li><a href="contact-us.html" title="Contact Us">Privacy Policy</a> </li>
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
                                        <div><img src={PaymentImg1} alt="payment1" /> <img src={PaymentImg2} alt="payment2" />
                                            <img src={PaymentImg3} alt="payment3" /> <img src={PaymentImg4} alt="payment4" />
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
