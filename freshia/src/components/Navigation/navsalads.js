import React, { Component } from 'react'
import SaladMenuImg1 from '../../images/menu-img.jpg'
import SaladMenuImg2 from '../../images/menu-img1.jpg'
import SaladMenuImg3 from '../../images/menu-img2.jpg'
import SaladMenuImg4 from '../../images/menu-img3.jpg'
import SaladMenuImg5 from '../../images/menu-img4.jpg'
import SaladMenuImg6 from '../../images/menu-img5.jpg'
class navsalads extends Component {
    render() {
        return (
            <>
                <div className='level0-wrapper dropdown-6col'>
                    <div className='container'>
                        <div className='level0-wrapper2'>
                            <div className='nav-block nav-block-center'>
                                {/* mega menu */}
                                <ul className='level0'>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Bread Salads</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cappon Magro</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Dakos</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fattoush</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Panzanella</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={SaladMenuImg1} alt="" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Fruit Salads</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Candle Salad</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Frogeye Salad</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Green Papaya Salad</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Waldorf Salad</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={SaladMenuImg2} alt="" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Salad Dressings</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Louis Dressings</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>French Dressings</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Gingner Dressings</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Italian Dressings</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={SaladMenuImg3} alt="" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Leaf Vegetable</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fenugreek</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Spinach</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Malva</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cabbage</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={SaladMenuImg4} alt="" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Stem Vegetables</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Crithmum</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fallopia Japonica</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Celery</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cardoon</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={SaladMenuImg5} alt="" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Root Vegetables</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Garlic</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Onion</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Potato</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Taros</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={SaladMenuImg6} alt="" /> </a> </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* level0 */}
                            </div>
                            {/* nav-block nav-block-center
                            nav-block nav-block-center */}
                        </div>
                         {/* level0-wrapper2 */}
                    </div>
                        {/* container */}
                </div>
                {/* level0-wrapper dropdown-6col
                mega menu */}
            </>
        )
    }
}

export default navsalads
