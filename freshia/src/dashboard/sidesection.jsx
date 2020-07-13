import React, { Component } from 'react'

class sidesection extends Component {
    render() {
        return (
            <>
                <aside className="col-right sidebar col-sm-3 wow bounceInUp animated">
                    <div className="block block-account">
                        <div className="block-title">My Account</div>
                        <div className="block-content">
                            <ul>
                                <li className="current"><a>Account Dashboard</a></li>
                                <li><a href="#">Account Information</a></li>
                                <li><a href="#">Address Book</a></li>
                                <li><a href="#">My Orders</a></li>
                                <li><a href="#">Billing Agreements</a></li>
                                <li><a href="#">Recurring Profiles</a></li>
                                <li><a href="#">My Product Reviews</a></li>
                                <li><a href="#">My Tags</a></li>
                                <li><a href="#">My Wishlist</a></li>
                                <li><a href="#">My Downloadable</a></li>
                                <li className="last"><a href="#">Newsletter Subscriptions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="block block-compare">
                        <div className="block-title "><span>Compare Products (2)</span></div>
                        <div className="block-content">
                            <ol id="compare-items">
                                <li className="item odd">
                                    <input type="hidden" value="2173" className="compare-item-id" />
                                    <a className="btn-remove1" title="Remove This Item" href="#"></a> <a href="#" className="product-name"> Sofa with Box-Edge Polyester Wrapped Cushions</a> </li>
                                <li className="item last even">
                                    <input type="hidden" value="2174" className="compare-item-id" />
                                    <a className="btn-remove1" title="Remove This Item" href="#"></a> <a href="#" className="product-name"> Sofa with Box-Edge Down-Blend Wrapped Cushions</a> </li>
                            </ol>
                            <div className="ajax-checkout">
                                <button type="submit" title="Submit" className="button button-compare"><span>Compare</span></button>
                                <button type="submit" title="Submit" className="button button-clear"><span>Clear</span></button>
                            </div>
                        </div>
                    </div>
                </aside>
            </>
        )
    }
}

export default sidesection
