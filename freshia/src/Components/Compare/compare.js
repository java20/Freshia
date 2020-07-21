import React, { Component } from 'react'

class compare extends Component {
    render() {
        return (
            <>
                <section className="main-container col1-layout">
                    <div className="main container">
                        <div className="col-main">
                            <div className="cart" style={{marginBottom: '20px'}}>
                                <div className="page-title">
                                    <h2>Compare Products</h2>
                                </div>
                                <div className="table-responsive">
                                    <table className=" data-table compare-table">
                                        <colgroup>
                                            <col width="1" />
                                            <col width="50%" />
                                            <col width="50%" />
                                        </colgroup>
                                        <tbody>
                                            <tr className="product-shop-row first odd">
                                                <th>&nbsp;</th>
                                                <td><a href="#/" className="btn btn-cancel" title="Remove This Item"><i className="fa fa-remove"></i></a> <a className="product-image" href="#/" title="Azrouel Dress"><img src={process.env.PUBLIC_URL + '/assets/images/product1.jpg'} alt="Azrouel Dress" width="200" /></a>
                                                    <h2 className="product-name"><a href="#/" title="Azrouel Dress">Azrouel Dress</a></h2>
                                                    <div className="price-box">
                                                        <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                                        <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                                                    </div>
                                                    <p>
                                                        <button type="button" title="Add to Cart" className="button"><span><span>Add to Cart</span></span></button>
                                                    </p>
                                                    <a href="#/" className="button wishlist">Add to Wishlist</a></td>
                                                <td><a href="#/" className="btn btn-cancel" title="Remove This Item"><i className="fa fa-remove"></i></a><a className="product-image" href="#/" title="Blue Lagoon polka-dot chiffon and lace thong"><img src={process.env.PUBLIC_URL + '/assets/images/product2.jpg'} alt="Azrouel Dress" width="200" /></a>
                                                    <h2 className="product-name"><a href="#/" title="Blue Lagoon polka-dot chiffon and lace thong">Blue Lagoon polka-dot chiffon and lace thong</a></h2>
                                                    <div className="price-box"> <span className="regular-price"> <span className="price">$50.00</span> </span> </div>
                                                    <p>
                                                        <button type="button" title="Add to Cart" className="button"><span><span>Add to Cart</span></span></button>
                                                    </p>
                                                    <a href="#/" className="button wishlist">Add to Wishlist</a></td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr className="even">
                                                <th>Description</th>
                                                <td><div> Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips, pleated ruffle around back, vent at back hem, fully lined. Concealed button fastenings through front. 58% silk, 37% metal, 5% polyester; lining: 92% polyester, 8% elastane. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean. </div></td>
                                                <td><div> Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips, pleated ruffle around back, vent at back hem, fully lined. Concealed button fastenings through front. 58% silk, 37% metal, 5% polyester; lining: 92% polyester, 8% elastane. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean. </div></td>
                                            </tr>
                                            <tr className="odd">
                                                <th>Color</th>
                                                <td><div> Black </div></td>
                                                <td><div> Black </div></td>
                                            </tr>
                                            <tr className="even">
                                                <th>Short Description</th>
                                                <td><div> Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips, pleated ruffle around back, vent at back hem, fully lined. Concealed button fastenings through front. 58% silk, 37% metal, 5% polyester; lining: 92% polyester, 8% elastane. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean. </div></td>
                                                <td><div> Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips, pleated ruffle around back, vent at back hem, fully lined. Concealed button fastenings through front. 58% silk, 37% metal, 5% polyester; lining: 92% polyester, 8% elastane. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean. </div></td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr className="add-to-row last odd">
                                                <th>&nbsp;</th>
                                                <td><div className="price-box">
                                                    <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                                    <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                                                </div>
                                                    <p>
                                                        <button type="button" title="Add to Cart" className="button"><span><span>Add to Cart</span></span></button>
                                                    </p>
                                                    <a href="#/" className="button wishlist">Add to Wishlist</a></td>
                                                <td><div className="price-box"> <span className="regular-price"> <span className="price">$50.00</span> </span> </div>
                                                    <p>
                                                        <button type="button" title="Add to Cart" className="button"><span><span>Add to Cart</span></span></button>
                                                    </p>
                                                    <a href="#/" className="button wishlist">Add to Wishlist</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default compare
