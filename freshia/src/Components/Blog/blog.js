import React, { Component } from 'react'
import Blog1 from './blog1'
import Blog2 from './blog2'
import Blog3 from './blog3'
import SideBlog from './sideblog'


class blog extends Component {
    render() {
        return (
            <>
                <div className='main-container top-space col2-right-layout'>
                    <div className='main container'>
                        <div className='row'>
                            <div className='col-sm-9 bounceInUp animated'>
                                <div className='col-main'>
                                    <div className='blog-wrapper' id='main'>
                                        <div className='site-content' id='primary'>
                                            <div role='main' id='content'>
                                                <Blog1 />
                                                <Blog2 />
                                                <Blog3 />
                                            </div>
                                        </div>
                                        <div class="pager">
                                            <p class="amount"> <strong>4 Item(s)</strong> </p>
                                            <div class="limiter">
                                                <label>Show</label>
                                                <select onchange="setLocation(this.value)">
                                                    <option selected="selected" value="#/blog/?limit=5"> 5 </option>
                                                    <option value="#/blog/?limit=10"> 10 </option>
                                                    <option value="#/blog/?limit=15"> 15 </option>
                                                    <option value="#/blog/?limit=20"> 20 </option>
                                                    <option value="#/blog/?limit=all"> All </option>
                                                </select>
                                   per page </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SideBlog />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default blog
