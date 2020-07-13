import React, { Component } from 'react'
import Blogimg1 from '../images/blog-img3.jpg'

class blog1 extends Component {
    render() {
        return (
            <>
                <article className="blog_entry clearfix wow bounceInUp animated" id="post-29">
                    <header className="blog_entry-header clearfix">
                        <div className="blog_entry-header-inner">
                            <h2 className="blog_entry-title"> <a rel="bookmark" href="blog_single_post.html">Aliquam eget
                              sapien placerat</a> </h2>
                        </div>
                        {/* blog_entry-header-inner */}
                    </header>
                    <div className="entry-content">
                        <div className="featured-thumb"><a href="blog_single_post.html"><img alt="blog-img3"
                            src={Blogimg1} /></a></div>
                        <div className="entry-content">
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
                            <p>Quisque nisl lectus, accumsan et euismod eu, sollicitudin ac augue. In sit amet urna magna.
                            Curabitur imperdiet urna nec purus egestas eget aliquet purus iaculis. Nunc porttitor
                            blandit imperdiet. Nulla facilisi. Cras odio ipsum, vehicula nec vehicula sed, convallis
                            scelerisque quam. Phasellus ut odio dui, ut fermentum neque.</p>
                        </div>
                        <p> <a className="btn" href="blog_single_post.html">Read More</a> </p>
                    </div>
                    <footer className="entry-meta"> This entry was posted in <a rel="category tag"
                        title="View all posts in First Category" href="#/first-category">First Category</a> On
                        <time datetime="2014-07-10T06:59:14+00:00" className="entry-date">Jul 10, 2014</time>
                        . </footer>
                </article>
            </>
        )
    }
}

export default blog1