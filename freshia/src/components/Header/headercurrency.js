import React, { Component } from 'react'

class headercurrency extends Component {
    render() {
        return (
            <div className="dropdown block-currency-wrapper"> <a role="button" data-toggle="dropdown" data-target="#" className="block-currency dropdown-toggle" href="#"> USD <span class="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                    <li role="presentation"><a href="#"> $ - Dollar </a> </li>
                    <li role="presentation"><a href="#"> £ - Pound </a> </li>
                    <li role="presentation"><a href="#"> € - Euro </a> </li>
                </ul>
            </div>
        )
    }
}

export default headercurrency
