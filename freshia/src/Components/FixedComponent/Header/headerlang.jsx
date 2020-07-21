import React, { Component } from 'react'

class headerlang extends Component {
    render() {
        return (
                <div className="dropdown block-language-wrapper"> <a role="button" data-toggle="dropdown" className="block-language dropdown-toggle" href="#/"> <img src={process.env.PUBLIC_URL + '/assets/images/english.png'} alt="language"/> English <span className="caret"></span> </a>
                    <ul className="dropdown-menu" role="menu">
                        <li role="presentation"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/english.png'} alt="language" /> English </a> </li>
                        <li role="presentation"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/francais.png'} alt="language" /> French </a> </li>
                        <li role="presentation"> <a href="#/"><img src={process.env.PUBLIC_URL + '/assets/images/german.png'} alt="language" /> German </a> </li>
                    </ul>       
                </div>
        )
    }
}

export default headerlang
