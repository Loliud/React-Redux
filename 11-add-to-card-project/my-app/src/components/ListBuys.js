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
                        <tr>
                            <td><img src="https://thegioidohoa.com/wp-content/uploads/2017/08/tong-hop-20-mau-bia-sach-doc-dao-nhat-nam-2017-7.jpg"></img></td>
                            <td>Điều bí mật</td>
                            <td>130$</td>
                            <td>2<button>-</button><button>+</button></td>
                            <td>260$<button id="remove">X</button> </td>
                        </tr>
                        <tr>
                            <td><img src="https://i.pinimg.com/originals/bf/eb/48/bfeb4898fd66d22e9741cb9830032a4f.jpg"></img></td>
                            <td>Lấp lánh</td>
                            <td>100$</td>
                            <td>2<button>-</button><button>+</button></td>
                            <td>200$<button id="remove">X</button> </td>
                        </tr>
                        <tr>
                            <td><img src="http://2.bp.blogspot.com/-N1RukmJ4Zv4/Up7mckJSwTI/AAAAAAAABNs/TqXlvWNyUag/s1600/bia_sach_dep_thiet_ke_bia_sach_37.jpg"></img></td>
                            <td>The selection</td>
                            <td>30$</td>
                            <td>5<button>-</button><button>+</button></td>
                            <td>150$<button id="remove">X</button> </td>
                        </tr>
                        <tr className="Sum">
                            <td><img style={{padding: '5rem'}}></img></td>
                            <td></td>
                            <td></td>
                            <td>Tổng tiền</td>
                            <td>1000$</td>
                            <button id="Purchase">COMPLETE PURCHASE</button>
                        </tr>
                       
                    </tbody>
                </table>

            </div>
        );


    }
}

export default ListBuys;