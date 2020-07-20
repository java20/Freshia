import React, { Component } from 'react'

class mycart extends Component {
    render() {
        return (
            <>
                <div className="block block-cart">
                    <div className="block-title ">My Cart</div>
                    <div className="block-content">
                        <div className="summary">
                            <p className="amount">There are <a href='/shoppingcart'>2 items</a> in your cart.</p>
                            <p className="subtotal"> <span className="label">Cart Subtotal:</span> <span className="price">$27.99</span> </p>
                        </div>
                        <div className="ajax-checkout">
                            <button className="button button-checkout" title="Submit" type="submit"><span>Checkout</span></button>
                        </div>
                        <p className="block-subtitle">Recently added item(s) </p>
                        <ul>
                            <li className="item"> <a href='/shoppingcart' title="Fisher-Price Bubble Mower" className="product-image"><img src={process.env.PUBLIC_URL + '/assets/images/product10.jpg'} alt="Fisher-Price Bubble Mower" /></a>
                                <div className="product-details">
                                    <div className="access"> <a href='/shoppingcart' title="Remove This Item" className="btn-remove1"> <span className="icon"></span> Remove </a> </div>
                                    <strong>1</strong> x <span className="price">$19.99</span>
                                    <p className="product-name"> <a href='/shoppingcart'>Skater Dress In Leaf Print Grouped Product</a> </p>
                                </div>
                            </li>
                            <li className="item last"> <a href='/shoppingcart' title="Prince Lionheart Jumbo Toy Hammock" className="product-image"><img src={process.env.PUBLIC_URL + '/assets/images/product1.jpg'} alt="Prince Lionheart Jumbo Toy Hammock" /></a>
                                <div className="product-details">
                                    <div className="access"> <a href='/shoppingcart' title="Remove This Item" className="btn-remove1"> <span className="icon"></span> Remove </a> </div>
                                    <strong>1</strong> x <span className="price">$8.00</span>
                                    <p className="product-name"> <a href='/shoppingcart'> Sample Fashion Product Prince Lionheart </a> </p>

                                    {/* access clearfix  */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default mycart
