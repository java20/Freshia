import React, { Component } from 'react'

class products extends Component {
    render() {
        return (
            <>
                <h2 className="page-heading"> <span className="page-heading-title">Vegetables</span> </h2>
            <div className="display-product-option">
              <div className="pager hidden-xs">
                <div className="pages">
                  <ul className="pagination">
                    <li><a href="/list">&laquo;</a></li>
                    <li className="active"><a href="/list">1</a></li>
                    <li><a href="/list">2</a></li>
                    <li><a href="/list">3</a></li>
                    <li><a href="/list">4</a></li>
                    <li><a href="/list">5</a></li>
                    <li><a href="/list">&raquo;</a></li>
                  </ul>
                </div>
              </div>
              <div className="sorter">
                <div className="view-mode"> <a className="button button-grid" title="Grid" href="/grid">&nbsp;</a><span className="button button-active button-list" title="List">&nbsp;</span> </div>
              </div>
            </div>
            <div className="category-products">
              <ol className="products-list" id="products-list">
                <li className="item first">
                  <div className="product-image"> <a href="/productdetails" title="HTC Rhyme Sense"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product1.jpg'} alt="HTC Rhyme Sense" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="HTC Rhyme Sense">HTC Rhyme Sense</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '50%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">
                      <p>Sed volutpat ac massa eget 
                        lacinia.  
                        Aenean volutpat lacus at dolor blandit </p>
                      <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, 
                        tincidunt mi. Vivamus dictum nec... <a className="link-learn" title="" href="/productdetails">Learn More</a> </p>
                    </div>
                    <div className="price-box">
                      <p className="old-price"> <span className="price-label"></span> <span className="price"> $442.99 </span> </p>
                      <p className="special-price"> <span className="price-label"></span> <span className="price"> $222.99 </span> </p>
                    </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item even">
                  <div className="product-image"> <a href="/productdetails" title="Microsoft Natural Keyboard"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product2.jpg'} alt="Microsoft Natural Keyboard" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="Microsoft Natural Keyboard">Microsoft Natural Keyboard</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '10%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">
                      <p>Sed volutpat ac massa eget 
                        lacinia. Suspendisse non purus semper, tellus vel, tristique urna. 
                        Aenean volutpat lacus at dolor blandit. </p>
                      <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, 
                        tincidunt mi. Vivamus dignissimm ... <a className="link-learn" title="" href="/productdetails">Learn More</a></p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$99.99</span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item odd">
                  <div className="product-image"> <a href="/productdetails" title="30&quot; Flat-Panel HD Monitor"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product3.jpg'} alt="30&quot; Flat-Panel HD Monitor" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="30&quot; Flat-Panel HD Monitor">30" Flat-Panel HD Monitor</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '0%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">Computer games, digital photo 
                      editing and graphic applications will astound you on this huge 30" 
                      flat-panel monitor.
                      <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, 
                        tincidunt mi. </p>
                      <p>Phasellus consequat id purus in convallis. Nulla quis... <a className="link-learn" title="" href="/productdetails">Learn More</a></p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$699.99</span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item even">
                  <div className="product-image"> <a href="/productdetails" title="19&quot; Widescreen LCD Monitor"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product4.jpg'} alt="19&quot; Widescreen LCD Monitor" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="19&quot; Widescreen LCD Monitor">19" Widescreen LCD Monitor</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '80%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">2 ms response time; 10,000:1 contrast ratio; 300 cd/m² brightness; 1440 x 900 maximum resolution; DVI-D and 15-pin D-sub inputs
                      <p>Phasellus consequat id purus 
                        pretium enimnec, tristique... <a className="link-learn" title="" href="/productdetails">Learn More</a> </p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$399.99</span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item odd">
                  <div className="product-image"> <a href="/productdetails" title="Seagate 250GB HD "> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product5.jpg'} alt="Seagate 250GB HD " /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="Seagate 250GB HD ">Seagate 250GB HD </a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '100%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">1 TB - 7200RPM, SATA 3.0Gb/s, 32MB Cache
                      <p>Maecenas vehicula volutpat elit, in interdum lacus faucibus sit amet. </p>
                      <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, 
                        tincidunt mi. Vivamus dignissim nisl. Donec eget feugiat ante. 
                        Integerarcu libero, dictum nec congue sed, faucibus ... <a className="link-learn" title="" href="/productdetails">Learn More</a> </p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$99.00</span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item even">
                  <div className="product-image"> <a href="/productdetails" title="Seagate 500GB HD"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product6.jpg'} alt="Seagate 500GB HD" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="Seagate 500GB HD">Seagate 500GB HD</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '90%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">1 TB - 7200RPM, SATA 3.0Gb/s, 32MB Cache
                      <p>Aenean volutpat lacus at dolor blandit, 
                        vitae lobortisante semper. Ut 
                        bibendum metusfringilla, in interdum lacus faucibus sit amet. </p>
                      <p> Donec eget feugiat ante. 
                        Integerarcu libero... <a className="link-learn" title="" href="/productdetails">Learn More</a> </p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$299<span className="sub">.00</span></span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item odd">
                  <div className="product-image"> <a href="/productdetails" title="Intel Core 2 Extreme QX9775"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product7.jpg'} alt="Intel Core 2 Extreme QX9775" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="Intel Core 2 Extreme QX9775">Intel Core 2 Extreme QX9775</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '60%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">Intel Core 2 Extreme QX9775 
                      Processor BX80574QX9775 - 45nm, 3.20GHz, 12MB Cache, 1600MHz FSB,
                      <p>Vivamus dignissim nisl eu euismod ullamcorper. Donec 
                        pellentesque diam id est tristique vestibulum. Donec eget feugiat ante. 
                        Integerarcu libero, dictum nec congue sed, faucibus sit amet lectus. </p>
                      <p>Phasellus consequat... <a className="link-learn" title="" href="/productdetails">Learn More</a> </p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$2,049.99</span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item even">
                  <div className="product-image"> <a href="/productdetails" title="24&quot; Widescreen LCD Monitor"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product8.jpg'} alt="24&quot; Widescreen LCD Monitor" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="24&quot; Widescreen LCD Monitor">24" Widescreen LCD Monitor</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '20%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">5 ms response time; 10,000:1 contrast ratio; 400 cd/m² brightness; 1920 x 1200 maximum resolution; DVI-D and 15-pin D-sub inputs
                      <p> tellus vel, tristique urna. </p>
                      <p>Phasellus consequat id purus in convallis. Nulla quis nunc auctor, 
                        pretium enimnec, tristique magna... <a className="link-learn" title="" href="/productdetails">Learn More</a> </p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$699.99</span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item odd">
                  <div className="product-image"> <a href="/productdetails" title="Logitech Optical Trackman"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product9.jpg'} alt="Logitech Optical Trackman" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="Logitech Optical Trackman">Logitech Optical Trackman</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '25%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">Our most advanced trackball yet. 
                      
                      Save space and eliminate desktop clutter.
                      <p>Donec eget feugiat ante. 
                        Integerarcu libero, dictum nec congue sed, faucibus sit amet lectus. </p>
                      <p>Vivamus vitae arcu faucibus, dictum 
                        magna vel, adipiscing... <a className="link-learn" title="" href="/productdetails">Learn More</a> </p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$79.99</span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
                <li className="item last even">
                  <div className="product-image"> <a href="/productdetails" title="Logitech diNovo Edge Keyboard"> <img className="small-image" src={process.env.PUBLIC_URL + '/assets/images/product10.jpg'} alt="Logitech diNovo Edge Keyboard" /> </a> </div>
                  <div className="product-shop">
                    <h2 className="product-name"><a href="/productdetails" title="Logitech diNovo Edge Keyboard">Logitech diNovo Edge Keyboard</a></h2>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{width: '80%'}} className="rating"></div>
                      </div>
                      <p className="rating-links"> <a href="/list">1 Review(s)</a> <span className="separator">|</span> <a href="/listreview-form">Add Your Review</a> </p>
                    </div>
                    <div className="desc std">Li-Ion powered.
                      <p>Sed volutpat ac massa eget lacinia. Suspendisse non purus semper, 
                        vitae lobortisante semper. </p>
                      <p>Integerarcu libero, dictum nec congue sed, faucibus sit... <a className="link-learn" title="" href="/productdetails">Learn More</a> </p>
                    </div>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$239.99</span> </span> </div>
                    <div className="actions">
                      <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                      <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare" href="compare.html"><span>Add to Compare</span></a> </span> </div>
                  </div>
                </li>
              </ol>
              <div className="toolbar">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div id="sort-by">
                    <label className="left">Sort By: </label>
                    <ul>
                      <li><a href="/list">Position<span className="right-arrow"></span></a>
                        <ul>
                          <li><a href="/list">Name</a></li>
                          <li><a href="/list">Price</a></li>
                          <li><a href="/list">Position</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-7 col-md-5">
                  <div className="pager">
                    <div className="pages">
                      <label>Page:</label>
                      <ul className="pagination">
                        <li><a href="/list">&laquo;</a></li>
                        <li className="active"><a href="/list">1</a></li>
                        <li><a href="/list">2</a></li>
                        <li><a href="/list">3</a></li>
                        <li><a href="/list">4</a></li>
                        <li><a href="/list">5</a></li>
                        <li><a href="/list">&raquo;</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-3">
                  <div id="limiter">
                    <label>View: </label>
                    <ul>
                      <li><a href="/list">09<span className="right-arrow"></span></a>
                        <ul>
                          <li><a href="/list">15</a></li>
                          <li><a href="/list">20</a></li>
                          <li><a href="/list">30</a></li>
                          <li><a href="/list">35</a></li>
                        </ul>
                      </li>
                    </ul>
                    <a className="button-asc left" href="/list" title="Set Descending Direction"><span className="top_arrow"></span></a> </div>
                </div>
              </div>
            </div>
            </div>
            </>
        )
    }
}

export default products
