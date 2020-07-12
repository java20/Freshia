import React, { Component } from 'react'
import Blogimg3 from '../images/blog-img1.jpg'

class blog3 extends Component {
    render() {
        return (
            <>
                <article class="blog_entry clearfix wow bounceInUp animated" id="post-29">
                    <header class="blog_entry-header clearfix">
                        <div class="blog_entry-header-inner">
                            <h2 class="blog_entry-title"> <a rel="bookmark" href="blog_single_post.html">Pellentesque
                              posuere</a> </h2>
                        </div>
                        {/* blog_entry-header-inner */}
                    </header>
                    <div class="entry-content">
                        <div class="featured-thumb"><a href="blog_single_post.html"><img alt="blog-img1"
                            src={Blogimg3} /></a></div>
                        <div class="entry-content">
                            <p>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi
                            metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum
                            luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan.</p>
                            <p>Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac
                            felis. Donec non erat sed elit bibendum sodales. Donec eu cursus velit. Proin nunc lacus,
                            gravida mollis dictum ut, vulputate eu turpis. Sed felis sapien, commodo in iaculis in,
                            feugiat sed enim. Sed nunc ipsum, fermentum varius dignissim vitae, blandit et ante.Maecenas
                            sagittis, lorem sed congue egestas, lectus purus congue nisl, ac molestie enim ligula nec
                            eros. Sed leo tortor, tincidunt sit amet elementum vel, eleifend at orci. Maecenas ut turpis
                            felis. Donec sit amet quam sem, et aliquet est.</p>
                        </div>
                        <p> <a class="btn" href="blog_single_post.html">Read More</a> </p>
                    </div>
                    <footer class="entry-meta"> This entry was posted in <a rel="category tag"
                        title="View all posts in First Category" href="#/first-category">First Category</a> On
                        <time datetime="2014-07-10T07:09:31+00:00" class="entry-date">Jul 10, 2014</time>
                        . </footer>
                </article>
            </>
        )
    }
}

export default blog3
