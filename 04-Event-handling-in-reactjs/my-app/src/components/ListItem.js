import React from 'react';
import { Table, Button, Col, Badge  } from 'reactstrap';

export default class ListItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone 8 64GB',
                    price: 40000000,
                    image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/11/10/636459060591822074_1.jpg'
                },
                {
                    id: 2,
                    name: 'Samsung galaxy A8 star',
                    price: 20000000,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/166247/samsung-galaxy-a8-star-black-600x600.jpg'
                },
                {
                    id: 3,
                    name: 'Xiaomi mi 8',
                    price: 10000000,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/167539/xiaomi-mi-8-black-600x600.jpg'
                }
            ],
            active : true
        }
        this.onSetState = this.onSetState.bind(this);
    }

    onSetState(){
      this.setState({
        active: !this.state.active
      });
    }
    
    
  render() {
  
    const products = this.state.products;
    const active = this.state.active;
    const elements = products.map((item, index)=>{
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td><Badge color="success">{item.price} VNĐ</Badge></td>
             </tr>
        );
    });

    function showTable(){
      if(active === true){
        return elements;
      }else{
        return '';
      }
    }
    return (
        <Col m="12" md={{ size: 6, offset: 3 }}>
        <Table bordered>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {showTable()}
          </tbody>
        </Table>
        <Button color="warning" onClick={this.onSetState}>Active : {this.state.active ? 'True' : 'False'}</Button>
        </Col>
    );
  
}

}
