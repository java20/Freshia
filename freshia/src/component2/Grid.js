import React, { Component } from 'react';


class Grid extends Component {
    render() {
        return (
            <div>
                {/* Bread Crums */}
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <ul>
                                    <li className="home"> <a href="index.html" title="Go to Home Page">Home</a> <span>/</span> </li>
                                    <li className="category1599"> <a href="grid.html" title="">Salad</a> <span>/ </span> </li>
                                    <li className="category1600"> <a href="grid.html" title="">Fruits Salad</a> <span>/</span> </li>
                                    <li className="category1601"> <strong>Green Salad</strong> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bread Crums */}


            </div>
        )
    }
}

export default Grid
