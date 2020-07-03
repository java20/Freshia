import React, { Component } from 'react'
import WomenTab from './womentab'
import FurnitureTab from './furnituretab'
import MensTab from './mentab'
import KidsTab from './kidstab'
import AccessoriesTab from './accessoriestab'

class newproducts extends Component {
    render() {
        return (
            <>
                <div className='content-page'>
                    <div className='container'>
                        {/* featured category fashion */}
                        <div className='category-product'>
                            <div className='navbar nav-menu'>
                                <div className='navbar-collapse'>
                                    <ul className='nav navbar-nav'>
                                        <li>
                                            <div className='new_title'>
                                                <h2>New Products</h2>
                                            </div>
                                        </li>
                                        <li className="active"><a data-toggle="tab" href="#tab-1">Women</a> </li>
                                        <li><a data-toggle="tab" href="#tab-2">Furniture</a> </li>
                                        <li><a data-toggle="tab" href="#tab-3">Men</a> </li>
                                        <li><a data-toggle="tab" href="#tab-4">Kids</a> </li>
                                        <li><a data-toggle="tab" href="#tab-5">Accessories</a> </li>
                                    </ul>
                                </div>
                                {/* Navbar Collapse */}
                            </div>
                            <div className='product-bestseller'>
                                <div className='product-bestseller-content'>
                                    <div className='product-bestseller-list'>
                                        <div className='tab-container'>
                                            {/** Tab product */}
                                            <div className='tab-panel active' id='tab-1'>
                                                <div className='category-products'>
                                                    <WomenTab />
                                                </div>
                                            </div>
                                            <div class="tab-panel" id="tab-2">
                                                <div class="category-products">
                                                    <FurnitureTab />
                                                </div>
                                            </div> 
                                            <div class="tab-panel" id="tab-3">
                                                <div class="category-products">
                                                    <MensTab />
                                                </div>
                                            </div>                   
                                            <div class="tab-panel" id="tab-4">
                                                <div class="category-products">
                                                    <KidsTab />
                                                </div>
                                            </div>               
                                            <div class="tab-panel" id="tab-5">
                                                <div class="category-products">
                                                    <AccessoriesTab />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default newproducts
