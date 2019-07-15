import React, { Component } from 'react';
import './ListBuys.css';


class ListBuys extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="wrap" >
                <table className="listBuys">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng cộng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                        <tr className="Sum">
                            <td><img style={{ padding: '5rem' }}></img></td>
                            <td></td>
                            <td></td>
                            <td>Tổng tiền</td>
                            <td>{this.props.sum} $</td>
                            <button id="Purchase">COMPLETE PURCHASE</button>
                        </tr>

                    </tbody>
                </table>

            </div>
        );


    }
}

export default ListBuys;