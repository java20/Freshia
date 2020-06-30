import React, { Component } from 'react'
import SoupMenuImg from '../../images/menu-shoes.png'
class navsoups extends Component {
    render() {
        return (
            <>
                <div className="level0-wrapper dropdown-6col">
                    <div className="container">
                        <div className="level0-wrapper2">
                            <div className="nav-block nav-block-center">
                                {/*mega menu */}
                                <div className="col-1">
                                    <ul className="level0">
                                        <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Cold Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Red Bean Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fruit Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Naengguk</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Borscht</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Cream Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chowder</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Asparagus Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Broccoli Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Mushroom Soup</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Vegitable Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>French Onion Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leek Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Minestrone</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Spring Soup</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Bean Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bouneschlupp</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Jókai Bean Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Kwati Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Senate Bean</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Bread Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Tomato Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Manchow Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sweet Corn Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Shorba Soup</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Chinese Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Hot & Sour</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Noodle Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Corn Crab Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sago Soup</span></a> </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/*level0  */}
                                </div>
                                <div className="col-2">
                                    <div className="menu_image1"> <a title="" href="#"><img alt="menu_image" src={SoupMenuImg} /> </a> </div>
                                </div>
                            </div>
                            {/*nav-block nav-block-center  */}

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

export default navsoups
