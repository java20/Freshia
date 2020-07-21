import React, { Component } from 'react'
import ProductDescriptionTab from './tab1'
import TagsTab from './tab2'
import ReviewsTab from './tab3'
import CustomTab1 from './tab4'
import CustomTab2 from './tab5'
import RelatedProductDetailsSlider from './relatedproducts'
import UpsellProductSlider from './upsellproducts'
import ProductZoom from './productzoom'


class productdetails extends Component {

    render() {
        return (
            <>
                {/* Bread Crum */}
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <ul>
                                    <li className="home"> <a href="/home" title="Go to Home Page">Home</a> <span>/</span> </li>
                                    <li className="category1599"> <a href="/grid" title="">Salads</a> <span>/ </span> </li>
                                    <li className="category1600"> <a href="/grid" title="">Bread Salads</a> <span>/</span> </li>
                                    <li className="category1601"> <strong>Dakos</strong> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bread Crum */}

                {/* Main Container */}
                <section className='main-container col1-layout'>
                    <div className='main'>
                        <div className='container'>
                            <div className='row'>
                                <ProductZoom />
                                <div className='product-collateral col-lg-12 col-sm-12 col-xs-12'>
                                    <div className='add_info'>
                                        <ul id="product-detail-tab" className="nav nav-tabs product-tabs">
                                            <li className="active"> <a href="#product_tabs_description" data-toggle="tab"> Product Description </a> </li>
                                            <li><a href="#product_tabs_tags" data-toggle="tab">Tags</a></li>
                                            <li> <a href="#reviews_tabs" data-toggle="tab">Reviews</a> </li>
                                            <li> <a href="#product_tabs_custom" data-toggle="tab">Custom Tab</a> </li>
                                            <li> <a href="#product_tabs_custom1" data-toggle="tab">Custom Tab1</a> </li>
                                        </ul>
                                        <div id="productTabContent" className="tab-content">
                                            <div className="tab-pane fade in active" id="product_tabs_description">
                                                <ProductDescriptionTab />
                                            </div>
                                            <div className="tab-pane fade" id="product_tabs_tags">
                                                <TagsTab />
                                            </div>
                                            <div className='tab-pane fade' id='reviews_tabs'>
                                                <ReviewsTab />
                                            </div>
                                            <div className="tab-pane fade" id="product_tabs_custom">
                                                <CustomTab1 />
                                            </div>
                                            <div className="tab-pane fade" id="product_tabs_custom1">
                                                <CustomTab2 />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Main Container End */}
                {/* Related Products Slider */}

                <div className='container'>
                    <RelatedProductDetailsSlider />
                </div>
                {/* Upsell Product Slider  */}

                <div className="container">
                    <UpsellProductSlider />
                </div>
            </>
        )
    }
}

export default productdetails
