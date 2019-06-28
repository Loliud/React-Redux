import React from 'react';
import { Button, ButtonGroup, Toast, ToastHeader, ToastBody } from 'reactstrap';

export default class ColorPicker extends React.Component {
  render() {
    return (
        
        <div className="p-3 bg-info my-2 rounded">
            <Toast>
            <ToastHeader>
                Color Picker
            </ToastHeader>
            <ToastBody>
            <ButtonGroup>
                <Button color="danger">Red</Button>
                <Button color="warning">Yellow</Button>
                <Button color="info">Aqua</Button>
                <Button color="success">Green</Button>
                </ButtonGroup>
            </ToastBody>
            </Toast>
        </div>
                
    );
  }
}
