import React, { Component } from 'react'

class navhome extends Component {
    render() {
        return (
            <>
                <ul style={{display: 'none'}} className="level1">
                    <li className="level1"><a href="/home"><span>Fashion Store</span></a> </li>
                    <li className="level1"><a href="/home"><span>Digital Store</span></a> </li>
                    <li className="level1"><a href="/home"><span>Furniture Store</span></a> </li>
                    <li className="level1"><a href="/home"><span>Jewellery Store</span></a> </li>
                </ul>
            </>
        )
    }
}

export default navhome
