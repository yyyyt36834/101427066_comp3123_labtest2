import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext } from 'react'

import WeatherContext from '../WeatherContext.js'

export default function Weather() {
    let weatherData = useContext(WeatherContext);
    console.log("inside the weather"+JSON.stringify(weatherData));
    if (!weatherData) {
        return <p>Weather data is loading or unavailable.</p>;
    }
    // return (
    //   <div>
    //     <h2>City: {weatherData.name}</h2>
    //     <h2>Date: {new Date((new Date()).getTime() + weatherData.timezone * 1000).toLocaleString()}</h2>
    //     <h2>Weather: {weatherData.weather[0].main}</h2>
    //     <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Description of the weather icon" />
    //     <h2>Tempreture: {weatherData.main.temp} F</h2>
    //     <h2>Wind: {weatherData.wind.speed} mps</h2>
    //   </div>



  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ borderRadius: "10px" }}>
              <MDBRipple
                tag="div"
                className="bg-image"
                rippleColor="light"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0,0,0,.45)" }}
                >
                  <div className="d-flex justify-content-between p-4">
                    <a href="#!" className="text-white">
                      <MDBIcon fas icon="chevron-left" size="lg" />
                    </a>
                    <a href="#!" className="text-white">
                      <MDBIcon fas icon="cog" size="lg" />
                    </a>
                  </div>
                  <div className="text-center text-white">
                  <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Description of the weather icon" />
                    <h2>City: {weatherData.name}</h2>
                    <h2>Date: {new Date((new Date()).getTime() + weatherData.timezone * 1000).toLocaleString()}</h2>
                    <h2>Tempreture: {weatherData.main.temp} F</h2>
                    <h2>Wind: {weatherData.wind.speed} mps</h2>
                  </div>
                </div>
              </MDBRipple>
              <MDBCardBody className="p-4 text-center">
                <a href="#!" className="text-body">
                  <MDBIcon fas icon="chevron-up mb-4" size="lg" />
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    )
  }
  


