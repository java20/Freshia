import React, { Component } from 'react'
import NavHome from './navhome'
import NavPages from './navpages'
import NavSalads from './navsalads'
import NavSoups from './navsoups'
import NavFastFoods from './navfastfood'
import NavSandwiches from './navsandwiches'
import NavCustom from './navcustom'
import Cart from './cart'

class navigation extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className='container'>
                        <div className='mm-toggle-wrap'>
                            <div className='mm-toggle'><i className='fa fa-align-justify'></i><span className='mm-label'>Menu</span></div>
                        </div>
                        <div className='nav-inner'>
                            {/* BEGIN NAV */}
                            <ul id='nav' className='hidden-xs'>
                                <li className="level0 parent drop-menu" id="nav-home"><a href="/home" className="level-top"><i className="fa fa-home"></i><span className="hidden">Home</span></a>
                                    <NavHome />      {/*Navigation Home tab */}
                                </li>
                                <li className="level0 nav-6 level-top drop-menu"> <a className="level-top" href="#/"> <span>Pages</span> </a>
                                    <NavPages pagetype="Home" />      {/*Navigation Pages tab */}
                                </li>
                                <li className="mega-menu"> <a className="level-top" href="/grid"><span>Salads</span></a>
                                    <NavSalads />      {/*Navigation Salad tab */}
                                </li>
                                <li className="mega-menu"> <a className="level-top" href="/grid"><span>Soups‎</span></a>
                                    <NavSoups />        {/*Navigation Soup tab */}
                               </li>
                                <li className="mega-menu"> <a className="level-top" href="/grid"><span>Fast Food</span></a>
                                    <NavFastFoods />    {/*Navigation Fast Food tab */}
                                </li>
                                <li className="mega-menu"> <a className="level-top" href="/grid"><span>Sandwiches‎</span></a>
                                    <NavSandwiches />   {/*Navigation Sandwiches tab */}
                                </li>
                                <li className="mega-menu"> <a className="level-top" href="/grid"><span>Fruits</span></a> </li>
                                <li className="nav-custom-link mega-menu"> <a href="#/" className="level-top"> <span>Custom</span> </a>
                                    <NavCustom />       {/*Navigation Custom tab */}
                                </li>
                            </ul>
                            <Cart />                 {/*Cart tab */}
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default navigation
