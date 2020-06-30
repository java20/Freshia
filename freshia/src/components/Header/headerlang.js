import React, { Component } from 'react'
import EnglishImg from '../../images/english.png'
import FrancaisImg from '../../images/francais.png'
import GermanImg from '../../images/german.png'

export class headerlang extends Component {
    render() {
        return (
                <div className="dropdown block-language-wrapper"> <a role="button" data-toggle="dropdown" dataTarget="#" className="block-language dropdown-toggle" href="#"> <img src={EnglishImg} alt="language"/> English <span className="caret"></span> </a>
                    <ul className="dropdown-menu" role="menu">
                        <li role="presentation"> <a href="#"><img src={EnglishImg} alt="language" /> English </a> </li>
                        <li role="presentation"> <a href="#"><img src={FrancaisImg} alt="language" /> French </a> </li>
                        <li role="presentation"> <a href="#"><img src={GermanImg} alt="language" /> German </a> </li>
                    </ul>       
                </div>
        )
    }
}

export default headerlang
