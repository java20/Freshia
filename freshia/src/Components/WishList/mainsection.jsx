import React, { Component } from 'react'

class mainsection extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             textarea1: '',
             textarea2: '',
             textarea3: ''
        }
    }

    handleTextArea1 = (text) => {
        this.setState({
            textarea1:text.target.value
        });
    }

    handleTextArea2 = (text) => {
        this.setState({
            textarea2:text.target.value
        });
    }

    handleTextArea3 = (text) => {
        this.setState({
            textarea3:text.target.value
        });
    }
    

    render() {
        return (
            <>
                <section className="col-sm-9 wow bounceInUp animated">
                    <div className="col-main">
                        <div className="my-account">
                            <div className="page-title">
                                <h2>My Wishlist</h2>
                            </div>
                            <div className="my-wishlist">
                                <div className="table-responsive">
                                    <form method="post" action="#/wishlist/index/update/wishlist_id/1/" id="wishlist-view-form">
                                        <fieldset>
                                            <input type="hidden" value="ROBdJO5tIbODPZHZ" name="form_key" />
                                            <table id="wishlist-table" className="clean-table linearize-table data-table">
                                                <thead>
                                                    <tr className="first last">
                                                        <th className="customer-wishlist-item-image"></th>
                                                        <th className="customer-wishlist-item-info"></th>
                                                        <th className="customer-wishlist-item-quantity">Quantity</th>
                                                        <th className="customer-wishlist-item-price">Price</th>
                                                        <th className="customer-wishlist-item-cart"></th>
                                                        <th className="customer-wishlist-item-remove"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr id="item_31" className="first odd">
                                                        <td className="wishlist-cell0 customer-wishlist-item-image"><a title="Softwear Women's Designer" href="#/" className="product-image"> <img width="150" alt="Softwear Women's Designer" src={process.env.PUBLIC_URL + '/assets/images/product1.jpg'} /> </a></td>
                                                        <td className="wishlist-cell1 customer-wishlist-item-info"><h3 className="product-name"><a title="Softwear Women's Designer" href="#/">Softwear Women's Designer</a></h3>
                                                            <div className="description std">
                                                                <div className="inner">A Black Multi-Coloured Printed Leggings for Women from Softwear.</div>
                                                            </div>
                                                            <textarea title="Comment" value={this.state.textarea1} onChange={this.handleTextArea1} onblur="focusComment(this)" onfocus="focusComment(this)" cols="5" rows="3" name="description[31]" style={{ height: '120px', width: '96%' }}></textarea></td>
                                                        <td data-rwd-label="Quantity" className="wishlist-cell2 customer-wishlist-item-quantity"><div className="cart-cell">
                                                            <div className="add-to-cart-alt">
                                                                <input type="text" value="1" name="qty[31]" className="input-text qty validate-not-negative-number" pattern="\d*" />
                                                            </div>
                                                        </div></td>
                                                        <td data-rwd-label="Price"  className="wishlist-cell3 customer-wishlist-item-price"><div className="cart-cell">
                                                            <div className="price-box"> <span id="product-price-39" className="regular-price"> <span className="price">$99.00</span> </span> </div>
                                                        </div></td>
                                                        <td className="wishlist-cell4 customer-wishlist-item-cart"><div className="cart-cell">
                                                            <button className="button btn-cart" onclick="addWItemToCart(31);" title="Add to Cart" type="button"><span><span>Add to Cart</span></span></button>
                                                        </div>
                                                            <p><a href="#/" className="">Edit</a></p></td>
                                                        <td className="wishlist-cell5 customer-wishlist-item-remove last"><a className="remove-item" title="Clear Cart" href="#/"><span><span></span></span></a></td>
                                                    </tr>
                                                    <tr id="item_33" className="odd">
                                                        <td className="wishlist-cell0 customer-wishlist-item-image"><a title="Softwear Women's Designer" href="#/" className="product-image"> <img width="150" alt="Softwear Women's Designer" src={process.env.PUBLIC_URL + '/assets/images/product2.jpg'} /> </a></td>
                                                        <td className="wishlist-cell1 customer-wishlist-item-info"><h3 className="product-name"><a title="Softwear Women's Designer" href="#/">Softwear Women's Designer</a></h3>
                                                            <div className="description std">
                                                                <div className="inner">A Black Multi-Coloured Printed Leggings for Women from Softwear.</div>
                                                            </div>
                                                            <textarea title="Comment" value={this.state.textarea2} onChange={this.handleTextArea2} onblur="focusComment(this)" onfocus="focusComment(this)" cols="5" rows="3" name="description[31]" style={{ height: '120px', width: '96%' }}></textarea></td>
                                                        <td data-rwd-label="Quantity" className="wishlist-cell2 customer-wishlist-item-quantity"><div className="cart-cell">
                                                            <div className="add-to-cart-alt">
                                                                <input type="text" value="1" name="qty[31]" className="input-text qty validate-not-negative-number" pattern="\d*" />
                                                            </div>
                                                        </div></td>
                                                        <td data-rwd-label="Price" className="wishlist-cell3 customer-wishlist-item-price"><div className="cart-cell">
                                                            <div className="price-box"> <span id="product-price-39" className="regular-price"> <span className="price">$99.00</span> </span> </div>
                                                        </div></td>
                                                        <td className="wishlist-cell4 customer-wishlist-item-cart"><div className="cart-cell">
                                                            <button className="button btn-cart" onclick="addWItemToCart(31);" title="Add to Cart" type="button"><span><span>Add to Cart</span></span></button>
                                                        </div>
                                                            <p><a href="#/" className="">Edit</a></p></td>
                                                        <td className="wishlist-cell5 customer-wishlist-item-remove last"><a className="remove-item" title="Clear Cart" href="#/"><span><span></span></span></a></td>
                                                    </tr>
                                                    <tr id="item_32" className="last even">
                                                        <td className="wishlist-cell0 customer-wishlist-item-image"><a title="Slim Fit Casual Shirt" href="#/" className="product-image"> <img width="150" alt="Slim Fit Casual Shirt" src={process.env.PUBLIC_URL + '/assets/images/product3.jpg'} /> </a></td>
                                                        <td className="wishlist-cell1 customer-wishlist-item-info"><h3 className="product-name"><a title="Slim Fit Casual Shirt" href="#/">Slim Fit Casual Shirt</a></h3>
                                                            <div className="description std">
                                                                <div className="inner">Blue colour self design casual shirt.</div>
                                                            </div>
                                                            <textarea title="Comment" value={this.state.textarea3} onChange={this.handleTextArea3} onblur="focusComment(this)" onfocus="focusComment(this)" cols="5" rows="3" name="description[32]" style={{ height: '120px', width: '96%' }}></textarea></td>
                                                        <td data-rwd-label="Quantity" className="wishlist-cell2 customer-wishlist-item-quantity"><div className="cart-cell">
                                                            <div className="add-to-cart-alt">
                                                                <input type="text" value="1" name="qty[32]" className="input-text qty validate-not-negative-number" pattern="\d*" />
                                                            </div>
                                                        </div></td>
                                                        <td data-rwd-label="Price" className="wishlist-cell3 customer-wishlist-item-price"><div className="cart-cell">
                                                            <div className="price-box"> <span id="product-price-2" className="regular-price"> <span className="price">$55.00</span> </span> </div>
                                                        </div></td>
                                                        <td className="wishlist-cell4 customer-wishlist-item-cart"><div className="cart-cell">
                                                            <button className="button btn-cart" onclick="addWItemToCart(32);" title="Add to Cart" type="button"><span><span>Add to Cart</span></span></button>
                                                        </div>
                                                            <p><a href="#/" className="">Edit</a></p></td>
                                                        <td className="wishlist-cell5 customer-wishlist-item-remove last"><a className="remove-item" title="Clear Cart" href="#/"><span><span></span></span></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="buttons-set buttons-set2">
                                                <button className="button btn-share" title="Share Wishlist" name="save_and_share" type="submit"><span>Share Wishlist</span></button>
                                                <button className="button btn-add" onclick="addAllWItemsToCart()" title="Add All to Cart" type="button"><span>Add All to Cart</span></button>
                                                <button className="button btn-update" title="Update Wishlist" name="do" type="submit"><span>Update Wishlist</span></button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div className="buttons-set">
                                <p className="back-link"><a href="#/customer/account/"><small>« </small>Back</a></p>
                            </div>
                        </div></div>
                </section>
            </>
        )
    }
}

export default mainsection
