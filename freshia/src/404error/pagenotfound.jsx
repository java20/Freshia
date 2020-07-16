import React, { Component } from 'react'
import PageNotFound from '../images/404-img.jpg'

class pagenotfound extends Component {
    render() {
        return (
            <>
                <section className="content-wrapper">
                    <div className="container">
                        <div className="std">
                            <div className="page-not-found">
                                <img src={PageNotFound} />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default pagenotfound
