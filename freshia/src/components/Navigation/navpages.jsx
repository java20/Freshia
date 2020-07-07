import React, { Component } from 'react'

class navpages extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             URL: window.location.href
        }
    }
    

    render() {
            if(this.state.URL==='http://localhost:3000/')
            {
        return (
            <> 
                <ul className="level1"> 
                    <li className="level2 first"><a href="/grid"><span>Grid</span></a> </li>
                    <li className="level2 nav-10-2"> <a href="list.html"> <span>List</span> </a> </li>
                    <li className="level2 nav-10-3"> <a href="product_detail.html"> <span>Product Detail</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="blog.html"> <span>Blog</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="blog_single_post.html"> <span>Blog Detail</span> </a> </li>
                    <li className="level2 parent"><a href="checkout.html"><span>Checkout</span></a> </li>
                    <li className="level1 nav-10-4"> <a href="wishlist.html"> <span>Wishlist</span> </a> </li>
                    <li className="level1"> <a href="dashboard.html"> <span>Dashboard</span> </a> </li>
                    <li className="level1"> <a href="multiple_addresses.html"> <span>Multiple Addresses</span> </a> </li>
                    <li className="level1"><a href="compare.html"><span>Compare</span></a> </li>
                    <li className="level2 nav-10-4"> <a href="login.html"> <span>Login</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="about_us.html"> <span>About Us</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="faq.html"> <span>Faq</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="contact_us.html"> <span>Contact Us</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="sitemap.html"> <span>Sitemap</span> </a> </li>
                    <li className="level1"><a href="quick_view.html"><span>Quick View</span></a> </li>
                    <li className="level1"><a href="newsletter.html"><span>Newsletter</span></a> </li>
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
                    <li className="level2 nav-10-2"> <a href="list.html"> <span>List</span> </a> </li>
                    <li className="level2 nav-10-3"> <a href="product_detail.html"> <span>Product Detail</span> </a> </li>
                    <li className="level2 nav-10-4"> <a href="shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
                    <li className="level2 parent"><a href="checkout.html"><span>Checkout</span></a> </li>
                    <li className="level1 nav-10-4"> <a href="wishlist.html"> <span>Wishlist</span> </a> </li>
                    <li className="level1"> <a href="dashboard.html"> <span>Dashboard</span> </a> </li>
                    <li className="level1"> <a href="multiple_addresses.html"> <span>Multiple Addresses</span> </a> </li>
                    <li className="level1"><a href="compare.html"><span>Compare</span></a> </li>
                    <li className="level1"><a href="quick_view.html"><span>Quick View</span></a> </li>
                    <li className="level1"><a href="newsletter.html"><span>Newsletter</span></a> </li>
                    <li className="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
                </ul>
            </>
          )
      }
    }
}

export default navpages
