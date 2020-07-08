import React, { Component } from 'react'
import Product1 from '../products-images/product1.jpg'
import Product2 from '../products-images/product2.jpg'
import Product3 from '../products-images/product3.jpg'
import Product4 from '../products-images/product4.jpg'
import Product5 from '../products-images/product5.jpg'
import Product6 from '../products-images/product6.jpg'
import Product7 from '../products-images/product7.jpg'
import Product8 from '../products-images/product8.jpg'
import Product9 from '../products-images/product9.jpg'
import Product10 from '../products-images/product10.jpg'

class products extends Component {
    render() {
        return (
            <>
                <h2 class="page-heading"> <span class="page-heading-title">Vegetables</span> </h2>
            <div class="display-product-option">
              <div class="pager hidden-xs">
                <div class="pages">
                  <ul class="pagination">
                    <li><a href="/list">&laquo;</a></li>
                    <li class="active"><a href="/list">1</a></li>
                    <li><a href="/list">2</a></li>
                    <li><a href="/list">3</a></li>
                    <li><a href="/list">4</a></li>
                    <li><a href="/list">5</a></li>
                    <li><a href="/list">&raquo;</a></li>
                  </ul>
                </div>
              </div>
              <div class="sorter">
                <div class="view-mode"> <a class="button button-grid" title="Grid" href="/grid">&nbsp;</a><span class="button button-active button-list" title="List">&nbsp;</span> </div>
              </div>
            </div>
            <div class="category-products">
              <ol class="products-list" id="products-list">
                <li class="item first">
                  <div class="product-image"> <a href="product_detail.html" title="HTC Rhyme Sense"> <img class="small-image" src={Product1} alt="HTC Rhyme Sense" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="HTC Rhyme Sense">HTC Rhyme Sense</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '50%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">
                      <p>Sed volutpat ac massa eget 
                        lacinia.  
                        Aenean volutpat lacus at dolor blandit </p>
                      <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, 
                        tincidunt mi. Vivamus dictum nec... <a class="link-learn" title="" href="product_detail.html">Learn More</a> </p>
                    </div>
                    <div class="price-box">
                      <p class="old-price"> <span class="price-label"></span> <span class="price"> $442.99 </span> </p>
                      <p class="special-price"> <span class="price-label"></span> <span class="price"> $222.99 </span> </p>
                    </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item even">
                  <div class="product-image"> <a href="product_detail.html" title="Microsoft Natural Keyboard"> <img class="small-image" src={Product2} alt="Microsoft Natural Keyboard" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="Microsoft Natural Keyboard">Microsoft Natural Keyboard</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '10%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">
                      <p>Sed volutpat ac massa eget 
                        lacinia. Suspendisse non purus semper, tellus vel, tristique urna. 
                        Aenean volutpat lacus at dolor blandit. </p>
                      <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, 
                        tincidunt mi. Vivamus dignissimm ... <a class="link-learn" title="" href="product_detail.html">Learn More</a></p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$99.99</span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item odd">
                  <div class="product-image"> <a href="product_detail.html" title="30&quot; Flat-Panel HD Monitor"> <img class="small-image" src={Product3} alt="30&quot; Flat-Panel HD Monitor" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="30&quot; Flat-Panel HD Monitor">30" Flat-Panel HD Monitor</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '0%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">Computer games, digital photo 
                      editing and graphic applications will astound you on this huge 30" 
                      flat-panel monitor.
                      <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, 
                        tincidunt mi. </p>
                      <p>Phasellus consequat id purus in convallis. Nulla quis... <a class="link-learn" title="" href="product_detail.html">Learn More</a></p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$699.99</span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item even">
                  <div class="product-image"> <a href="product_detail.html" title="19&quot; Widescreen LCD Monitor"> <img class="small-image" src={Product4} alt="19&quot; Widescreen LCD Monitor" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="19&quot; Widescreen LCD Monitor">19" Widescreen LCD Monitor</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '80%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">2 ms response time; 10,000:1 contrast ratio; 300 cd/m² brightness; 1440 x 900 maximum resolution; DVI-D and 15-pin D-sub inputs
                      <p>Phasellus consequat id purus 
                        pretium enimnec, tristique... <a class="link-learn" title="" href="product_detail.html">Learn More</a> </p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$399.99</span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item odd">
                  <div class="product-image"> <a href="product_detail.html" title="Seagate 250GB HD "> <img class="small-image" src={Product5} alt="Seagate 250GB HD " /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="Seagate 250GB HD ">Seagate 250GB HD </a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '100%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">1 TB - 7200RPM, SATA 3.0Gb/s, 32MB Cache
                      <p>Maecenas vehicula volutpat elit, in interdum lacus faucibus sit amet. </p>
                      <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, 
                        tincidunt mi. Vivamus dignissim nisl. Donec eget feugiat ante. 
                        Integerarcu libero, dictum nec congue sed, faucibus ... <a class="link-learn" title="" href="product_detail.html">Learn More</a> </p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$99.00</span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item even">
                  <div class="product-image"> <a href="product_detail.html" title="Seagate 500GB HD"> <img class="small-image" src={Product6} alt="Seagate 500GB HD" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="Seagate 500GB HD">Seagate 500GB HD</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '90%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">1 TB - 7200RPM, SATA 3.0Gb/s, 32MB Cache
                      <p>Aenean volutpat lacus at dolor blandit, 
                        vitae lobortisante semper. Ut 
                        bibendum metusfringilla, in interdum lacus faucibus sit amet. </p>
                      <p> Donec eget feugiat ante. 
                        Integerarcu libero... <a class="link-learn" title="" href="product_detail.html">Learn More</a> </p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$299<span class="sub">.00</span></span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item odd">
                  <div class="product-image"> <a href="product_detail.html" title="Intel Core 2 Extreme QX9775"> <img class="small-image" src={Product7} alt="Intel Core 2 Extreme QX9775" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="Intel Core 2 Extreme QX9775">Intel Core 2 Extreme QX9775</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '60%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">Intel Core 2 Extreme QX9775 
                      Processor BX80574QX9775 - 45nm, 3.20GHz, 12MB Cache, 1600MHz FSB,
                      <p>Vivamus dignissim nisl eu euismod ullamcorper. Donec 
                        pellentesque diam id est tristique vestibulum. Donec eget feugiat ante. 
                        Integerarcu libero, dictum nec congue sed, faucibus sit amet lectus. </p>
                      <p>Phasellus consequat... <a class="link-learn" title="" href="product_detail.html">Learn More</a> </p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$2,049.99</span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item even">
                  <div class="product-image"> <a href="product_detail.html" title="24&quot; Widescreen LCD Monitor"> <img class="small-image" src={Product8} alt="24&quot; Widescreen LCD Monitor" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="24&quot; Widescreen LCD Monitor">24" Widescreen LCD Monitor</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '20%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">5 ms response time; 10,000:1 contrast ratio; 400 cd/m² brightness; 1920 x 1200 maximum resolution; DVI-D and 15-pin D-sub inputs
                      <p> tellus vel, tristique urna. </p>
                      <p>Phasellus consequat id purus in convallis. Nulla quis nunc auctor, 
                        pretium enimnec, tristique magna... <a class="link-learn" title="" href="product_detail.html">Learn More</a> </p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$699.99</span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item odd">
                  <div class="product-image"> <a href="product_detail.html" title="Logitech Optical Trackman"> <img class="small-image" src={Product9} alt="Logitech Optical Trackman" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="Logitech Optical Trackman">Logitech Optical Trackman</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '25%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">Our most advanced trackball yet. 
                      
                      Save space and eliminate desktop clutter.
                      <p>Donec eget feugiat ante. 
                        Integerarcu libero, dictum nec congue sed, faucibus sit amet lectus. </p>
                      <p>Vivamus vitae arcu faucibus, dictum 
                        magna vel, adipiscing... <a class="link-learn" title="" href="product_detail.html">Learn More</a> </p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$79.99</span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li class="item last even">
                  <div class="product-image"> <a href="product_detail.html" title="Logitech diNovo Edge Keyboard"> <img class="small-image" src={Product10} alt="Logitech diNovo Edge Keyboard" /> </a> </div>
                  <div class="product-shop">
                    <h2 class="product-name"><a href="product_detail.html" title="Logitech diNovo Edge Keyboard">Logitech diNovo Edge Keyboard</a></h2>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width: '80%'}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="/list">1 Review(s)</a> <span class="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div class="desc std">Li-Ion powered.
                      <p>Sed volutpat ac massa eget lacinia. Suspendisse non purus semper, 
                        vitae lobortisante semper. </p>
                      <p>Integerarcu libero, dictum nec congue sed, faucibus sit... <a class="link-learn" title="" href="product_detail.html">Learn More</a> </p>
                    </div>
                    <div class="price-box"> <span class="regular-price"> <span class="price">$239.99</span> </span> </div>
                    <div class="actions">
                      <button class="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span class="add-to-links"> <a title="Add to Wishlist" class="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" class="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
              </ol>
              <div class="toolbar">
              <div class="row">
                <div class="col-lg-3 col-md-4">
                  <div id="sort-by">
                    <label class="left">Sort By: </label>
                    <ul>
                      <li><a href="/list">Position<span class="right-arrow"></span></a>
                        <ul>
                          <li><a href="/list">Name</a></li>
                          <li><a href="/list">Price</a></li>
                          <li><a href="/list">Position</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-7 col-md-5">
                  <div class="pager">
                    <div class="pages">
                      <label>Page:</label>
                      <ul class="pagination">
                        <li><a href="/list">&laquo;</a></li>
                        <li class="active"><a href="/list">1</a></li>
                        <li><a href="/list">2</a></li>
                        <li><a href="/list">3</a></li>
                        <li><a href="/list">4</a></li>
                        <li><a href="/list">5</a></li>
                        <li><a href="/list">&raquo;</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-3">
                  <div id="limiter">
                    <label>View: </label>
                    <ul>
                      <li><a href="/list">09<span class="right-arrow"></span></a>
                        <ul>
                          <li><a href="/list">15</a></li>
                          <li><a href="/list">20</a></li>
                          <li><a href="/list">30</a></li>
                          <li><a href="/list">35</a></li>
                        </ul>
                      </li>
                    </ul>
                    <a class="button-asc left" href="/list" title="Set Descending Direction"><span class="top_arrow"></span></a> </div>
                </div>
              </div>
            </div>
            </div>
            </>
        )
    }
}

export default products
