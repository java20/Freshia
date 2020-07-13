import React, { Component } from 'react'

class mainsection extends Component {
    render() {
        return (
            <>
                <section className="col-sm-9 wow bounceInUp animated">
                    <div className="col-main">
                        <div className="page-title">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="static-contain">
                            <fieldset className="group-select">
                                <ul>
                                    <li id="billing-new-address-form">
                                        <fieldset>

                                            <input type="hidden" name="billing[address_id]" value="" id="billing:address_id" />
                                            <ul>
                                                <li>
                                                    <div className="customer-name">
                                                        <div className="input-box name-firstname">
                                                            <label for="billing:firstname"> First Name<span className="required">*</span></label>
                                                            <br />
                                                            <input type="text" id="billing:firstname" name="billing[firstname]" value="" title="First Name" className="input-text " />
                                                        </div>
                                                        <div className="input-box name-lastname">
                                                            <label for="billing:lastname"> Email Address <span className="required">*</span> </label>
                                                            <br />
                                                            <input type="text" id="billing:lastname" name="billing[lastname]" value="" title="Last Name" className="input-text" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="input-box">
                                                        <label for="billing:company">Company</label>
                                                        <br />
                                                        <input type="text" id="billing:company" name="billing[company]" value="" title="Company" className="input-text" />
                                                    </div>
                                                    <div className="input-box">
                                                        <label for="billing:email">Telephone <span className="required">*</span></label>
                                                        <br />
                                                        <input type="text" name="billing[email]" id="billing:email" value="" title="Email Address" className="input-text validate-email" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <label for="billing:street1">Address <span className="required">*</span></label>
                                                    <br />
                                                    <input type="text" title="Street Address" name="billing[street][]" id="billing:street1  street1" value="" className="input-text required-entry" />
                                                </li>
                                                <li>
                                                    <input type="text" title="Street Address 2" name="billing[street][]" id="billing:street2 street2" value="" className="input-text required-entry" />
                                                </li>
                                                <li className="">
                                                    <label for="comment">Comment<em className="required">*</em></label>
                                                    <br />
                                                    <div style={{ float: 'none' }} className="">
                                                        <textarea name="comment" id="comment" title="Comment" className="required-entry input-text" cols="5" rows="3"></textarea>
                                                    </div>
                                                </li>
                                            </ul>
                                        </fieldset>
                                    </li>
                                    <p className="require"><em className="required">* </em>Required Fields</p>
                                    <input type="text" name="hideit" id="hideit" value="" style={{ display: 'none !important' }} />
                                    <div className="buttons-set">
                                        <button type="submit" title="Submit" className="button submit"> <span> Submit </span> </button>
                                    </div>
                                </ul>
                            </fieldset>
                        </div></div>
                </section>
            </>
        )
    }
}

export default mainsection
