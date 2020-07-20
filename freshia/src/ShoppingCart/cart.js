import React, { Component } from 'react'
import Products from './products'
import EstimateShipping from './estimateshipping'
import DiscountCodes from './discountcodes'
import ShoppingCartTotal from './shopppingcarttotal'
import InterestedProduct from './interestedproduct'

class cart extends Component {
    render() {
        return (
            <>
                <section className='main-container col1-layout'>
                    <div className='main container'>
                        <div className='col-main'>
                            <div className='cart wow bounceInUp animated'>
                                <div class="page-title">
                                    <h2>Shopping Cart</h2>
                                </div>
                                <Products />
                                {/* BEGIN CART COLLATERALS */}
                                <div className='cart-collaterals row'>
                                    <EstimateShipping />
                                    <DiscountCodes />
                                    <ShoppingCartTotal />
                                </div>
                                {/* END CART COLLATERALS */}
                            </div>
                        </div>
                        <div className='also-like'>
                            <div className='category-products'>
                                <div className='new_title'>
                                    <h2>you may be interested</h2>
                                </div>
                                <InterestedProduct />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default cart
