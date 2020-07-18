import React, { Component } from 'react'

class navsandwiches extends Component {
    render() {
        return (
            <>
                <div className="level0-wrapper dropdown-6col">
                    <div className="container">
                        <div className="level0-wrapper2">
                            <div className="nav-block nav-block-center grid12-8 itemgrid itemgrid-4col">
                                {/*mega menu */}
                                <ul className="level0">
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>American</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>American sub</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Beef on weck</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Bologna sandwich</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Cheese Dream</span></a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Mexican</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Torta</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Cemita</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Toast</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Chanclas</span></a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Grilled</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Cheese</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Chocolate</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Garlic Cheese</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Veg Cheese</span></a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Clubbed</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Triple Decker California</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Tempeh Reuben</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Mediterranean Veggie</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="/grid"><span>Leftover Turkey</span></a> </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/*level0  */}
                            </div>
                            {/*nav-block nav-block-center */}
                            <div className="nav-block nav-block-right std grid12-4"><img src={process.env.PUBLIC_URL + '/assets/images/menu-furniutre.png'} alt="Furniture" /> </div>
                        </div>
                        {/*level0-wrapper2  */}
                    </div>
                    {/*container  */}
                </div>
                {/*level0-wrapper dropdown-6col 
                     mega menu  */}
            </>
        )
    }
}

export default navsandwiches
