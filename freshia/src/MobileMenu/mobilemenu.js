import React, { Component } from 'react'

class mobilemenu extends Component {
    render() {
        return (
            <>
                <div id="mobile-menu">
                    <ul>
                        <li>
                            <div className="mm-search">
                                <form id="search1" name="search">
                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit"><i className="fa fa-search"></i> </button>
                                        </div>
                                        <input type="text" className="form-control simple" placeholder="Search ..." name="srch-term" id="srch-term" />
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li><a href="/home">Home</a>
                            <ul>
                                <li className="level1"><a href="/home"><span>Fashion Store</span></a> </li>
                                <li className="level1"><a href="../digital/home"><span>Digital Store</span></a> </li>
                                <li className="level1"><a href="../furniture/home"><span>Furniture Store</span></a> </li>
                                <li className="level1"><a href="../jewellery/home"><span>Jewellery Store</span></a> </li>
                            </ul>
                        </li>
                        <li><a href="#/">Pages</a>
                            <ul>
                                <li><a href="/grid">Grid</a> </li>
                                <li> <a href="/list">List</a> </li>
                                <li> <a href="/productdetail">Product Detail</a> </li>
                                <li> <a href="/shoppingcart">Shopping Cart</a> </li>
                                <li><a href="/checkout">Checkout</a> </li>
                                <li> <a href="/wishlist">Wishlist</a> </li>
                                <li> <a href="/dashboard">Dashboard</a> </li>
                                <li> <a href="/multipleaddresses">Multiple Addresses</a> </li>
                                <li> <a href="/aboutus">About us</a> </li>
                                <li><a href="/blog">Blog</a>
                                    <ul>
                                        <li><a href="/blogdetail">Blog Detail</a> </li>
                                    </ul>
                                </li>
                                <li><a href="/contactus">Contact us</a> </li>
                                <li><a href='/404error'>404 Error Page</a> </li>
                            </ul>
                        </li>
                        <li><a href="#/">Salads</a>
                            <ul>
                                <li> <a href="#/" className="">Bread Salads</a>
                                    <ul>
                                        <li> <a href="/grid" className="">Cappon Magro</a> </li>
                                        <li> <a href="/grid" className="">Dakos</a> </li>
                                        <li> <a href="/grid" className="">Fattoush</a> </li>
                                        <li> <a href="/grid" className="">Panzanella</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Fruit Salads</a>
                                    <ul>
                                        <li> <a href="/grid">Candle Salad</a> </li>
                                        <li> <a href="/grid">Frogeye Salad</a> </li>
                                        <li> <a href="/grid">Green Papaya Salad</a> </li>
                                        <li> <a href="/grid">Waldorf Salad</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Salad Dressings</a>
                                    <ul>
                                        <li> <a href="/grid">Louis Dressings</a> </li>
                                        <li> <a href="/grid">French Dressings</a> </li>
                                        <li> <a href="/grid">Gingner Dressings</a> </li>
                                        <li> <a href="/grid">Italian Dressings</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Leaf Vegetable</a>
                                    <ul>
                                        <li> <a href="/grid">Fenugreek</a> </li>
                                        <li> <a href="/grid">Spinach</a> </li>
                                        <li> <a href="/grid">Malva</a> </li>
                                        <li> <a href="/grid">Cabbage</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Stem Vegetables</a>
                                    <ul>
                                        <li> <a href="/grid">Crithmum</a> </li>
                                        <li> <a href="/grid">Fallopia Japonica</a> </li>
                                        <li> <a href="/grid">Celery</a> </li>
                                        <li> <a href="/grid">Cardoon</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Root Vegetables</a>
                                    <ul>
                                        <li> <a href="/grid">Garlic</a> </li>
                                        <li> <a href="/grid">Onion</a> </li>
                                        <li> <a href="/grid">Potato</a> </li>
                                        <li> <a href="/grid">Taros</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/grid">Soups‎</a>
                            <ul>
                                <li> <a href="/grid" className="">Cold Soups</a>
                                    <ul className="level1">
                                        <li className="level2 nav-6-1-1"><a href="/grid">Red Bean Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Fruit Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Naengguk</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Borscht</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Cream Soups</a>
                                    <ul className="level1">
                                        <li className="level2 nav-6-1-1"><a href="/grid">Chowder</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Asparagus Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Broccoli Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Mushroom Soup</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Vegitable Soups</a>
                                    <ul className="level1">
                                        <li className="level2 nav-6-1-1"><a href="/grid">French Onion Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Leek Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Minestrone</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Spring Soup</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="#.html">Bean Soups</a>
                                    <ul className="level1">
                                        <li className="level2 nav-6-1-1"><a href="/grid">Bouneschlupp</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Jókai Bean Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Kwati Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Shorba Soup</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Chinese Soups</a>
                                    <ul className="level1">
                                        <li className="level2 nav-6-1-1"><a href="/grid">Hot & Sour</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Noodle Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Corn Crab Soup</a> </li>
                                        <li className="level2 nav-6-1-1"><a href="/grid">Sago Soup</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/grid">Fast Food</a>
                            <ul>
                                <li> <a href="/grid"><span>Indian</span></a>
                                    <ul>
                                        <li> <a href="/grid"><span>Aloo Chaat</span></a> </li>
                                        <li> <a href="/grid"><span>Batata Vada</span></a> </li>
                                        <li> <a href="/grid"><span>Kachori</span></a> </li>
                                        <li> <a href="/grid"><span>Panipuri</span></a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid" className=""><span>Pizza</span></a>
                                    <ul>
                                        <li> <a href="/grid"><span>Greek Pizza</span></a> </li>
                                        <li> <a href="/grid"><span>Pizza Rolls</span></a> </li>
                                        <li> <a href="/grid"><span>Grilled Pizza</span></a> </li>
                                        <li> <a href="/grid"><span>Pizza Strips</span></a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid"><span>McDonald's</span></a>
                                    <ul>
                                        <li> <a href="/grid"><span>Kiwiburger</span></a> </li>
                                        <li> <a href="/grid"><span>Happy Meal</span></a> </li>
                                        <li> <a href="/grid"><span>McMuffin</span></a> </li>
                                        <li> <a href="/grid"><span>McGriddles</span></a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid"><span>Wendy's Foods</span></a>
                                    <ul>
                                        <li> <a href="/grid"><span>Bacon Deluxe</span></a> </li>
                                        <li> <a href="/grid"><span>Baconator</span></a> </li>
                                        <li> <a href="/grid"><span>Frescata</span></a> </li>
                                        <li> <a href="/grid"><span>Frosty</span></a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid"><span>Burger King</span></a>
                                    <ul>
                                        <li> <a href="/grid"><span>Big King</span></a> </li>
                                        <li> <a href="/grid"><span>TenderCrisp</span></a> </li>
                                        <li> <a href="/grid"><span>Whopper</span></a> </li>
                                        <li> <a href="/grid"><span>Kuro Burger</span></a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid"><span>Sandwiches</span></a>
                                    <ul>
                                        <li> <a href="/grid"><span>Hamburgers</span></a> </li>
                                        <li> <a href="/grid"><span>Hot Dogs</span></a> </li>
                                        <li> <a href="/grid"><span>American Sandwiches</span></a> </li>
                                        <li> <a href="/grid"><span>Chilean Sandwiches</span></a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/grid">Sandwiches‎</a>
                            <ul>
                                <li> <a href="/grid">American</a>
                                    <ul>
                                        <li> <a href="/grid">American sub</a> </li>
                                        <li> <a href="/grid">Beef on weck</a> </li>
                                        <li> <a href="/grid">Bologna Sandwich</a> </li>
                                        <li> <a href="/grid">Cheese Dream</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid" className="">Mexican</a>
                                    <ul>
                                        <li> <a href="/grid">Torta</a> </li>
                                        <li> <a href="/grid">Cemita</a> </li>
                                        <li> <a href="/grid">Toast</a> </li>
                                        <li> <a href="/grid">Chanclas</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Grilled</a>
                                    <ul>
                                        <li> <a href="/grid">Cheese</a> </li>
                                        <li> <a href="/grid">Chocolate</a> </li>
                                        <li> <a href="/grid">Garlic Cheese</a> </li>
                                        <li> <a href="/grid">Veg Cheese</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="/grid">Clubbed</a>
                                    <ul>
                                        <li> <a href="/grid">Triple Decker California</a> </li>
                                        <li> <a href="/grid">Tempeh Reuben</a> </li>
                                        <li> <a href="/grid">Mediterranean Veggie</a> </li>
                                        <li> <a href="/grid">Leftover Turkey</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/grid">Fruits</a> </li>
                        <li><a href="/contactus">Contact Us</a> </li>
                    </ul>
                    <div className="top-links">
                        <ul className="links">
                            <li><a title="My Account" href="/login">My Account</a> </li>
                            <li><a title="Wishlist" href="/wishlist">Wishlist</a> </li>
                            <li><a title="Checkout" href="/checkout">Checkout</a> </li>
                            <li><a title="Blog" href="/blog"><span>Blog</span></a> </li>
                            <li className="last"><a title="Login" href="/login"><span>Login</span></a> </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default mobilemenu
