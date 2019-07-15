import React, { Component } from 'react';
// import './ListBuys.css';
import ListBuys from '../components/ListBuys';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ListBuysContainer extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <ListBuys sum={this.sum(this.props.listBuys)}>
                {this.showListBuys(this.props.listBuys)}
            </ListBuys>
        );
    }
    // render ra bang san pham
    showListBuys(listBuys) {
        let tableProducts = listBuys.map((item, index) => {
            return (
                <tr key={index}>
                    <td><img src={item.product.link}></img></td>
                    <td>{item.product.name}</td>
                    <td>{item.product.price}</td>
                    <td>{item.quantity}<button>-</button><button>+</button></td>
                    <td>{item.product.price * item.quantity} $<button id="remove">X</button> </td>
                </tr>
            )

        });
        return tableProducts;
    }
    // tinh tong tien
    sum(listBuys) {
        let sum = 0;
        for (var i = 0; i < listBuys.length; i++) {
            sum += listBuys[i].product.price * listBuys[i].quantity;
        }
        return sum;

    }
}

let mapStateToProps = state => {
    return {
        listBuys: state.listBuys
    };
};

ListBuysContainer.propTypes = {
    listBuys: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
                inventory: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

export default connect(mapStateToProps, null)(ListBuysContainer);