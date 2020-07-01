import React, { Component } from 'react'
import ProductImg1 from '../../products-images/product4.jpg'
import ProductImg2 from '../../products-images/product3.jpg'

class navcart extends Component {
    render() {
        return (
            <>
                <div className="top-cart-contain pull-right">
                    {/*  Top Cart  */}
                    <div className="mini-cart">
                        <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle"> <a href="shopping_cart.html"> <span className="cart_count">2</span> </a> </div>
                        <div>
                            <div className="top-cart-content">

                                {/* block-subtitle */}
                                <ul className="mini-products-list" id="cart-sidebar">
                                    <li className="item first">
                                        <div className="item-inner"> <a className="product-image" title="Retis lapen casen" href="#/"><img alt="Retis lapen casen" src={ProductImg1} /> </a>
                                            <div className="product-details">
                                                <div className="access"><a className="btn-remove1" title="Remove This Item" href="#/">Remove</a> <a className="btn-edit" title="Edit item" href="#/"><i className="icon-pencil"></i><span className="hidden">Edit item</span></a> </div>
                                                {/* access<strong>1</strong> x <span className="price">$179.99</span> */}
                                                <p className="product-name"><a href="#/">Retis lapen casen...</a> </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item last">
                                        <div className="item-inner"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"><img alt="Retis lapen casen" src={ProductImg2} /> </a>
                                            <div className="product-details">
                                                <div className="access"><a className="btn-remove1" title="Remove This Item" href="#/">Remove</a> <a className="btn-edit" title="Edit item" href="#/"><i className="icon-pencil"></i><span className="hidden">Edit item</span></a> </div>
                                                {/* access<strong>1</strong> x <span className="price">$80.00</span> */}
                                                <p className="product-name"><a href="#/">Retis lapen casen...</a> </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                {/* actions */}
                                <div className="actions">
                                    <button className="btn-checkout" title="Checkout" type="button"><span>Checkout</span> </button>
                                    <a href="shopping_cart.html" className="view-cart"><span>View Cart</span></a> </div>
                            </div>
                        </div>
                    </div>
                    {/*  Top Cart  */}
                    <div id="ajaxconfig_info" style={{ display: 'none' }}> <a href="#/"></a>
                        <input value="" type="hidden" />
                        <input id="enable_module" value="1" type="hidden" />
                        <input className="effect_to_cart" value="1" type="hidden" />
                        <input className="title_shopping_cart" value="Go to shopping cart" type="hidden" />
                    </div>
                </div>
            </>
        )
    }
}

export default navcart
