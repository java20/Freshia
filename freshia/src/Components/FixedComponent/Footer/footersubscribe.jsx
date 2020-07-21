import React, { Component } from 'react'

class footersubscribe extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             inputEmail: "Enter your email address"
        }
    }

    handleEmailInput = (email) => {
        this.setState({
            inputEmail: email.target.value
        });
    }

    

    render() {
        return (
            <>
                <div className='newsletter-block'>
                    <div className='container'>
                        <div className='newsletter-wrap'>
                            <h4>Sign up for emails</h4>
                            <form id="newsletter-validate-detail" method="post" action="#/">
                                <div id="container_form_news">
                                    <div id="container_form_news2">
                                        <input 
                                        type="text" 
                                        className="input-text required-entry validate-email" 
                                        value={this.state.inputEmail}
                                        title="Sign up for our newsletter" 
                                        id="newsletter" 
                                        name="email" 
                                        onChange={this.handleEmailInput}
                                        />
                                        <button className="button subscribe" title="Subscribe" type="submit"><span>Subscribe</span> </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default footersubscribe
