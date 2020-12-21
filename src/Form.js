import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField/TextField";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }


  render() { 
    
    return ( 
      <div>
      <form  noValidate autoComplete="off" >
        <TextField onChange={this.props.changeCity} style={{height:700}} id="outlined-basic" label="Enter City name" variant="outlined" style={{backgroundColor: '#e3e3e3'}} />
      </form>
      </div>
     );
  }
}
 
export default Form;