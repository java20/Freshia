import React, { Component } from 'react'
import MainSection from './mainsection'
import SideSection from './sidesection'

class checkout extends Component {
    render() {
        return (
            <>
                <div className='main-container top-space col2-right-layout'>
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

export default checkout
