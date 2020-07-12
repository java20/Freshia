import React, { Component } from 'react'

class checkout extends Component {
    render() {
        return (
            <>
                <div className='main-container top-space col2-right-layout'>
                    <div className='main container'>
                        <div className='row'>
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
                                                            <li id="billing-new-address-form" style={{ display: 'none' }}>
                                                                <fieldset>
                                                                    <legend>New Address</legend>
                                                                    <input type="hidden" name="billing[address_id]" value="4269" id="billing:address_id" />
                                                                    <ul>
                                                                        <li>
                                                                            <div className="customer-name">
                                                                                <div className="input-box name-firstname">
                                                                                    <label for="billing:firstname"> First Name <span className="required">*</span> </label>
                                                                                    <br />
                                                                                    <input type="text" id="billing:firstname" name="billing[firstname]" value="pranali" title="First Name" className="input-text required-entry" />
                                                                                </div>
                                                                                <div className="input-box name-lastname">
                                                                                    <label for="billing:lastname"> Last Name <span className="required">*</span> </label>
                                                                                    <br />
                                                                                    <input type="text" id="billing:lastname" name="billing[lastname]" value="d" title="Last Name" className="input-text required-entry" />
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="input-box">
                                                                                <label for="billing:company">Company</label>
                                                                                <br />
                                                                                <input type="text" id="billing:company" name="billing[company]" value="" title="Company" className="input-text" />
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <label for="billing:street1">Address <span class="required">*</span></label>
                                                                            <br />
                                                                            <input type="text" title="Street Address" name="billing[street][]" id="billing:street1  street1" value="aundh" class="input-text required-entry" />
                                                                        </li>
                                                                        <li>
                                                                            <input type="text" title="Street Address 2" name="billing[street][]" id="billing:street2 street2" value="" class="input-text" />
                                                                        </li>
                                                                    </ul>
                                                                </fieldset>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default checkout
