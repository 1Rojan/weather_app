  import axios from  'axios';
  import {CONFIG} from './Config' ;
  export class WeatherApi {

    // static WEATHER_API;
    
      static  getCurrentWeatherData= async(cityName)=>{
        let url= CONFIG.WEATHER_API.replace('~', cityName) ;
        return await axios.get(url+CONFIG.WEATHER_API_KEY);
      }
  }