import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ColorPicker from './components/ColorPicker';
import SizeChange from './components/SizeChange';
import Reset from './components/Reset';
import Content from './components/Content';
import './App.css';
class App extends Component {


  render() {
    return (
      
      <div className="App">
        <Container>
          <Row >
            <Col >
               <ColorPicker />
            </Col> 
            <Col>
              <SizeChange/>
              <Reset/>
            </Col>
            <Col sm="12">
              <Content/>
            </Col>
            </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
