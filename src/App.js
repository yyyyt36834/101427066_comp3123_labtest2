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
} from "mdb-react-ui-kit"

import './App.css';
import WeatherList from './Components/WeatherList'; // Check this path

function App() {
  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }} >
        <WeatherList />
    </div>
  );
}

export default App;
