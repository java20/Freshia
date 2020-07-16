import React, { Component } from 'react'
import Closeimg from '../images/close-icon.png'
import NewsLetterImg from '../images/newsletter-img.jpg'
import HomePage from '../components/Home_page'

class newsletter extends Component {
    render() {
        return (
            <>
                <HomePage />
                <div style={{ display: 'block' }} className="popup1">
                    <div className="newsletter-sign-box">
                        <div className="newsletter">
                            <a href="/"><img src={Closeimg} alt="close" className="x" id="x" /></a>
                            <h3>Newsletter Sign up</h3>
                            <h5>sign up for our exclusive email list and be the first to hear of special offers.</h5>
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src={NewsLetterImg} alt="" />
                                </div>
                                <div className="col-sm-6">

                                    <div id="formSuccess1" style={{display: 'none'}}>Thank you for your subscription.</div>
                                    <form method="post" id="popup-newsletter" name="popup-newsletter" className="email-form">

                                        <div className="newsletter-form">
                                            <div className="input-box">
                                                <input name="email" id="newsletter2" title="Sign up for our newsletter" placeholder="Enter your email address" className="input-text required-entry validate-email" type="text" />
                                                <button type="submit" title="Subscribe" className="button subscribe"><span>Subscribe</span></button>
                                            </div>
                                            {/* input-box  */}
                                        </div>
                                        {/* /newsletter-form */}
                                        <label className="subscribe-bottom">
                                            <input name="notshowpopup" id="notshowpopup" type="checkbox" />
          Don’t show this popup again</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* newsletter  */}

                    </div>
                    {/* newsletter-sign-box */}
                </div>
                {/* popup1 */}
                <div id="overlay" style={{ display: 'block' }}></div>
            </>
        )
    }
}

export default newsletter
