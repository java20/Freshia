import React, { Component } from 'react'
import CustomImg1 from '../../images/custom-img1.jpg'
import CustomImg2 from '../../images/custom-img2.jpg'
import CustomImg3 from '../../images/custom-img3.jpg'
import CustomImg4 from '../../images/custom-img4.jpg'

class navcustom extends Component {
    render() {
        return (
            <>
                <div className="level0-wrapper custom-menu">
                    <div className="container">
                        <div className="header-nav-dropdown-wrapper clearer">
                            <div className="grid12-3">
                                <div><img src={CustomImg1} alt="custom-image" /> </div>
                                <h4 className="heading">Hurry up only today!</h4>
                                <p>Consult our specialists for help with an order, customization, or design advice.</p>

                            </div>
                            <div className="grid12-3">
                                <div><img src={CustomImg2} alt="custom-image" /> </div>
                                <h4 className="heading">Flat 30% on Fruits</h4>
                                <p>We stand behind our goods and services and want you to be satisfied with them.</p>

                            </div>
                            <div className="grid12-3">
                                <div><img src={CustomImg3} alt="custom-image" /> </div>
                                <h4 className="heading">Hot Deals!</h4>
                                <p>Our font delivery service is built upon a reliable, global network of servers.</p>

                            </div>
                            <div className="grid12-3">
                                <div><img src={CustomImg4} alt="custom-image" /> </div>
                                <h4 className="heading">New Arrivals!</h4>
                                <p>Currently over 50 countries qualify for express international shipping.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default navcustom
