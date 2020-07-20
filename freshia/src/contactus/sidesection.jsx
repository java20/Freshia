import React, { Component } from 'react'

class sidesection extends Component {
    render() {
        return (
            <>
                <aside className="col-right sidebar col-sm-3 wow bounceInUp animated">
                    <div className="block block-company">
                        <div className="block-title">Company </div>
                        <div className="block-content">
                            <ol id="recently-viewed-items">
                                <li className="item odd"><a href="#/">About Us</a></li>
                                <li className="item even"><a href="#/">Sitemap</a></li>
                                <li className="item  odd"><a href="#/">Terms of Service</a></li>
                                <li className="item even"><a href="#/">Search Terms</a></li>
                                <li className="item last"><strong>Contact Us</strong></li>
                            </ol>
                        </div>
                    </div>
                </aside>
            </>
        )
    }
}

export default sidesection
