import React, { Component } from 'react'
import MainSection from './mainsection'
import SideSection from './sidesection'

class contactus extends Component {
    render() {
        return (
            <>
                <div class="breadcrumbs">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <ul>
                                    <li class="home"> <a title="Go to Home Page" href="index.html">Home</a> <span>/</span> </li>
                                    <li class="category1601"> <strong>Contact Us</strong> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-container col2-right-layout'>
                    <div className='main container'>
                        <div className='row'>
                            <MainSection />
                            <SideSection />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default contactus
