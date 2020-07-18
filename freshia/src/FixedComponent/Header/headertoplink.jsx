import React, { Component } from 'react'

class headertoplink extends Component {
    render() {
        return (
            <div className='col-xs-6 hidden-xs'>
                <div className='toplinks'>
                    <div className='links'>
                        <div className="myaccount"><a title="My Account" href="login.html"><span className="hidden-xs">My Account</span></a> </div>
                        <div className="check"><a title="Checkout" href="checkout.html"><span className="hidden-xs">Checkout</span></a> </div>
                        <div className="demo"><a title="Blog" href="blog.html"><span className="hidden-xs">Blog</span></a> </div>
                          {/* HEADER COMPANY */}
                        <div className="dropdown block-company-wrapper hidden-xs"> <a role="button" data-toggle="dropdown" className="block-company dropdown-toggle" href="#/"> Company <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li role="presentation"><a href="about_us.html"> About Us </a> </li>
                                <li role="presentation"><a href="#/"> Customer Service </a> </li>
                                <li role="presentation"><a href="#/"> Privacy Policy </a> </li>
                                <li role="presentation"><a href="/sitemap">Site Map </a> </li>
                                <li role="presentation"><a href="#/">Search Terms </a> </li>
                                <li role="presentation"><a href="#/">Advanced Search </a> </li>
                            </ul>
                        </div>
                            {/* End Header Company */}
                            <div className="login"><a href="login.html"><span className="hidden-xs">Log In</span></a> </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default headertoplink
