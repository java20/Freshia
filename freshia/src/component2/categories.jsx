import React, { Component } from 'react'

class categories extends Component {
    render() {
        return (
            <>

                <div className='side-nav-categories'>
                    <div className='block-title'> Categories </div>
                    {/* {block title} */}
                    {/** Begin Box-categories */}
                    <div className='box-content box-category'>
                        <ul>
                            <li> <a className="active" href="/grid">Salads</a> <span className="subDropdown minus"></span>
                                <ul className='level0_415' style={{ display: 'block' }} >
                                    <li> <a href="/grid"> Bread Salads </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Evening Tops </a> </li>
                                            <li> <a href="/grid"> Shirts &amp; Blouses </a> </li>
                                            <li> <a href="/grid"> Tunics </a> </li>
                                            <li> <a href="/grid"> Vests </a> </li>
                                            {/* end for-each  */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Fruit Salads </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Bags </a> </li>
                                            <li> <a href="/grid"> Designer Handbags </a> </li>
                                            <li> <a href="/grid"> Purses </a> </li>
                                            <li> <a href="/grid"> Shoulder Bags </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1  */}
                                    <li> <a href="/grid"> Salad Dressings </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Flat Shoes </a> </li>
                                            <li> <a href="/grid"> Flat Sandals </a> </li>
                                            <li> <a href="/grid"> Boots </a> </li>
                                            <li> <a href="/grid"> Heels </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Leaf Vegetable </a>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Bracelets </a> </li>
                                            <li> <a href="/grid"> Necklaces &amp; Pendants </a> </li>
                                            <li> <a href="/grid"> Pins &amp; Brooches </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Stem Vegetables </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Casual Dresses </a> </li>
                                            <li> <a href="/grid"> Evening </a> </li>
                                            <li> <a href="/grid"> Designer </a> </li>
                                            <li> <a href="/grid"> Party </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Root Vegetables </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Bras </a> </li>
                                            <li> <a href="/grid"> Bodies </a> </li>
                                            <li> <a href="/grid"> Lingerie Sets </a> </li>
                                            <li> <a href="/grid"> Shapewear </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1  */}
                                </ul>
                                {/* level0  */}
                            </li>
                            <li> <a href="/grid">Soups</a> <span class="subDropdown plus"></span>
                                <ul class="level0_455" style={{ display: 'none' }}>
                                    <li> <a href="/grid"> Shoes </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Flat Shoes </a> </li>
                                            <li> <a href="/grid"> Boots </a> </li>
                                            <li> <a href="/grid"> Heels </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Jewellery </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Bracelets </a> </li>
                                            <li> <a href="/grid"> Necklaces &amp; Pendants </a> </li>
                                            <li> <a href="/grid"> Pins &amp; Brooches </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Dresses </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Casual Dresses </a> </li>
                                            <li> <a href="/grid"> Evening </a> </li>
                                            <li> <a href="/grid"> Designer </a> </li>
                                            <li> <a href="/grid"> Party </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Jackets </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Coats </a> </li>
                                            <li> <a href="/grid"> Jackets </a> </li>
                                            <li> <a href="/grid"> Leather Jackets </a> </li>
                                            <li> <a href="/grid"> Blazers </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Swimwear </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Swimsuits </a> </li>
                                            <li> <a href="/grid"> Beach Clothing </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                </ul>
                                {/* level0  */}
                            </li>
                            {/* level0 */}
                            <li> <a href="/grid">Fast Food</a> <span class="subDropdown plus"></span>
                                <ul class="level0_482" style={{ display: 'none' }}>
                                    <li> <a href="/grid"> Smartphones </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Samsung </a> </li>
                                            <li> <a href="/grid"> Apple </a> </li>
                                            <li> <a href="/grid"> Blackberry </a> </li>
                                            <li> <a href="/grid"> Nokia </a> </li>
                                            <li> <a href="/grid"> HTC </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Cameras </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> Digital Cameras </a> </li>
                                            <li> <a href="/grid"> Camcorders </a> </li>
                                            <li> <a href="/grid"> Lenses </a> </li>
                                            <li> <a href="/grid"> Filters </a> </li>
                                            <li> <a href="/grid"> Tripod </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                    <li> <a href="/grid"> Accesories </a> <span class="subDropdown plus"></span>
                                        <ul class="level1" style={{ display: 'none' }}>
                                            <li> <a href="/grid"> HeadSets </a> </li>
                                            <li> <a href="/grid"> Batteries </a> </li>
                                            <li> <a href="/grid"> Screen Protectors </a> </li>
                                            <li> <a href="/grid"> Memory Cards </a> </li>
                                            <li> <a href="/grid"> Cases </a> </li>
                                            {/* end for-each */}
                                        </ul>
                                        {/* level1  */}
                                    </li>
                                    {/* level1 */}
                                </ul>
                                {/* level0  */}
                            </li>
                            {/* level0 */}
                            <li> <a href="/grid">Sandwitches</a> </li>
                            {/* level0 */}
                            <li class="last"> <a href="/grid">Fruits</a> </li>
                            {/* level0 */}
                        </ul>
                    </div>
                    {/* box-content box-category */}
                </div>
            </>
        )
    }
}

export default categories
