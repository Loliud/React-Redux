import React from 'react';
import { Button, ButtonGroup, Toast, ToastHeader, ToastBody } from 'reactstrap';

export default class Content extends React.Component {
  constructor(props){
    super(props);
  
  }

  
  render() {
    return (
        
        <div >
            <Toast style={{maxWidth : '100%', marginTop: '5rem', border: '4px solid tomato' }} >
            <ToastHeader>
              Color : red = Fontsize: 12px
            </ToastHeader>
            <ToastBody>
               Konichiwa 
            </ToastBody>
            </Toast>
        </div>
                
    );
  }
}
