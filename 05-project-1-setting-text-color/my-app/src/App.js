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
      // font size va color mac dinh
      color: 'danger',
      fontSize: '15px'
    }
    this.setColor = this.setColor.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setReset = this.setReset.bind(this);
  }

  // set color (lay color tu con sang cha)
  setColor(params){
    this.setState({
      color: params
    })

  }
  // set fontSize (lay font size tu con sang cha)
  setFontSize(params){
    this.setState({
      fontSize: params
    })
  }

  setReset(params){
    console.log(params);
    this.setState(
      {
        fontSize: params.fontSize,
        color: params.color
      }
    )
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
              <SizeChange fontSize={this.state.fontSize} onReceiveFontSize = {this.setFontSize}/>
              <Reset onReceiveReset={this.setReset}/>
            </Col>
            <Col sm="12">
              <Content color={this.state.color} fontSize={this.state.fontSize}/>
            </Col>
            </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
