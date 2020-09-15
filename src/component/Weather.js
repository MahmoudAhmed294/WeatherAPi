import React from "react";

const Weather = (props) => {
  const weather = props.weather;
  const st = props.apiStatus;

  return (
    <div className="mt-3">
      {weather.tempreature && <p>tempreature:{weather.tempreature}</p>}
      {weather.city && <p>city:{weather.city}</p>}
      {weather.country && <p>country:{weather.country}</p>}
      {weather.humidity && <p>humidity:{weather.humidity}</p>}
      {weather.description && <p>description:{weather.description}</p>}
      <h5
        className="text-danger text-center"
      >
        {weather.error}
      </h5>
    </div>
  );
};

export default Weather;
