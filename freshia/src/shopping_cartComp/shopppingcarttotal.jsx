import React, { Component } from 'react'

class shopppingcarttotal extends Component {
    render() {
        return (
            <div className='col-sm-4'>
                <div className='totals'>
                    <h3>Shopping Cart Total</h3>
                    <div class="inner">
                        <table class="table shopping-cart-table-total" id="shopping-cart-totals-table">
                            <colgroup>
                                <col />
                                <col width="1" />
                            </colgroup>
                            <tfoot>
                                <tr>
                                    <td colspan="1" class="a-left"><strong>Grand Total</strong></td>
                                    <td class="a-right"><strong><span class="price">$77.38</span></strong></td>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td colspan="1" class="a-left"> Subtotal </td>
                                    <td class="a-right"><span class="price">$77.38</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="checkout">
                            <li>
                                <button class="button btn-proceed-checkout" title="Proceed to Checkout" type="button"><span>Proceed to Checkout</span></button>
                            </li>
                            <br />
                            <li><a title="Checkout with Multiple Addresses" href="multiple_addresses.html">Checkout with Multiple Addresses</a> </li>
                            <br />
                        </ul>
                    </div>
                    {/* inner */}
                </div>
            </div>
        )
    }
}

export default shopppingcarttotal
