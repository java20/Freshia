import React, { Component } from 'react'

class shopby extends Component {
     
    render() {
        return (
            <>
                <div className="block block-layered-nav">
                    <div className="block-title">Shop By</div>
                    <div className="block-content">
                        <p className="block-subtitle">Shopping Options</p>
                        <dl id="narrow-by-list">
                            <dt className="odd">Price</dt>
                            <dd className="odd">
                                <ol>
                                    <li> <a href="#/"><span className="price">$0.00</span> - <span className="price">$99.99</span></a> (6) </li>
                                    <li> <a href="#/"><span className="price">$100.00</span> and above</a> (6) </li>
                                </ol>
                            </dd>
                            <dt className="even">Manufacturer</dt>
                            <dd className="even">
                                <ol>
                                    <li> <a href="#/">TheBrand</a> (9) </li>
                                    <li> <a href="#/">Company</a> (4) </li>
                                    <li> <a href="#/">LogoFashion</a> (1) </li>
                                </ol>
                            </dd>
                            <dt className="odd">Color</dt>
                            <dd className="odd">
                                <ol>
                                    <li> <a href="#/">Green</a> (1) </li>
                                    <li> <a href="#/">White</a> (5) </li>
                                    <li> <a href="#/">Black</a> (5) </li>
                                    <li> <a href="#/">Gray</a> (4) </li>
                                    <li> <a href="#/">Dark Gray</a> (3) </li>
                                    <li> <a href="#/">Blue</a> (1) </li>
                                </ol>
                            </dd>
                            <dt className="last even">Size</dt>
                            <dd className="last even">
                                <ol>
                                    <li> <a href="#/">S</a> (6) </li>
                                    <li> <a href="#/">M</a> (6) </li>
                                    <li> <a href="#/">L</a> (4) </li>
                                    <li> <a href="#/">XL</a> (4) </li>
                                </ol>
                            </dd>
                        </dl>
                    </div>
                </div>
            </>
        )
    }
}

export default shopby
