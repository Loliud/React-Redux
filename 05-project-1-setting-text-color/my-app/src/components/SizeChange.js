import React from 'react';
import { Button, ButtonGroup, Toast, ToastHeader, ToastBody } from 'reactstrap';

export default class SizeChange extends React.Component {
  constructor(props){
    super(props);
    this.upFontSize = this.upFontSize.bind(this);
    this.downFontSize = this.downFontSize.bind(this);
  }
  // tang font size
  upFontSize(fontSize){
     if(fontSize > 100){
            return;
        }
      fontSize = fontSize + 15 + 'px';
      return this.props.onReceiveFontSize(fontSize);
  }
  // giam font size
  downFontSize(fontSize){
      if(fontSize === 15){
          return;
      }
        fontSize = fontSize - 15 + 'px';
        return this.props.onReceiveFontSize(fontSize);
    }

  render() {
      // chuyen doi font size tu string sang number
      let fontSize = this.props.fontSize;
      fontSize = fontSize.slice(0, fontSize.length - 2);
      fontSize = parseInt(fontSize);
          
    return (
        
        <div className="p-3 bg-dark my-2 rounded">
            <Toast>
            <ToastHeader>
               Size: {fontSize}px
            </ToastHeader>
            <ToastBody>
            <ButtonGroup>
                <Button color="success" onClick={() =>this.upFontSize(fontSize)}>Up</Button>
                <Button color="warning" onClick={() =>this.downFontSize(fontSize)}>Down</Button>
                </ButtonGroup>
            </ToastBody>
            </Toast>
        </div>
                
    );
  }
}
