import React from 'react';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';

export default class Content extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  
  
  render() {
            // nhan font size va color tu cha thong qua props
            const fontSize = this.props.fontSize;
            const color = this.props.color;
    return (
        
        <div >
            <Toast style={{maxWidth : '100%', marginTop: '5rem', border: '4px solid tomato' }} >
            <ToastHeader  >
              Color : {color} = Fontsize: {fontSize}
            </ToastHeader>
            <ToastBody className={'text-'+ color} style={{fontSize: fontSize}}>
               Konichiwa 
            </ToastBody>
            </Toast>
        </div>
                
    );
  }
}
