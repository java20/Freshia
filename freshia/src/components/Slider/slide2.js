import React, { Component } from 'react'
import Slide2 from '../../images/slide-img2.jpg'

class slide2 extends Component {
    render() {
        return (
            <>
                <li data-transition='random' data-slotamount='7' data-masterspeed='1000'
                    data-thumb={Slide2}><img src={Slide2} alt="slide-img"
                        data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' />
                    <div className="info">
                        <div className='tp-caption ExtraLargeTitle sft slide2  tp-resizeme ' data-endspeed='500'
                            data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none'
                            data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1'><span>Mega Sale</span>
                        </div>
                        <div className='tp-caption LargeTitle sfl  tp-resizeme ' data-endspeed='500' data-speed='500'
                            data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none'
                            data-elementdelay='0.1' data-endelementdelay='0.1'>Season Sale </div>
                        <div className='tp-caption Title sft  tp-resizeme ' data-endspeed='500' data-speed='500'
                            data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none'
                            data-elementdelay='0.1' data-endelementdelay='0.1'>Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit.</div>
                        <div className='tp-caption sfb  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1500'
                            data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1'
                            data-endelementdelay='0.1'><a href='#' className="buy-btn">Buy Now</a> </div>
                    </div>
                </li>
            </>
        )
    }
}

export default slide2
