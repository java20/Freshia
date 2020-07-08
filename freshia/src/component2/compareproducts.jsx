import React, { Component } from 'react'

class compareproducts extends Component {
    render() {
        return (
            <>
                <div className="block block-compare">
                    <div className="block-title ">Compare Products (2)</div>
                    <div className="block-content">
                        <ol id="compare-items">
                            <li className="item odd">
                                <input type="hidden" value="2173" className="compare-item-id" />
                                <a className="btn-remove1" title="Remove This Item" href="/grid"></a> <a href="/grid" className="product-name"> Sofa with Box-Edge Polyester Wrapped Cushions</a> </li>
                            <li className="item last even">
                                <input type="hidden" value="2174" className="compare-item-id" />
                                <a className="btn-remove1" title="Remove This Item" href="/grid"></a> <a href="/grid" className="product-name"> Sofa with Box-Edge Down-Blend Wrapped Cushions</a> </li>
                        </ol>
                        <div className="ajax-checkout">
                            <button type="submit" title="Submit" className="button button-compare"><span>Compare</span></button>
                            <button type="submit" title="Submit" className="button button-clear"><span>Clear</span></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default compareproducts
