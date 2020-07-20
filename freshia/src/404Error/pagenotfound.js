import React, { Component } from 'react'

class pagenotfound extends Component {
    render() {
        return (
            <>
                <section className="content-wrapper">
                    <div className="container">
                        <div className="std">
                            <div className="page-not-found">
                                <img src={process.env.PUBLIC_URL + '/assets/images/404-img.jpg'} alt='404 error image' />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default pagenotfound
