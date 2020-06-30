import React, { Component } from 'react'

class navhome extends Component {
    render() {
        return (
            <>
                <ul style={{display: 'none'}} className="level1">
                    <li className="level1"><a href="index.html"><span>Fashion Store</span></a> </li>
                    <li className="level1"><a href="../digital/index.html"><span>Digital Store</span></a> </li>
                    <li className="level1"><a href="../furniture/index.html"><span>Furniture Store</span></a> </li>
                    <li className="level1"><a href="../jewellery/index.html"><span>Jewellery Store</span></a> </li>
                </ul>
            </>
        )
    }
}

export default navhome
