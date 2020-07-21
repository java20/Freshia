import React, { Component } from 'react'

class blog2 extends Component {
    render() {
        return (
            <>
                <article className="blog_entry clearfix wow bounceInUp animated" id="post-29">
                    <header className="blog_entry-header clearfix">
                        <div className="blog_entry-header-inner">
                            <h2 className="blog_entry-title"> <a rel="bookmark" href="/blogdetail">Dolor lorem
                              ipsum</a> </h2>
                        </div>
                        {/* blog_entry-header-inner */}
                    </header>
                    <div className="entry-content">
                        <div className="featured-thumb"><a href="/blogdetail"><img alt="blog-img2"
                            src={process.env.PUBLIC_URL + '/assets/images/blog-img2.jpg'} /></a></div>
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
                        </div>
                        <p> <a className="btn" href="/blogdetail">Read More</a> </p>
                    </div>
                    <footer className="entry-meta"> This entry was posted in <a rel="category tag"
                        title="View all posts in First Category" href="#/first-category">First Category</a> On
                        <time datetime="2014-07-10T07:01:18+00:00" className="entry-date">Jul 10, 2014</time>
                        . </footer>
                </article>
            </>
        )
    }
}

export default blog2
