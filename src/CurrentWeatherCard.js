import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class CurrentWeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let weather = this.props.data;
    return ( 
      <div>
        <Card style={{width:"700px", padding: 30, opacity:0.75 , color:"darkblue"}}>
        <div style={{color:"darkblue",fontSize:16}}>
                       {new Date().toDateString()}
                   </div>
                   <div style={{fontSize:20,fontWeight:900,paddingTop:8,paddingBottom:8, width:400}}>
                    {weather.name},{weather.sys.country}
                   </div>
                   <div style={{color:"orange", paddingBottom:5}}>
                       SunRise : {new Date(weather.sys.sunrise).toLocaleString()}
                   </div>
                   <div style={{color:"orange", paddingBottom: 5}}>
                       SunSet : {new Date(weather.sys.sunset).toLocaleString()}
                   </div>
                   <Table aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell style={{color:"darkblue"}}>Temperature</TableCell>
            <TableCell align="right" style={{color:"darkblue"}}>Min Temperature</TableCell>
            <TableCell align="right" style={{color:"darkblue"}}>MAx Temperature</TableCell>
            <TableCell align="right" style={{color:"darkblue"}}>Pressure</TableCell>
            <TableCell align="right" style={{color:"darkblue"}}>Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={weather.main.temp}>
              <TableCell component="th" scope="row">
              {weather.main.temp}
              </TableCell>
              <TableCell align="right">{weather.main.temp_min}</TableCell>
              <TableCell align="right">{weather.main.temp_max}</TableCell>
              <TableCell align="right">{weather.main.pressure}</TableCell>
              <TableCell align="right">{weather.main.humidity}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
                  
        </Card>
      </div>
     );
  }
}
 
export default CurrentWeatherCard;