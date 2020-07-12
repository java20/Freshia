import React, { Component } from 'react'
import Product1 from '../products-images/product1.jpg'
import Product2 from '../products-images/product4.jpg'

class products extends Component {
    render() {
        return (
            <>
                <div className='table-responsive'>
                    <form method='post' action='#updatePost/'>
                        <input type="hidden" value="Vwww7itR3zQFe86m" name="form_key" />
                        <fieldset>
                            <table class="data-table cart-table" id="shopping-cart-table">
                                <colgroup>
                                    <col width="1" />
                                    <col />
                                    <col width="1" />
                                    <col width="1" />
                                    <col width="1" />
                                    <col width="1" />
                                    <col width="1" />
                                </colgroup>
                                <thead>
                                    <tr class="first last">
                                        <th rowspan="1">&nbsp;</th>
                                        <th rowspan="1"><span class="nobr">Product Name</span></th>
                                        <th rowspan="1"></th>
                                        <th colspan="1" class="a-center"><span class="nobr">Unit Price</span></th>
                                        <th class="a-center" rowspan="1">Qty</th>
                                        <th colspan="1" class="a-center">Subtotal</th>
                                        <th class="a-center" rowspan="1">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr class="first last">
                                        <td class="a-right last" colspan="50"><button onclick="setLocation('#')" class="button btn-continue" title="Continue Shopping" type="button"><span>Continue Shopping</span></button>
                                            <button class="button btn-update" title="Update Cart" value="update_qty" name="update_cart_action" type="submit"><span>Update Cart</span></button>
                                            <button id="empty_cart_button" class="button btn-empty" title="Clear Cart" value="empty_cart" name="update_cart_action" type="submit"><span>Clear Cart</span></button></td>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr class="first odd">
                                        <td class="image"><a class="product-image" title="Sample Product" href="#/women-s-crepe-printed-black/"><img width="75" alt="Sample Product" src={Product1} /></a></td>
                                        <td><h2 class="product-name"> <a href="#/women-s-crepe-printed-black/">Sample Product</a> </h2></td>
                                        <td class="a-center"><a title="Edit item parameters" class="edit-bnt" href="#configure/id/15945/"></a></td>
                                        <td class="a-right"><span class="cart-price"> <span class="price">$70.00</span> </span></td>
                                        <td class="a-center movewishlist"><input maxlength="12" class="input-text qty" title="Qty" size="4" value="1" name="cart[15945][qty]" /></td>
                                        <td class="a-right movewishlist"><span class="cart-price"> <span class="price">$70.00</span> </span></td>
                                        <td class="a-center last"><a class="button remove-item" title="Remove item" href="#"><span><span>Remove item</span></span></a></td>
                                    </tr>
                                    <tr class="last even">
                                        <td class="image"><a class="product-image" title="Sample Product" href="#women-s-u-tank-top/"><img width="75" alt="Sample Product" src={Product2} /></a></td>
                                        <td><h2 class="product-name"> <a href="#women-s-u-tank-top/">Sample Product</a> </h2></td>
                                        <td class="a-center"><a title="Edit item parameters" class="edit-bnt" href="#configure/id/15946/"></a></td>
                                        <td class="a-right"><span class="cart-price"> <span class="price">$7.38</span> </span></td>
                                        <td class="a-center movewishlist"><input maxlength="12" class="input-text qty" title="Qty" size="4" value="1" name="cart[15946][qty]" /></td>
                                        <td class="a-right movewishlist"><span class="cart-price"> <span class="price">$7.38</span> </span></td>
                                        <td class="a-center last"><a class="button remove-item" title="Remove item" href="#"><span><span>Remove item</span></span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </fieldset>
                    </form>
                </div>
            </>
        )
    }
}

export default products
