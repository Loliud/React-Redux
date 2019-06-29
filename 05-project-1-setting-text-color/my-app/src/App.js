import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ColorPicker from './components/ColorPicker';
import SizeChange from './components/SizeChange';
import Reset from './components/Reset';
import Content from './components/Content';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      color: 'danger',
      fontSize: '15px'
    }
    this.setColor = this.setColor.bind(this);
  }


  setColor(params){
    this.setState({
      color: params
    })

  }

  render() {
    return (
      
      <div className="App">
        <Container>
          <Row >
            <Col >
               <ColorPicker onReceiveColor={this.setColor}/>
            </Col> 
            <Col>
              <SizeChange/>
              <Reset/>
            </Col>
            <Col sm="12">
              <Content color={this.state.color}/>
            </Col>
            </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
