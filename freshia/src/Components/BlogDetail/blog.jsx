import React, { Component } from 'react'

class blog extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             comment: ''
        }
    }
    
    handleName = (name) => {
        this.setState({
            name: name.target.value
        });
    }

    handleEmail = (email) => {
        this.setState({
            email: email.target.value
        });
    }

    handleComment = (comment) => {
        this.setState({
            comment: comment.target.value
        });
    }

    render() {
        return (
            <>
                <div className="col-sm-9">
                    <div className="col-main">

                        <div className="blog-wrapper" id="main">
                            <div className="site-content" id="primary">
                                <div role="main" id="content">
                                    <article className="blog_entry clearfix" id="post-29">
                                        <header className="blog_entry-header clearfix">
                                            <div className="blog_entry-header-inner">
                                                <h2 className="blog_entry-title"> Pellentesque habitant morbi </h2>
                                            </div>
                                            {/* blog_entry-header-inner  */}
                                        </header>
                                        {/* blog_entry-header clearfix */}
                                        <div className="entry-content">
                                            <div className="featured-thumb"><a href="#"><img alt="blog-img4" src={process.env.PUBLIC_URL + '/assets/images/blog-img1.jpg'} /></a></div>
                                            <div className="entry-content">
                                                <p>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan.</p>
                                                <p>Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac felis. Donec non erat sed elit bibendum sodales. Donec eu cursus velit. Proin nunc lacus, gravida mollis dictum ut, vulputate eu turpis. Sed felis sapien, commodo in iaculis in, feugiat sed enim. Sed nunc ipsum, fermentum varius dignissim vitae, blandit et ante.Maecenas sagittis, lorem sed congue egestas, lectus purus congue nisl, ac molestie enim ligula nec eros. Sed leo tortor, tincidunt sit amet elementum vel, eleifend at orci. Maecenas ut turpis felis. Donec sit amet quam sem, et aliquet est.</p>
                                                <p>Quisque nisl lectus, accumsan et euismod eu, sollicitudin ac augue. In sit amet urna magna. Curabitur imperdiet urna nec purus egestas eget aliquet purus iaculis. Nunc porttitor blandit imperdiet. Nulla facilisi. Cras odio ipsum, vehicula nec vehicula sed, convallis scelerisque quam. Phasellus ut odio dui, ut fermentum neque.</p>
                                                <blockquote>Lorem ipsum dolor sit amet, consecte adipiscing elit. Integer aliquam mi nec dolor placerat a condimentum diam mollis. Ut pulvinar neque eget massa dapibus dolor.</blockquote>
                                                <p>Curabitur at vestibulum sem. Aliquam vehicula neque ac nibh suscipit ultrices. Morbi interdum accumsan arcu nec scelerisque. Phasellus eget purus nulla. Suspendisse quam est, tempor quis consectetur non, interdum vitae diam. Pellentesque volutpat mollis ligula in laoreet. Aenean est dui, sagittis in consequat at, adipiscing at risus. Sed suscipit, est vitae aliquam molestie, sem dolor dignissim leo, eget imperdiet enim urna in justo. Mauris pulvinar tortor lorem. Aliquam sed nisl in ipsum tincidunt ultrices.</p>
                                                <p>Nullam commodo lobortis nibh, vitae accumsan velit dapibus sed. Nunc ac sem eu libero pretium faucib. Quisque et semper odio. Praesent tortor ligula, imperdiet sed aliquet ut, pharetra at nisi. Etiam sit amet molestie est. Donec id turpis vitae leo viverra adipiscing at sed nisi. Donec ut justo nunc. Vivamu bibendum erat ac nunc sollicitudin lacinia. Phasellus sed lacus magna.</p>
                                            </div>
                                        </div>
                                        <footer className="entry-meta"> This entry was posted in <a rel="category tag" title="View all posts in First Category" href="#first-category">First Category</a> On
                      <time datetime="2014-07-10T06:53:43+00:00" className="entry-date">March 19, 2018</time>
                      . </footer>
                                    </article>
                                    <div className="comment-content wow bounceInUp animated">
                                        <div className="comments-wrapper">
                                            <h3> Comments </h3>
                                            <ul className="commentlist">
                                                <li className="comment">
                                                    <div className="comment-wrapper" id="post-29">
                                                        <div className="comment-author vcard">
                                                            <p className="gravatar"><a href="#"><img width="60" height="60" alt="avatar" src={process.env.PUBLIC_URL + '/assets/images/member1.jpg'} /></a></p>
                                                            <span className="author">John Doe</span> </div>
                                                        {/* comment-author vcard */}
                                                        <div className="comment-meta">
                                                            <time datetime="2014-07-10T07:26:28+00:00" className="entry-date">Thu, Feb 24, 2018 07:26:28 am</time>
                              . </div>
                                                        {/* comment-meta */}
                                                        <div className="comment-body"> Curabitur at vestibulum sem. Aliquam vehicula neque ac nibh suscipit ultrices. Morbi interdum accumsan arcu nec scelerisque ellentesque id erat sem, ut commodo nulla. Sed a nulla et eros fringilla. Phasellus eget purus nulla. </div>
                                                    </div>
                                                </li>
                                                {/* comment */}
                                                <li className="comment">
                                                    <div className="comment-wrapper" id="post-29">
                                                        <div className="comment-author vcard">
                                                            <p className="gravatar"><a href="#"><img width="60" height="60" alt="avatar" src={process.env.PUBLIC_URL + '/assets/images/member3.png'} /></a></p>
                                                            <span className="author">John Doe</span> </div>
                                                        {/* comment-author vcard */}
                                                        <div className="comment-meta">
                                                            <time datetime="2014-07-10T07:27:08+00:00" className="entry-date">Thu, Jul 10, 2017 07:27:08 am</time>
                              . </div>
                                                        {/* comment-meta */}
                                                        <div className="comment-body"> Curabitur at vestibulum sem. Aliquam vehicula neque ac nibh suscipit ultrices. Morbi interdum accumsan arcu nec scelerisque ellentesque id erat sem, ut commodo nulla. Sed a nulla et eros fringilla. Phasellus eget purus nulla. </div>
                                                    </div>
                                                </li>
                                                {/* comment */}
                                                <li className="comment">
                                                    <div className="comment-wrapper" id="post-29">
                                                        <div className="comment-author vcard">
                                                            <p className="gravatar"><a href="#"><img width="60" height="60" alt="avatar" src={process.env.PUBLIC_URL + '/assets/images/member2.png'} /></a></p>
                                                            <span className="author">John Doe</span> </div>
                                                        {/* comment-author vcard */}
                                                        <div className="comment-meta">
                                                            <time datetime="2014-07-10T07:27:56+00:00" className="entry-date">Thu, Jul 10, 2017 07:27:56 am</time>
                              . </div>
                                                        {/* comment-meta */}
                                                        <div className="comment-body"> Curabitur at vestibulum sem. Aliquam vehicula neque ac nibh suscipit ultrices. Morbi interdum accumsan arcu nec scelerisque ellentesque id erat sem, ut commodo nulla. Sed a nulla et eros fringilla. Phasellus eget purus nulla. </div>
                                                    </div>
                                                </li>
                                                {/* comment */}
                                                <li className="comment">
                                                    <div className="comment-wrapper" id="post-29">
                                                        <div className="comment-author vcard">
                                                            <p className="gravatar"><a href="#"><img width="60" height="60" alt="avatar" src={process.env.PUBLIC_URL + '/assets/images/member1.jpg'} /></a></p>
                                                            <span className="author">Lisa White</span> </div>
                                                        {/* comment-author vcard */}
                                                        <div className="comment-meta">
                                                            <time datetime="2014-07-10T07:28:32+00:00" className="entry-date">Thu, Jul 10, 2016 07:28:32 am</time>
                              . </div>
                                                        {/* comment-meta */}
                                                        <div className="comment-body"> Curabitur at vestibulum sem. Aliquam vehicula neque ac nibh suscipit ultrices. Morbi interdum accumsan arcu nec scelerisque ellentesque id erat sem, ut commodo nulla. Sed a nulla et eros fringilla. </div>
                                                    </div>
                                                </li>
                                                {/* comment */}
                                            </ul>
                                            {/* commentlist  */}
                                        </div>
                                        {/* comments-wrapper */}

                                        <div className="comments-form-wrapper clearfix">
                                            <h3>Leave A reply</h3>
                                            <form className="comment-form" method="post" id="postComment" action="">
                                                <div className="field">
                                                    <label for="name">Name<em className="required">*</em></label>
                                                    <input type="text" className="input-text" title="Name" value={this.state.name} id="user" name="user_name" onChange={this.handleName} />
                                                </div>
                                                <div className="field">
                                                    <label for="email">Email<em className="required">*</em></label>
                                                    <input type="text" className="input-text validate-email" value={this.state.email} title="Email" id="email" name="user_email" onChange={this.handleEmail} />
                                                </div>
                                                <div className="clear"></div>
                                                <div className="field aw-blog-comment-area">
                                                    <label for="comment">Comment<em className="required">*</em></label>
                                                    <textarea rows="5" cols="50" className="input-text" value={this.setState.comment} title="Comment" id="comment" name="comment" onChange={this.handleComment}></textarea>
                                                </div>
                                                <div style={{ width: '96%' }} className="button-set">
                                                    <input type="hidden" value="1" name="blog_id" />
                                                    <button type="submit" className="bnt-comment"><span><span>Add Comment</span></span></button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* comments-form-wrapper clearfix  */}

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

export default blog
