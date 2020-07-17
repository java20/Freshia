import React, { Component } from 'react'

class navpages extends Component {


    render() {
            if(window.location.pathname.includes('home')){
        return (
            <> 
                <ul className="level1"> 
                    <li className="level2 first"><a href="/grid"><span>Grid</span></a> </li>
                    <li className="level2 nav-10-2"> <a href="/list"> <span>List</span> </a> </li>
                    <li className="level2 nav-10-3"> <a href="/productdetails"> <span>Product Detail</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="/shoppingcart"> <span>Shopping Cart</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="/blog"> <span>Blog</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="/blogdetail"> <span>Blog Detail</span> </a> </li>
                    <li className="level2 parent"><a href="/checkout"><span>Checkout</span></a> </li>
                    <li className="level1 nav-10-4"> <a href="/wishlist"> <span>Wishlist</span> </a> </li>
                    <li className="level1"> <a href="/dashboard"> <span>Dashboard</span> </a> </li>
                    <li className="level1"> <a href="/multipleaddresses"> <span>Multiple Addresses</span> </a> </li>
                    <li className="level1"><a href="/compare"><span>Compare</span></a> </li>
                    <li className="level2 nav-10-4"> <a href="/login"> <span>Login</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="/aboutus"> <span>About Us</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="/faq"> <span>Faq</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="/contactus"> <span>Contact Us</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="/sitemap"> <span>Sitemap</span> </a> </li>
                    <li className="level1"><a href="quick_view.html"><span>Quick View</span></a> </li>
                    <li className="level1"><a href="/newsletter"><span>Newsletter</span></a> </li>
                    <li className="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
                </ul>
            </>
            
        )
      }
      else{
          return(
              <>
                <ul className="level1">
                    <li className="level2 first"><a href="/grid"><span>Grid</span></a> </li>
                    <li className="level2 nav-10-2"> <a href="/list"> <span>List</span> </a> </li>
                    <li className="level2 nav-10-3"> <a href="/productdetails"> <span>Product Detail</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="/shoppingcart"> <span>Shopping Cart</span> </a> </li>
                    <li className="level2 parent"><a href="/checkout"><span>Checkout</span></a> </li>
                    <li className="level1 nav-10-4"> <a href="/wishlist"> <span>Wishlist</span> </a> </li>
                    <li className="level1"> <a href="/dashboard"> <span>Dashboard</span> </a> </li>
                    <li className="level1"> <a href="/multipleaddresses"> <span>Multiple Addresses</span> </a> </li>
                    <li className="level1"><a href="/compare"><span>Compare</span></a> </li>
                    <li className="level1"><a href="quick_view.html"><span>Quick View</span></a> </li>
                    <li className="level1"><a href="/newsletter"><span>Newsletter</span></a> </li>
                    <li className="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
                </ul>
            </>
          )
      }
    }
}

export default navpages
