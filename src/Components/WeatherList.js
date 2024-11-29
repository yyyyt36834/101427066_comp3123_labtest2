
import React, { Component } from 'react'
import axios from 'axios'
import { WeatherProvider } from '../WeatherContext';
import Weather from './Weather';

class WeatherList extends Component { 
    
    constructor(props){
        super(props);
        this.state={
            city : 'Toronto',
            data : null
        }
        this.cities = ['Toronto', 'Quebec', 'Alberta', 'Vancouver'];
    }

    handleInput=(e)=>{
        e.preventDefault(); 
        const {value} = e.target
        this.setState(
            {city: value},
            () => this.getWeather()
        );
        
    }

    getWeather = async() => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=884e6f66ee8f7a127e9191c346be55f8`
        
        try{
            const response = await axios.get(url)
            this.setState({data: response.data})
            console.log(response.data)
        }catch(err){
            console.log(err)
        }
    }

    componentDidMount(){
         this.getWeather()
    }

    

    render() {
        return (
        <div>
            <h2>Weather</h2><br/>   
            City: <select name="city" onChange={this.handleInput}>
                                {
                                    this.cities.map((city) => { 
                                        return <option key={city}>{city}</option>}
                                    )
                                }  
                  </select>
        
            <WeatherProvider value={this.state.data}>
                <Weather />
            </WeatherProvider>
        </div>
        )
    }
}

export default WeatherList