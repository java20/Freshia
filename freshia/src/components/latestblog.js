import React, { Component } from 'react'
import BlogImg1 from '../images/blog-img1.jpg'
import BlogImg2 from '../images/blog-img2.jpg'

class latestblog extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="blog-outer-container">
                                <div class="new_title">
                                    <h2>Latest Blog</h2>
                                </div>
                                <div class="blog-inner">
                                    <div class="col-lg-6 col-md-6 col-sm-6 blog-preview_item">
                                        <div class="entry-thumb image-hover2"> <a href="blog_single_post.html"> <img alt="Blog"
                                            src={BlogImg1} /> </a> </div>
                                        <div class="blog-preview_info">
                                            <ul class="post-meta">
                                                <li><i class="fa fa-user"></i>posted by <a href="#">admin</a> </li>
                                                <li><i class="fa fa-comments"></i><a href="#">8 comments</a> </li>
                                                <li><i class="fa fa-calendar"></i>2018-02-24 12:25:18</li>
                                            </ul>
                                            <h4 class="blog-preview_title"><a href="blog_single_post.html">Standard blog post with photo</a></h4>
                                            <div class="blog-preview_desc">Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum
                    facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips.</div>
                                            <a class="blog-preview_btn" href="blog_single_post.html">READ MORE</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 blog-preview_item">
                                        <div class="entry-thumb image-hover2"> <a href="blog_single_post.html"> <img alt="Blog"
                                            src={BlogImg2} /> </a> </div>
                                        <div class="blog-preview_info">
                                            <ul class="post-meta">
                                                <li><i class="fa fa-user"></i>posted by <a href="#">admin</a> </li>
                                                <li><i class="fa fa-comments"></i><a href="#">4 comments</a> </li>
                                                <li><i class="fa fa-calendar"></i>2018-01-07 09:05:49</li>
                                            </ul>
                                            <h4 class="blog-preview_title"><a href="blog_single_post.html">Standard blog post with photo</a></h4>
                                            <div class="blog-preview_desc">Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.</div>
                                            <a class="blog-preview_btn" href="blog_single_post.html">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default latestblog
