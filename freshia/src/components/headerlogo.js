import React, { Component } from 'react'
import FreshiaLogo from '../images/logo1.png'

class headerlogo extends Component {
    render() {
        return (
            <>
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 header-phone">
                    <i className="fa fa-mobile"></i>  + 0800 567 345
                </div>
                <div className="col-lg-6 col-md-4 col-sm-4 col-xs-12 logo-block"> 
                 {/* Header Logo */}
                    <div className="logo"> <a title="Freshia Basket" href="index.html"><img alt="Freshia" src={FreshiaLogo}/> </a> </div>
                {/* End Header Logo */}
                </div>
                <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12 hidden-xs'>
                    <div className="search-box">
                        <form action="cat" method="POST" id="search_mini_form" name="Categories">
                            <input type="text" placeholder="Search entire store here..." value="Search" maxlength="70" name="search" id="search" />
                            <button type="button" className="search-btn-bg"><span className="fa fa-search" style={{color:"#59B210"}}></span>&nbsp;</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default headerlogo
