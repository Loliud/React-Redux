import React from 'react';
import { Button, ButtonGroup, Toast, ToastHeader, ToastBody } from 'reactstrap';

export default class SizeChange extends React.Component {
  constructor(props){
    super(props);
  
  }

  
  render() {
    return (
        
        <div className="p-3 bg-info my-2 rounded">
            <Toast>
            <ToastHeader>
               Size: 12px
            </ToastHeader>
            <ToastBody>
            <ButtonGroup>
                <Button color="success" style={{width : '100px'}}>Up  </Button>
                <Button color="warning" style={{width : '100px'}}>Down</Button>
                </ButtonGroup>
            </ToastBody>
            </Toast>
        </div>
                
    );
  }
}
