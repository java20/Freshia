import React, { Component } from 'react'
import Slide1 from './slide1'
import Slide2 from './slide2'
import HotDealProduct from './slidehotdeals'

class slider extends Component {
    render() {
        return (
            <>
                <div id="thm-slideshow" className="thm-slideshow">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div id='rev_slider_4_wrapper' className='rev_slider_wrapper fullwidthbanner-container'>
                                    <div id='rev_slider_4' className='rev_slider fullwidthabanner'>
                                        <ul>
                                            <Slide1 />
                                            <Slide2 />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <HotDealProduct />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default slider
