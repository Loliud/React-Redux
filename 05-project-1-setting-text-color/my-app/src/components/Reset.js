import React from 'react';
import { Button } from 'reactstrap';

export default class Reset extends React.Component {
  constructor(props){
    super(props);
    this.setReset = this.setReset.bind(this);
  
  }
  // reset color va font size
  setReset(color, fontSize){
    this.props.onReceiveReset({
      color: color,
      fontSize: fontSize
    });
  }
  
  render() {
     
     const color = 'danger';
     const fontSize = '15px';
    return (
        
         <div>
                     {/*Dung arrow function ham tra ve  */}
            <Button color="primary" style={{width : '100px'}} onClick={()=>this.setReset(color, fontSize)}>Reset</Button>        
        </div>
                
    );
  }
}
