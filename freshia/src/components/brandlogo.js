import React, { Component } from 'react'
import ImageLogo1 from '../images/b-logo1.png'
import ImageLogo2 from '../images/b-logo3.png'
import ImageLogo3 from '../images/b-logo2.png'
import ImageLogo4 from '../images/b-logo4.png'
import ImageLogo5 from '../images/b-logo5.png'
import ImageLogo6 from '../images/b-logo6.png'
import ImageLogo7 from '../images/b-logo2.png'
import ImageLogo8 from '../images/b-logo4.png'

class brandlogo extends Component {
    render() {
        return (
            <>
                <div className='brand-logo'>
                    <div className='container'>
                        <div className='slider-items-products'>
                            <div id='brand-logo-slider' className='product-flexslider hidden-buttons'>
                                <div className='slider-items slider-width-col6'>

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={ImageLogo1} alt='Image' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={ImageLogo2} alt='Image' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={ImageLogo3} alt='Image' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={ImageLogo4} alt='Image' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={ImageLogo5} alt='Image' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={ImageLogo6} alt='Image' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={ImageLogo7} alt='Image' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={ImageLogo8} alt='Image' /></a></div>
                                    {/* End Items */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default brandlogo
