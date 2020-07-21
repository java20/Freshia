import React, { Component } from 'react'

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
                                    <div className='item'><a href='#/'><img src={process.env.PUBLIC_URL + '/assets/images/b-logo1.png'} alt='Brands' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={process.env.PUBLIC_URL + '/assets/images/b-logo3.png'} alt='Brands' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={process.env.PUBLIC_URL + '/assets/images/b-logo2.png'} alt='Brands' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={process.env.PUBLIC_URL + '/assets/images/b-logo4.png'} alt='Brands' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={process.env.PUBLIC_URL + '/assets/images/b-logo5.png'} alt='Brands' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={process.env.PUBLIC_URL + '/assets/images/b-logo6.png'} alt='Brands' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={process.env.PUBLIC_URL + '/assets/images/b-logo2.png'} alt='Brands' /></a></div>
                                    {/* End Items */}

                                    {/* Item */}
                                    <div className='item'><a href='#/'><img src={process.env.PUBLIC_URL + '/assets/images/b-logo4.png'} alt='Brands' /></a></div>
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
