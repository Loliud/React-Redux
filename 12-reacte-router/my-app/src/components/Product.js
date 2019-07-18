import React, { Component } from 'react';


class Product extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let {match} = this.props;
        return (
            <div>
                <h1>Day la san pham co id :  {match.params.name}</h1>
            </div>
        )
    }
}


export default Product;