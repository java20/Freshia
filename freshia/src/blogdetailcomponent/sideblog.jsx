import React, { Component } from 'react'
import BlogImg1 from '../images/blog-img1.jpg'
import BlogImg2 from '../images/blog-img2.jpg'
import BlogImg3 from '../images/blog-img3.jpg'
import BlogImg4 from '../images/blog-img4.jpg'
import Banner from '../images/hot-trends-banner.jpg'

class sideblog extends Component {
    render() {
        return (
            <>
              <div className="col-right sidebar col-sm-3 bounceInUp animated">
          <div role="complementary" className="widget_wrapper13" id="secondary">
            <div className="popular-posts widget widget__sidebar wow bounceInUp animated" id="recent-posts-4">
              <h3 className="widget-title"><span>Most Popular Post</span></h3>
              <div className="widget-content">
                <ul className="posts-list unstyled clearfix">
                  <li> <figure className="featured-thumb"> <a href="blog_single_post.html"> <img width="80" height="53" alt="blog image" src={BlogImg1} /> </a> </figure>
                    {/* featured-thumb */}
                    <h4><a title="Pellentesque posuere" href="#/pellentesque-posuere">Pellentesque posuere</a></h4>
                    <p className="post-meta"><i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                      <time datetime="2014-07-10T07:09:31+00:00" className="entry-date">Feb 10, 2018</time>
                      .</p>
                  </li>
                  <li>
                     <figure className="featured-thumb"> <a href="blog_single_post.html"> <img width="80" height="53" alt="blog image" src={BlogImg2} /> </a> </figure>
                    {/* featured-thumb */}
                    <h4><a title="Dolor lorem ipsum" href="#/dolor-lorem-ipsum">Dolor lorem ipsum</a></h4>
                    <p className="post-meta"><i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                      <time datetime="2014-07-10T07:01:18+00:00" className="entry-date">Dec 10, 2017</time>
                      .</p>
                  </li>
                  <li>
                     <figure className="featured-thumb"> <a href="blog_single_post.html"> <img width="80" height="53" alt="blog image" src={BlogImg3} /> </a> </figure>
                    {/* featured-thumb */}
                    <h4><a title="Aliquam eget sapien placerat" href="#/aliquam-eget-sapien-placerat">Aliquam eget sapien placerat</a></h4>
                    <p className="post-meta"><i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                      <time datetime="2014-07-10T06:59:14+00:00" className="entry-date">Jul 10, 2017</time>
                      .</p>
                  </li>
                  <li>
                     <figure className="featured-thumb"> <a href="blog_single_post.html"> <img width="80" height="53" alt="blog image" src={BlogImg4} /> </a> </figure>
                    {/* featured-thumb */}
                    <h4><a title="Pellentesque habitant morbi" href="#/pellentesque-habitant-morbi">Pellentesque habitant morbi</a></h4>
                    <p className="post-meta"><i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                      <time datetime="2014-07-10T06:53:43+00:00" className="entry-date">Jul 10, 2017</time>
                      .</p>
                  </li>
                </ul>
              </div>
              {/* widget-content  */}
            </div>
            <div className="popular-posts widget widget_categories" style={{paddingBottom: '15px'}}>
              <h3 className="widget-title"><span>Categories</span></h3>
              <ul>
                <li className="cat-item cat-item-19599"><a href="#/first-category">Category 1</a></li>
                   </ul>
                   <ul>
                  <li className="cat-item cat-item-19599"><a href="#/first-category">Category 2</a></li>
                        </ul>
                        <ul>
                  <li className="cat-item cat-item-19599"><a href="#/first-category">Category 3</a></li>
                        </ul>
                        <ul>
                  <li className="cat-item cat-item-19599"><a href="#/first-category">Category 4</a></li>
                        </ul>
                        <ul>
                  <li className="cat-item cat-item-19599"><a href="#/first-category">Category 5</a></li>
                        </ul>
       
            </div>
             {/* Banner Ad Block  */}
            <div className="hot-banner"><img alt="banner" src={Banner} /></div>
             {/* Banner Text Block  */}
            <div className="text-widget widget widget__sidebar">
              <h3 className="widget-title"><span>Text Widget</span></h3>
              <div className="widget-content">Mauris at blandit erat. Nam vel tortor non quam scelerisque cursus. Praesent nunc vitae magna pellentesque auctor. Quisque id lectus.<br />
                <br />
                Massa, eget eleifend tellus. Proin nec ante leo ssim nunc sit amet velit malesuada pharetra. Nulla neque sapien, sollicitudin non ornare quis, malesuada.</div>
            </div>
          </div>
        </div>  
            </>
        )
    }
}

export default sideblog
