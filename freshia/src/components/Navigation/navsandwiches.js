import React, { Component } from 'react'
import SandwitchMenuImg from '../../images/menu-furniutre.png'

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
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>American</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>American sub</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Beef on weck</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bologna sandwich</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cheese Dream</span></a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Mexican</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Torta</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cemita</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Toast</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chanclas</span></a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Grilled</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cheese</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chocolate</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Garlic Cheese</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Veg Cheese</span></a> </li>
                                        </ul>
                                    </li>
                                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Clubbed</span></a>
                                        <ul className="level1">
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Triple Decker California</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Tempeh Reuben</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Mediterranean Veggie</span></a> </li>
                                            <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leftover Turkey</span></a> </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/*level0  */}
                            </div>
                            {/*nav-block nav-block-center */}
                            <div className="nav-block nav-block-right std grid12-4"><img src={SandwitchMenuImg} alt="Furniture" /> </div>
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
