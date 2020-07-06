import React, { Component } from 'react'
import FooterLogo from '../../images/footer-logo.png'

class footermiddle extends Component {
    render() {
        return (
            <>
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div style={{ textAlign: 'center' }}> <a href="index.html"><img src={FooterLogo} alt="logo" /> </a>
                            </div>
                            <address>
                                <i className="fa fa-map-marker"></i> ABC Town Luton Street, New York 226688 <i className="fa fa-mobile"></i><span>
                                    +0800 567 345</span> <i className="fa fa-envelope"></i><span> support@themessoft.com</span>
                            </address>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default footermiddle
