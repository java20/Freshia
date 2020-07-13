import React, { Component } from 'react'

class sidesection extends Component {
    render() {
        return (
            <>
                <aside class="col-right sidebar col-sm-3 wow bounceInUp animated">
                    <div class="block block-company">
                        <div class="block-title">Company </div>
                        <div class="block-content">
                            <ol id="recently-viewed-items">
                                <li class="item odd"><a href="#">About Us</a></li>
                                <li class="item even"><a href="#">Sitemap</a></li>
                                <li class="item  odd"><a href="#">Terms of Service</a></li>
                                <li class="item even"><a href="#">Search Terms</a></li>
                                <li class="item last"><strong>Contact Us</strong></li>
                            </ol>
                        </div>
                    </div>
                </aside>
            </>
        )
    }
}

export default sidesection
