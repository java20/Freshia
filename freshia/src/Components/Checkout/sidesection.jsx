import React, { Component } from 'react'

class sidesection extends Component {
    render() {
        return (
            <>
                <aside className="col-right sidebar col-sm-3 wow bounceInUp animated">
                    <div className="block block-progress">
                        <div className="block-title ">Your Checkout</div>
                        <div className="block-content">
                            <dl>
                                <dt className="complete"> Billing Address <span className="separator">|</span> <a onClick="checkout.gotoSection('billing'); return false;" href="#billing">Change</a> </dt>
                                <dd className="complete">
                                    <address>
                                        Stephen Smith<br />
                                        abc web development.<br />
                                        main tower Main Stree<br />
                                        CA, 00501<br />
                                        United States<br />
                                        T: 0800 567 345 <br />
                                        F: 568475
                                        </address>
                                </dd>
                                <dt className="complete"> Shipping Address <span className="separator">|</span> <a onClick="checkout.gotoSection('shipping');return false;" href="#payment">Change</a> </dt>
                                <dd className="complete">
                                    <address>
                                        Stephen Smith<br />
                                        abc web development.<br />
                                        main tower Main Stree<br />
                                        CA, 00501<br />
                                        United States<br />
                                        T: 0800 567 345 <br />
                                        F: 568475
                                        </address>
                                </dd>
                                <dt className="complete"> Shipping Method <span className="separator">|</span> <a onClick="checkout.gotoSection('shipping_method'); return false;" href="#shipping_method">Change</a> </dt>
                                <dd className="complete"> Flat Rate - Fixed <br />
                                    <span className="price">$15.00</span> </dd>
                                <dt> Payment Method </dt>
                            </dl>
                        </div>
                    </div>
                </aside>
            </>
        )
    }
}

export default sidesection
