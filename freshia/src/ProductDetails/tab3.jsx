import React, { Component } from 'react'

class tab3 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             nickname: '',
             summary: '',
             review: ''
        }
    }

    handleNickName = (name) => {
        this.setState({
            nickname: name.target.value
        });
    }

    handleSummary = (Summary) => {
        this.setState({
            summary: Summary.target.value
        });
    }

    handleReview = (Review) => {
        this.setState({
            review: Review.target.value
        });
    }
    

    render() {
        return (
            <>
                <div className='box-collateral box-reviews' id="customer-reviews">
                    <div className='box-reviews1'>
                        <div className='form-add'>
                            <form id="review-form" method="post" action="http://www.magikcommerce.com/review/product/post/id/176/">
                                <h3>Write Your Own Review</h3>
                                <fieldset>
                                    <h4>How do you rate this product? <em className="required">*</em></h4>
                                    <span id="input-message-box"></span>
                                    <table id="product-review-table" className="data-table">
                                        <colgroup>
                                            <col />
                                            <col width="1" />
                                            <col width="1" />
                                            <col width="1" />
                                            <col width="1" />
                                            <col width="1" />
                                        </colgroup>
                                        <thead>
                                            <tr className="first last">
                                                <th>&nbsp;</th>
                                                <th><span className="nobr">1 *</span></th>
                                                <th><span className="nobr">2 *</span></th>
                                                <th><span className="nobr">3 *</span></th>
                                                <th><span className="nobr">4 *</span></th>
                                                <th><span className="nobr">5 *</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="first odd">
                                                <th>Price</th>
                                                <td className="value"><input type="radio" className="radio" value="11" id="Price_1" name="ratings[3]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="12" id="Price_2" name="ratings[3]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="13" id="Price_3" name="ratings[3]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="14" id="Price_4" name="ratings[3]" /></td>
                                                <td className="value last"><input type="radio" className="radio" value="15" id="Price_5" name="ratings[3]" /></td>
                                            </tr>
                                            <tr className="even">
                                                <th>Value</th>
                                                <td className="value"><input type="radio" className="radio" value="6" id="Value_1" name="ratings[2]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="7" id="Value_2" name="ratings[2]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="8" id="Value_3" name="ratings[2]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="9" id="Value_4" name="ratings[2]" /></td>
                                                <td className="value last"><input type="radio" className="radio" value="10" id="Value_5" name="ratings[2]" /></td>
                                            </tr>
                                            <tr className="last odd">
                                                <th>Quality</th>
                                                <td className="value"><input type="radio" className="radio" value="1" id="Quality_1" name="ratings[1]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="2" id="Quality_2" name="ratings[1]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="3" id="Quality_3" name="ratings[1]" /></td>
                                                <td className="value"><input type="radio" className="radio" value="4" id="Quality_4" name="ratings[1]" /></td>
                                                <td className="value last"><input type="radio" className="radio" value="5" id="Quality_5" name="ratings[1]" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <input type="hidden" value="" className="validate-rating" name="validate_rating" />
                                    <div className="review1">
                                        <ul className="form-list">
                                            <li>
                                                <label className="required" for="nickname_field">Nickname<em>*</em></label>
                                                <div className="input-box">
                                                    <input type="text" value={this.state.nickname} className="input-text" id="nickname_field" name="nickname" onChange={this.handleNickName} />
                                                </div>
                                            </li>
                                            <li>
                                                <label className="required" for="summary_field">Summary<em>*</em></label>
                                                <div className="input-box">
                                                    <input type="text" value={this.state.summary} className="input-text" id="summary_field" name="title" onChange={this.handleSummary} />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="review2">
                                        <ul>
                                            <li>
                                                <label className="required " for="review_field">Review<em>*</em></label>
                                                <div className="input-box">
                                                    <textarea rows="3" value={this.state.review} cols="5" id="review_field" name="detail" onChange={this.handleReview}></textarea>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="buttons-set">
                                            <button className="button submit" title="Submit Review" type="submit"><span>Submit Review</span></button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className='box-reviews2'>
                            <h3>Customer Reviews</h3>
                            <div className='box visible'>
                                <ul>
                                    <li>
                                        <table className="ratings-table">
                                            <colgroup>
                                                <col width="1" />
                                                <col />
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <th>Value</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '100%' }}></div>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <th>Quality</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '100%' }}></div>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <th>Price</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '100%' }}></div>
                                                    </div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="review">
                                            <h6><a href="#/">Excellent</a></h6>
                                            <small>Review by <span>Leslie Prichard </span>on 1/3/2014 </small>
                                            <div className="review-txt"> I have purchased shirts from Minimalism a few times and am never disappointed. The quality is excellent and the shipping is amazing. It seems like it's at your front door the minute you get off your pc. I have received my purchases within two days - amazing.</div>
                                        </div>
                                    </li>
                                    <li>
                                        <table className="ratings-table">
                                            <colgroup>
                                                <col width="1" />
                                                <col />
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <th>Value</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '100%' }}></div>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <th>Quality</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '100%' }}></div>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <th>Price</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="review">
                                            <h6><a href="#/catalog/product/view/id/60/">Amazing</a></h6>
                                            <small>Review by <span>Sandra Parker</span>on 1/3/2014 </small>
                                            <div className="review-txt"> Minimalism is the online ! </div>
                                        </div>
                                    </li>
                                    <li>
                                        <table className='ratings-table'>
                                            <colgroup>
                                                <col width='1' />
                                                <col />
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <th>Value</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '100%' }}></div>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <th>Quality</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '100%' }}></div>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <th>Price</th>
                                                    <td><div className="rating-box">
                                                        <div className="rating" style={{ width: '80%' }}></div>
                                                    </div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="review">
                                            <h6><a href="#/catalog/product/view/id/59/">Nicely</a></h6>
                                            <small>Review by <span>Anthony  Lewis</span>on 1/3/2014 </small>
                                            <div className="review-txt last"> Unbeatable service and selection. This store has the best business model I have seen on the net. They are true to their word, and go the extra mile for their customers. I felt like a purchasing partner more than a customer. You have a lifetime client in me. </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="actions"> <a className="button view-all" id="revies-button" href="#/"><span><span>View all</span></span></a> </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default tab3
