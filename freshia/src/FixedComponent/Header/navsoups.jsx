import React, { Component } from 'react'

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
                                        <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Cold Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Red Bean Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Fruit Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Naengguk</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Borscht</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Cream Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Chowder</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Asparagus Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Broccoli Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Mushroom Soup</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Vegitable Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>French Onion Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Leek Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Minestrone</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Spring Soup</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Bean Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Bouneschlupp</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Jókai Bean Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Kwati Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Senate Bean</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Bread Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Tomato Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Manchow Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Sweet Corn Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Shorba Soup</span></a> </li>
                                            </ul>
                                        </li>
                                        <li className="level3 nav-6-1 parent item"> <a href="/grid"><span>Chinese Soups</span></a>
                                            <ul className="level1">
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Hot & Sour</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Noodle Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Corn Crab Soup</span></a> </li>
                                                <li className="level2 nav-6-1-1"> <a href="/grid"><span>Sago Soup</span></a> </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/*level0  */}
                                </div>
                                <div className="col-2">
                                    <div className="menu_image1"> <a title="" href="#/"><img alt="menu_image" src={process.env.PUBLIC_URL + '/assets/images/menu-shoes.png'} /> </a> </div>
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
