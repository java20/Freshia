import React, { Component } from 'react'

class recentlyviewed extends Component {
    render() {
        return (
            <>
                <div className="block block-list block-viewed">
                    <div className="block-title"> Recently Viewed </div>
                    <div className="block-content">
                        <ol id="recently-viewed-items">
                            <li className="item odd">
                                <p className="product-name"><a href="#/"> Armchair with Box-Edge Upholstered Arm</a></p>
                            </li>
                            <li className="item even">
                                <p className="product-name"><a href="#/"> Pearce Upholstered Slee pere</a></p>
                            </li>
                            <li className="item last odd">
                                <p className="product-name"><a href="#/"> Sofa with Box-Edge Down-Blend Wrapped Cushions</a></p>
                            </li>
                        </ol>
                    </div>
                </div>
            </>
        )
    }
}

export default recentlyviewed
