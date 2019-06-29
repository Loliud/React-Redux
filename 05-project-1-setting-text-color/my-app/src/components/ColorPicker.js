import React from 'react';
import { Button, ButtonGroup, Toast, ToastHeader, ToastBody } from 'reactstrap';

export default class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      color: ['danger', 'warning', 'info', 'success']
    }

  }

  onSelectColor(color){
    this.props.onReceiveColor(color);
  }

  render() {
          const elements = this.state.color.map((color, index)=>{
            return <Button color={color} 
                      onClick={() => this.onSelectColor(color)}
                      key={index}>
                      {color}</Button>;
          });

          
    return (
  
        <div className="p-3 bg-info my-2 rounded ">
            <Toast>
            <ToastHeader>
                Color Picker
            </ToastHeader>
            <ToastBody>
            <ButtonGroup>
                  {elements}
              </ButtonGroup>
            </ToastBody>
            </Toast>
        </div>
                
    );
  }
}
