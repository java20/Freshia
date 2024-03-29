import React, { Component } from 'react'

class slide extends Component {
    render() {
        return (
            <>
                <div className='category-description std'>
                    <div className="slider-items-products">
                        <div id="category-desc-slider" className="product-flexslider hidden-buttons">
                            <div className="slider-items slider-width-col1 owl-carousel owl-theme">

                                {/* Item  */}
                                <div className="item"> <a href="#"><img alt="" src={process.env.PUBLIC_URL + '/assets/images/category-img1.jpg'} /></a>
                                    <div className="cat-img-title cat-bg cat-box">
                                        <div className="small-tag">Season 2018</div>
                                        <h2 className="cat-heading">100% Organic</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                                {/* End Item   */}

                                {/* Item */}
                                <div className="item"> <a href="#"><img alt="" src={process.env.PUBLIC_URL + '/assets/images/category-img2.jpg'} /></a>
                                    <div className="cat-img-title cat-bg cat-box">
                                        <div className="small-tag">Freshia Fruits</div>
                                        <h2 className="cat-heading">New Season</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                    {/* End Item   */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default slide
