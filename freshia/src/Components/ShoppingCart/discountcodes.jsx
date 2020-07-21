import React, { Component } from 'react'

class discountcodes extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             code: ''
        }
    }

    handleCode = (Code) => {
        this.setState({
            code: Code.target.value
        });
    }
    

    render() {
        return (
            <>
                <div className="col-sm-4">
                    <div className="discount">
                        <h3>Discount Codes</h3>
                        <form method="post" action="#couponPost/" id="discount-coupon-form">
                            <label for="coupon_code">Enter your coupon code if you have one.</label>
                            <input type="hidden" value="0" id="remove-coupone" name="remove" />
                            <input type="text" value={this.state.code} name="coupon_code" id="coupon_code" className="input-text fullwidth" onChange={this.handleCode} />
                            <button value="Apply Coupon" onclick="discountForm.submit(false)" className="button coupon " title="Apply Coupon" type="button"><span>Apply Coupon</span></button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default discountcodes
