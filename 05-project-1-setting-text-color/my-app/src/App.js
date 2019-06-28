import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ColorPicker from './components/ColorPicker';
class App extends Component {


  render() {
    return (
      <div>
        <Container mt="50" >
          <Row >
            <Col xs="6" sm="6" md="6" lg="6">
               <ColorPicker/>
            </Col> 
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
