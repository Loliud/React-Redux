import React, { Component } from 'react';
// import './ListBuys.css';
import ListBuys from '../components/ListBuys';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import *as actions from '../actions/index';


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
        if (listBuys.length > 0) {
            let tableProducts = listBuys.map((item, index) => {
                return (
                    <tr key={index}>
                        <td><img src={item.product.link}></img></td>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}<button>-</button><button>+</button></td>
                        <td>{item.product.price * item.quantity} $<button id="remove" onClick={() => this.props.onDeleteProduct(item)}>X</button> </td>
                    </tr>
                )

            });
            return tableProducts;
        } else {
            return (
                <Alert color="warning" style={{fontSize: '25px'}}>
                    Hiện không có sản phẩm nào trong giỏ hàng!
              </Alert>
            )
        }

    }
    // tinh tong tien
    sum(listBuys) {
        if (listBuys.length > 0) {
            let sum = 0;
            for (var i = 0; i < listBuys.length; i++) {
                sum += listBuys[i].product.price * listBuys[i].quantity;
            }
            return sum;
        }

    }
}

let mapStateToProps = state => {
    return {
        listBuys: state.listBuys
    };
};

let mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteProduct: (card) =>{
            dispatch(actions.onDeleteProduct(card));
        }
    }
}



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

export default connect(mapStateToProps, mapDispatchToProps)(ListBuysContainer);