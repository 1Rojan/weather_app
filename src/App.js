import React, {Component} from 'react' ;
import './App.css';
import CurrentWeatherCard from './CurrentWeatherCard';
import {WeatherApi} from './WeatherApi';
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "kathmandu",
      weatherData: {},
      isLoading: true
      }
  }

  componentDidMount() {
    this.getWeatherData();
  }

  handleChange=(ev)=>{
    let cityName = ev.target.value;
    this.setState({city:cityName});
    this.getWeatherData();
    
  }

getWeatherData=()=>{
  let self =this;
  WeatherApi.getCurrentWeatherData(self.state.city).then(function (res){
    self.setState({
      weatherData: res.data,
      isLoading: false
    })
  })
}

  render() { 
    return ( 
      this.state.isLoading ? "Loading":
      <div className="App">
        
      <CurrentWeatherCard  data={this.state.weatherData} />
      <Form changeCity={this.handleChange}/>
    </div>
     );
  }
}
 


export default App;
