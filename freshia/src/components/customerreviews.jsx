import React, { Component } from 'react'
import Ad1 from '../images/ads-02.jpg'
import Ad2 from '../images/ads-03.jpg'
import Ad3 from '../images/ads-05.jpg'

class customerreviews extends Component {
    render() {
        return (
            <>
                <div class="bottom-banner-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-12">
                                <div class="testi-slider">
                                    <div>
                                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

                                            <div class="carousel-inner">
                                                <div class="item active">
                                                    <div class="avatar"><img src={process.env.PUBLIC_URL + '/images/member1.jpg'} alt="slide3" /></div>
                                                    <div>
                                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                          tristique auctor. Donec non est at libero vulputate rutrum."</p>
                                                        <div class="clients_author"><a href="#" target="_blank">
                                                            Karla Anderson <span>Happy Customer</span> </a></div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="avatar"><img src={process.env.PUBLIC_URL + '/assets/images/product10.jpg'} alt="slide3" /></div>
                                                    <div>
                                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                          tristique auctor. Donec non est at libero vulputate rutrum."</p>
                                                        <div class="clients_author"><a href="#" target="_blank">
                                                            John Smith <span>Happy Customer</span> </a></div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="avatar"><img src={process.env.PUBLIC_URL + '/assets/images/product10.jpg'} alt="slide3" /></div>
                                                    <div>
                                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                          tristique auctor. Donec non est at libero vulputate rutrum."</p>
                                                        <div class="clients_author"><a href="#" target="_blank">
                                                            Stephen Doe <span>Happy Customer</span> </a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ol class="carousel-indicators">
                                                <li class="active" data-target="#carousel-example-generic" data-slide-to="0"></li>
                                                <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
                                                <li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>
                                            </ol>
                                            <a class="left carousel-control" href="#" data-slide="prev"> <span class="sr-only">Previous</span>
                                            </a> <a class="right carousel-control" href="#" data-slide="next"> <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12">
                                <div class="row">

                                    <div class="col-md-6 col-sm-6">
                                        <div class="bottom-banner-img1"> <a href="#"> <img src={Ad1} alt="bottom banner" />

                                        </a></div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="bottom-banner-img1"> <a href="#"> <img src={Ad2} alt="bottom banner" /><span
                                            class="banner-overly"></span>

                                        </a></div>
                                    </div>

                                    <div class="col-md-12 col-sm-12">
                                        <div class="bottom-banner-img1 last"> <a href="#"><img src={Ad3} alt="bottom banner" />
                                            <span class="banner-overly"></span>
                                            <div class="bottom-img-info last">
                                                <h3>up to <span>25%</span> off</h3>
                                                <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h6>
                                            </div>
                                        </a></div>
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

export default customerreviews
