import React, { Component } from 'react'

class mainsection extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstname:'',
             email:'',
             company:'',
             telephone:'',
             address1:'',
             address2:'',
             comment:''
        }
    }
    
    handleName = (name) => {
        this.setState({
            firstname:name.target.value
        });
    }

    handleEmail = (email) => {
        this.setState({
            email:email.target.value
        });
    }

    handleCompany = (company) => {
        this.setState({
            company:company.target.value
        });
    }

    handleTelephone = (telephone) => {
        this.setState({
            telephone:telephone.target.value
        });
    }

    handleAddress1 = (address) => {
        this.setState({
            address1:address.target.value
        });
    }

    handleAddress2 = (address) => {
        this.setState({
            address2:address.target.value
        });
    }

    handleComment = (comment) => {
        this.setState({
            comment:comment.target.value
        });
    }

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
                                                            <input type="text" id="billing:firstname" name="billing[firstname]" value={this.state.firstname} title="First Name" className="input-text" onChange={this.handleName} />
                                                        </div>
                                                        <div className="input-box name-lastname">
                                                            <label for="billing:lastname"> Email Address <span className="required">*</span> </label>
                                                            <br />
                                                            <input type="text" id="billing:lastname" name="billing[lastname]" value={this.state.email} title="Last Name" className="input-text" onChange={this.handleEmail} />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="input-box">
                                                        <label for="billing:company">Company</label>
                                                        <br />
                                                        <input type="text" id="billing:company" name="billing[company]" value={this.state.company} title="Company" className="input-text" onChange={this.handleCompany}/>
                                                    </div>
                                                    <div className="input-box">
                                                        <label for="billing:email">Telephone <span className="required">*</span></label>
                                                        <br />
                                                        <input type="text" name="billing[email]" id="billing:email" value={this.state.telephone} title="Email Address" className="input-text validate-email" onChange={this.handleTelephone}/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <label for="billing:street1">Address <span className="required">*</span></label>
                                                    <br />
                                                    <input type="text" title="Street Address" name="billing[street][]" id="billing:street1  street1" value={this.state.address1} className="input-text required-entry" onChange={this.handleAddress1} />
                                                </li>
                                                <li>
                                                    <input type="text" title="Street Address 2" name="billing[street][]" id="billing:street2 street2" value={this.state.address2} className="input-text required-entry" onChange={this.handleAddress2} />
                                                </li>
                                                <li className="">
                                                    <label for="comment">Comment<em className="required">*</em></label>
                                                    <br />
                                                    <div style={{ float: 'none' }} className="">
                                                        <textarea name="comment" id="comment" value={this.state.comment} title="Comment" className="required-entry input-text" cols="5" rows="3" onChange={this.handleComment}></textarea>
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
