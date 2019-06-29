import React from 'react';
import { Button, ButtonGroup, Toast, ToastHeader, ToastBody } from 'reactstrap';

export default class Reset extends React.Component {
  constructor(props){
    super(props);
  
  }

  
  render() {
    return (
        
       <div>         
            <Button color="primary" style={{width : '100px'}}>Reset</Button>        
        </div>
                
    );
  }
}
