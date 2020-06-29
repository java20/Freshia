import React, { Component } from 'react'
import HeaderLanguage from './headerlang'
import HeaderCurrency from './headercurrency'
import HeaderTopLink from './headertoplink'
import HeaderLogo from './headerlogo'
import FreshiaBg from '../images/footer-bg.jpg'

class header extends Component {
    render() {
        return (
            <div id='page'>
                <header style={{backgroundImage: `url(${FreshiaBg})`}}>
                    <div className='header-container'>
                        <div className='header-top'>
                            <div className='container'>
                                <div className='row'>
                                    <div className="col-xs-12 col-sm-6">    
                                        {/* Header Language*/}
                                            <HeaderLanguage />
                                        {/* Header Language End*/}
                                        {/* Header Currency */}
                                            <HeaderCurrency />
                                        {/* Header Currency End*/}
                                        <div class="welcome-msg"> Default welcome msg! </div>
                                    </div>
                                    {/* Header Top Links */}
                                        <HeaderTopLink />
                                    {/* Header Top Links End*/}
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                {/* Header Ph Number, Logo, Search Box */}
                                <HeaderLogo />
                                {/* Header Ph Number, Logo, Search Box End */}
                            </div>
                        </div>
                    </div>

                </header>
             </div>
        )
    }
}

export default header
