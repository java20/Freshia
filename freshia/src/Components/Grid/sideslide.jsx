import React, { Component } from 'react'

class sideslide extends Component {
    render() {
        return (
            <div>
                <div className="custom-slider">
              <div>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li className="active" data-target="#carousel-example-generic" data-slide-to="0"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1" className=""></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2" className=""></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="item active"><img src={process.env.PUBLIC_URL + '/assets/images/slide3.jpg'} alt="slide3" />
                      <div className="carousel-caption">
                        <h3><a title=" Sample Product" href="#">25% OFF</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a className="link" href="#">Buy Now</a></div>
                    </div>
                    <div className="item"><img src={process.env.PUBLIC_URL + '/assets/images/slide1.jpg'} alt="slide1" />
                      <div className="carousel-caption">
                        <h3><a title=" Sample Product" href="#">Hot Deal</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                    <div className="item"><img src={process.env.PUBLIC_URL + '/assets/images/slide2.jpg'} alt="slide2" />
                      <div className="carousel-caption">
                        <h3><a title=" Sample Product" href="#">Season Sale</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>
                  <a className="left carousel-control" href="#" data-slide="prev"> <span className="sr-only">Previous</span> </a> <a className="right carousel-control" href="#" data-slide="next"> <span className="sr-only">Next</span> </a></div>
              </div>
            </div>
            </div>
        )
    }
}

export default sideslide
