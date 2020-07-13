import React, { Component } from 'react'

class mainsection extends Component {
    render() {
        return (
            <>
                <section className='col-sm-9 wow bounceInUp animated'>
                    <div className='col-main'>
                        <div className='page-title'>
                            <h1>Checkout</h1>
                        </div>
                        <ol className="one-page-checkout" id="checkoutSteps">
                            <li id="opc-billing" className="section allow active">
                                <div className="step-title"> <span className="number">1</span>
                                    <h3>Checkout Method</h3>
                                    {/* <a href="#">Edit</a>   */}
                                </div>
                                <div id="checkout-step-billing" className="step a-item">
                                    <form id="co-billing-form" action="">
                                        <fieldset className="group-select">
                                            <ul>
                                                <li>
                                                    <label for="billing-address-select">Select a billing address from your address book or enter a new address.</label>
                                                    <br />
                                                    <select name="billing_address_id" id="billing-address-select" className="address-select" title="" onChange="billing.newAddress(!this.value)">
                                                        <option value="1" selected="selected">John Doe, main tower, CA 46532, United States</option>
                                                        <option value="">New Address</option>
                                                    </select>
                                                </li>
                                                <li>
                                                    <input type="radio" name="billing[use_for_shipping]" id="billing:use_for_shipping_yes" value="1" onClick="$('shipping:same_as_billing').checked = true;" class="radio" />&nbsp;
                                                                <label for="billing:use_for_shipping_yes">Ship to this address</label>&nbsp;
                                                                <input type="radio" name="billing[use_for_shipping]" id="billing:use_for_shipping_no" value="0" checked="checked" onClick="$('shipping:same_as_billing').checked = false;" class="radio" />&nbsp;
                                                                <label for="billing:use_for_shipping_no">Ship to different address</label>
                                                </li>
                                            </ul>
                                            <p class="require"><em class="required">* </em>Required Fields</p>
                                            <button type="button" class="button continue" onClick="billing.save()"><span>Continue</span></button>
                                        </fieldset>
                                    </form>
                                </div>
                            </li>
                            <li id="opc-shipping" className="section">
                                <div class="step-title"> <span class="number">2</span>
                                    <h3 class="one_page_heading"> Shipping Information</h3>
                                </div>
                            </li>
                            <li id="opc-shipping" className="section">
                                <div class="step-title"> <span class="number">3</span>
                                    <h3 class="one_page_heading"> Method</h3>
                                </div>
                            </li>
                            <li id="opc-shipping" className="section">
                                <div class="step-title"> <span class="number">4</span>
                                    <h3 class="one_page_heading"> Payment Information</h3>
                                </div>
                            </li>
                            <li id="opc-shipping" className="section">
                                <div class="step-title"> <span class="number">5</span>
                                    <h3 class="one_page_heading"> Order Review</h3>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>
            </>
        )
    }
}

export default mainsection
