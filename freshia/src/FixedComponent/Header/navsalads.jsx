import React, { Component } from 'react'

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
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Bread Salads</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Cappon Magro</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Dakos</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Fattoush</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Panzanella</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/menu-img.jpg'} alt="Menu Image1" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Fruit Salads</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Candle Salad</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Frogeye Salad</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Green Papaya Salad</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Waldorf Salad</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/menu-img1.jpg'} alt="Menu Image2" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Salad Dressings</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Louis Dressings</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>French Dressings</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Gingner Dressings</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Italian Dressings</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/menu-img2.jpg'} alt="Menu Image3" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Leaf Vegetable</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Fenugreek</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Spinach</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Malva</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Cabbage</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/menu-img3.jpg'} alt="Menu Image4" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Stem Vegetables</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Crithmum</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Fallopia Japonica</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Celery</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Cardoon</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/menu-img4.jpg'} alt="Menu Image5" /> </a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Root Vegetables</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Garlic</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Onion</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Potato</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Taros</span></a> </li>
                                            <li className="push_img"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/menu-img5.jpg'} alt="Menu Image6" /> </a> </li>
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
