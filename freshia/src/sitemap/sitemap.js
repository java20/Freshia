import React, { Component } from 'react'

class sitemap extends Component {
    render() {
        return (
            <>
                <section className="main-container col1-layout">
                    <div className="main container">
                        <div className="col-main">
                            <div className="cart wow bounceInUp animated">
                                <div className="page-title">
                                    <h2>Sitemap</h2>
                                </div>
                                <div className="row content-row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <ul className="simple-list arrow-list bold-list">
                                            <li> <a href="grid.html">Woman</a>
                                                <ul>
                                                    <li><a href="grid.html">Featured products</a></li>
                                                    <li><a href="grid.html">New arrivals</a></li>
                                                    <li><a href="grid.html">Bestsellers</a></li>
                                                    <li><a href="grid.html">Footwear Womens</a></li>
                                                    <li><a href="grid.html">Shorts</a></li>
                                                </ul>
                                            </li>
                                            <li> <a href="grid.html">Man</a>
                                                <ul>
                                                    <li><a href="grid.html">Polo Shirts</a></li>
                                                    <li><a href="grid.html">Shirts</a></li>
                                                    <li><a href="grid.html">Big &amp; Tall</a></li>
                                                    <li><a href="grid.html">Jeans</a></li>
                                                    <li><a href="grid.html">Sweaters</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="grid.html">Electronics</a></li>
                                            <li><a href="grid.html">Furniture</a></li>
                                            <li><a href="grid.html">Sale</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <ul className="simple-list arrow-list bold-list">
                                            <li><a href="shopping_cart.html">Shopping Cart</a></li>
                                            <li> <a href="login.html">My Account</a>
                                                <ul>
                                                    <li><a href="login.html">My Account</a></li>
                                                    <li><a href="#">Order history</a></li>
                                                    <li><a href="#">Advanced search</a></li>
                                                    <li><a href="#">Reviews</a></li>
                                                </ul>
                                            </li>
                                            <li> <a href="#">Customer service</a>
                                                <ul>
                                                    <li><a href="#">Online support</a></li>
                                                    <li><a href="#">Help & FAQs</a></li>
                                                    <li><a href="#">Call Center</a></li>
                                                </ul>
                                            </li>
                                            <li> <a href="#">Information</a>
                                                <ul>
                                                    <li><a href="about_us.html">About Us</a></li>
                                                    <li><a href="#">Shipping &amp; Returns</a></li>
                                                    <li><a href="#">Privacy Notice</a></li>
                                                    <li><a href="#">Conditions of Use</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default sitemap
