import React, { Component } from 'react'

class slide1 extends Component {
    render() {
        return (
            <>
                <li data-transition='random' data-slotamount='7' data-masterspeed='1000'
                    data-thumb={process.env.PUBLIC_URL + '/assets/images/slide-img1.jpg'}><img src={process.env.PUBLIC_URL + '/assets/images/slide-img1.jpg'} alt="slide-img"
                        data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' />
                    <div className="info">
                        <div className='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-endspeed='500' data-speed='500'
                            data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none'
                            data-elementdelay='0.1' data-endelementdelay='0.1'><span>Modern Design</span> </div>
                        <div className='tp-caption LargeTitle sfl  tp-resizeme ' data-endspeed='500' data-speed='500'
                            data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none'
                            data-elementdelay='0.1' data-endelementdelay='0.1'><span>Simply delicious</span> </div>
                        <div className='tp-caption Title sft  tp-resizeme ' data-endspeed='500' data-speed='500'
                            data-start='1450' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none'
                            data-elementdelay='0.1' data-endelementdelay='0.1'>In augue urna, nunc, tincidunt, augue, augue
                                                facilisis facilisis.</div>
                        <div className='tp-caption sfb  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1500'
                            data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1'
                            data-endelementdelay='0.1'><a href='#/' className="buy-btn">Shop Now</a> </div>
                    </div>
                </li>
            </>
        )
    }
}

export default slide1
