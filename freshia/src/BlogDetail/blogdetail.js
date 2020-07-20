import React, { Component } from 'react'
import Blog from './blog'
import SideBlog from './sideblog'

class blogdetail extends Component {
    render() {
        return (
            <>
                <div className='main-container top-space col2-right-layout'>
                    <div className='main container'>
                        <div className='row'>
                            <Blog />
                            <SideBlog />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default blogdetail
