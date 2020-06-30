import React, { Component } from 'react'
import ProductImg1 from '../../products-images/product4.jpg'
import ProductImg2 from '../../products-images/product3.jpg'

class navcart extends Component {
    render() {
        return (
            <>
                <div class="top-cart-contain pull-right">
                    {/*  Top Cart  */}
                    <div class="mini-cart">
                        <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle"> <a href="shopping_cart.html"> <span class="cart_count">2</span> </a> </div>
                        <div>
                            <div class="top-cart-content">

                                {/* block-subtitle */}
                                <ul class="mini-products-list" id="cart-sidebar">
                                    <li class="item first">
                                        <div class="item-inner"> <a class="product-image" title="Retis lapen casen" href="#l"><img alt="Retis lapen casen" src={ProductImg1} /> </a>
                                            <div class="product-details">
                                                <div class="access"><a class="btn-remove1" title="Remove This Item" href="#">Remove</a> <a class="btn-edit" title="Edit item" href="#"><i class="icon-pencil"></i><span class="hidden">Edit item</span></a> </div>
                                                {/* access<strong>1</strong> x <span class="price">$179.99</span> */}
                                                <p class="product-name"><a href="#">Retis lapen casen...</a> </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item last">
                                        <div class="item-inner"> <a class="product-image" title="Retis lapen casen" href="product_detail.html"><img alt="Retis lapen casen" src={ProductImg2} /> </a>
                                            <div class="product-details">
                                                <div class="access"><a class="btn-remove1" title="Remove This Item" href="#">Remove</a> <a class="btn-edit" title="Edit item" href="#"><i class="icon-pencil"></i><span class="hidden">Edit item</span></a> </div>
                                                {/* access<strong>1</strong> x <span class="price">$80.00</span> */}
                                                <p class="product-name"><a href="#">Retis lapen casen...</a> </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                {/* actions */}
                                <div class="actions">
                                    <button class="btn-checkout" title="Checkout" type="button"><span>Checkout</span> </button>
                                    <a href="shopping_cart.html" class="view-cart"><span>View Cart</span></a> </div>
                            </div>
                        </div>
                    </div>
                    {/*  Top Cart  */}
                    <div id="ajaxconfig_info" style={{ display: 'none' }}> <a href="#/"></a>
                        <input value="" type="hidden" />
                        <input id="enable_module" value="1" type="hidden" />
                        <input class="effect_to_cart" value="1" type="hidden" />
                        <input class="title_shopping_cart" value="Go to shopping cart" type="hidden" />
                    </div>
                </div>
            </>
        )
    }
}

export default navcart
