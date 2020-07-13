import React, { Component } from 'react'

class multipleaddresses extends Component {
    render() {
        return (
            <>
                <section className="main-container col1-layout">
                    <div className="main container">
                        <div className="col-main">

                            <div className="multiple_addresses wow bounceInUp animated">

                                <div className="state_bar">
                                    <ul id="checkout-progress-state" className="checkout-progress">
                                        <li className="active first" title="Select Addresses">Select Addresses</li>
                                        <li title="Shipping Information">Shipping Information</li>
                                        <li title="Billing Information">Billing Information</li>
                                        <li title="Place Order">Place Order</li>
                                        <li title="Order Success" className="last">Order Success</li>
                                    </ul>
                                    <script type="text/javascript">decorateGeneric($$('#checkout-progress-state li'), ['first','last']);</script>
                                </div>


                                <form method="post" action="#" id="checkout_multishipping_form">
                                    <div className="multi-address">
                                        <div className="page-title_multi">
                                            <h2>Ship to Multiple Addresses</h2>
                                        </div>
                                        {/* page-title_multi */}
                                        <div className="title-buttons">
                                            <button onclick="$('add_new_address_flag').value=1; $('checkout_multishipping_form').submit();" className="button new-address" title="Enter a New Address" type="button"><span>Enter a New Address</span></button>
                                        </div>
                                        {/* title-buttons */}
                                        <div className="addresses">
                                            <div className="table-responsive">
                                                <fieldset className="multiple-checkout">
                                                    <input type="hidden" id="can_continue_flag" value="0" name="continue" />
                                                    <input type="hidden" id="add_new_address_flag" value="0" name="new_address" />
                  Please select shipping address for applicable items
                  <table id="multiship-addresses-table" className="data-table">
                                                        <colgroup>
                                                            <col />
                                                            <col width="1" />
                                                            <col width="1" />
                                                            <col width="1" />
                                                        </colgroup>
                                                        <thead>
                                                            <tr className="first last">
                                                                <th>Product</th>
                                                                <th className="a-left">Qty</th>
                                                                <th>Send to</th>
                                                                <th>Remove</th>
                                                            </tr>
                                                        </thead>
                                                        <tfoot>
                                                            <tr className="first last">
                                                                <td className="a-right last" colspan="100"><button onclick="$('can_continue_flag').value=0" className="button btn-update" type="submit"><span>Update Qty &amp; Addresses</span></button></td>
                                                            </tr>
                                                        </tfoot>
                                                        <tbody>
                                                            <tr className="first odd">
                                                                <td><h4 className="product-name"><a href="#">Ocean Premium Saline Nasal Spray - 1.5 fl oz</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[0][43][qty]" /></td>
                                                                <td><select title="" className="" id="ship_0_43_address" name="ship[0][43][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="Remove item" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="even">
                                                                <td><h4 className="product-name"><a href="#">Apple iPod classic 160 GB Silver (7th Generation) NEWEST MODEL</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[1][63][qty]" /></td>
                                                                <td><select title="" className="" id="ship_1_63_address" name="ship[1][63][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="Remove item" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td><h4 className="product-name"><a href="#">Apple iPod classic 160 GB Silver (7th Generation) NEWEST MODEL</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[2][63][qty]" /></td>
                                                                <td><select title="" className="" id="ship_2_63_address" name="ship[2][63][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="even">
                                                                <td><h4 className="product-name"><a href="#">Nautilus T514 Treadmill</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[3][121][qty]" /></td>
                                                                <td><select title="" className="" id="ship_3_121_address" name="ship[3][121][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td><h4 className="product-name"><a href="#">14k White and Rose Gold Pink Diamond Flower Pendant (.07 Ct)</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[4][762][qty]" /></td>
                                                                <td><select title="" className="" id="ship_4_762_address" name="ship[4][762][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="even">
                                                                <td><h4 className="product-name"><a href="#">KR Tools 11414 Pro Series 14-Inch Heavy Duty Bolt Cutter</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[5][1283][qty]" /></td>
                                                                <td><select title="" className="" id="ship_5_1283_address" name="ship[5][1283][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td><h4 className="product-name"><a href="#">Little Noses Saline Spray/Drops for Dry for Stuffy Noses, 1-Ounce (30 ml) (Pack of 6)</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[6][1926][qty]" /></td>
                                                                <td><select title="" className="" id="ship_6_1926_address" name="ship[6][1926][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="even">
                                                                <td><h4 className="product-name"><a href="#">Dell 3.0 Ghz. Super Fast GX Computer with Dell 19 LCD Flat Panel Monitor, Big 500GB Hard Drive, 2GB RAM, DVD Burner (DVD-RW), and New Licensed Windows XP with Genuine Microsoft Authorized CD</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[7][4206][qty]" /></td>
                                                                <td><select title="" className="" id="ship_7_4206_address" name="ship[7][4206][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td><h4 className="product-name"><a href="#">Dell 3.0 Ghz. Super Fast GX Computer with Dell 19 LCD Flat Panel Monitor, Big 500GB Hard Drive, 2GB RAM, DVD Burner (DVD-RW), and New Licensed Windows XP with Genuine Microsoft Authorized CD</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[8][4206][qty]" /></td>
                                                                <td><select title="" className="" id="ship_8_4206_address" name="ship[8][4206][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="even">
                                                                <td><h4 className="product-name"><a href="#">Dell 3.0 Ghz. Super Fast GX Computer with Dell 19 LCD Flat Panel Monitor, Big 500GB Hard Drive, 2GB RAM, DVD Burner (DVD-RW), and New Licensed Windows XP with Genuine Microsoft Authorized CD</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[9][4206][qty]" /></td>
                                                                <td><select title="" className="" id="ship_9_4206_address" name="ship[9][4206][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td><h4 className="product-name"><a href="#">Dell 3.0 Ghz. Super Fast GX Computer with Dell 19 LCD Flat Panel Monitor, Big 500GB Hard Drive, 2GB RAM, DVD Burner (DVD-RW), and New Licensed Windows XP with Genuine Microsoft Authorized CD</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[10][4206][qty]" /></td>
                                                                <td><select title="" className="" id="ship_10_4206_address" name="ship[10][4206][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="even">
                                                                <td><h4 className="product-name"><a href="#">Dell 3.0 Ghz. Super Fast GX Computer with Dell 19 LCD Flat Panel Monitor, Big 500GB Hard Drive, 2GB RAM, DVD Burner (DVD-RW), and New Licensed Windows XP with Genuine Microsoft Authorized CD</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[11][4206][qty]" /></td>
                                                                <td><select title="" className="" id="ship_11_4206_address" name="ship[11][4206][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td><h4 className="product-name"><a href="#">Fantasy Furniture Fancy Sofa, Black</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[12][4207][qty]" /></td>
                                                                <td><select title="" className="" id="ship_12_4207_address" name="ship[12][4207][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="even">
                                                                <td><h4 className="product-name"><a href="#">Fantasy Furniture Fancy Sofa, Black</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[13][4207][qty]" /></td>
                                                                <td><select title="" className="" id="ship_13_4207_address" name="ship[13][4207][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td><h4 className="product-name"><a href="#">Dell Super Fast Optiplex Computer With LCD Flat Panel Monitor Included, Big 40 GB (Gigabyte) Hard Drive, 1 GB RAM, P4 Desktop PC, Single Core 2.8Ghz. Processor, XP</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[14][4208][qty]" /></td>
                                                                <td><select title="" className="" id="ship_14_4208_address" name="ship[14][4208][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                            <tr className="last even">
                                                                <td><h4 className="product-name"><a href="#">Apple MacBook MC516LL/A 13.3-Inch Laptop</a></h4></td>
                                                                <td><input type="text" className="input-text qty" size="2" value="1" name="ship[15][4212][qty]" /></td>
                                                                <td><select title="" className="" id="ship_15_4212_address" name="ship[15][4212][address]">
                                                                    <option selected="selected" value="1">john Doe, main tower, CA 46532, United States</option>
                                                                </select></td>
                                                                <td className="a-center last"><a href="#" title="&lt;span&gt;Remove item&lt;/span&gt;" className="btn-remove btn-remove2"><span>Remove item</span></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="buttons-set"> <a href="http://demo.magikthemes.com/index.php/Inspireblue/checkout/cart/" className="back-link"><small>« </small>Back to Shopping Cart</a>
                                                        <button onclick="$('can_continue_flag').value=1" className="button btn-continue" title="Continue to Shipping Information" type="submit"><span>Continue to Shipping Information</span></button>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            {/* multiple-checkout  */}
                                        </div>
                                    </div>
                                </form>
                                {/* addresses  */}


                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default multipleaddresses
