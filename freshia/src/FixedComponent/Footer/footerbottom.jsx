import React, { Component } from 'react'

class footerbottom extends Component {
    render() {
        return (
            <div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 col-xs-12 coppyright">&copy; 2018 themessoft. All Rights Reserved.</div>
                            <div className="col-sm-7 col-xs-12 company-links">
                                <ul className="links">
                                    <li><a href="#/" title="Magento Themes">Magento Themes</a> </li>
                                    <li><a href="#/" title="Opencart Themes">Opencart Themes</a> </li>
                                    <li><a href="#/" title="Woocommerce Themes">Woocommerce Themes</a> </li>
                                    <li className="last"><a href="#/" title="Shopify Themes">Shopify Themes</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default footerbottom
