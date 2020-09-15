import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form";
import Weather from "./component/Weather";

const key = "bfeef23d171171fc36b1db4243c908d0";

class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    status: "",
    error: "",
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.Country.value;

    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`
    );

    const apiToJson = await api.json();
    const statusRequest = api.status;
    if (city && country) {
      this.setState({
        tempreature: apiToJson.main.temp,
        city: apiToJson.name,
        country: apiToJson.sys.country,
        humidity: apiToJson.main.humidity,
        description: apiToJson.weather[0].description,
        status: statusRequest,
        error: "",
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Data",
      });
    }
  };

  render() {
    return (
      <div className="container-sm text-center bg-info p-4  mt-5">
        <Form getWeather={this.getWeather} />
        <Weather weather={this.state} apiStatus={this.state.status} />
      </div>
    );
  }
}

export default App;
