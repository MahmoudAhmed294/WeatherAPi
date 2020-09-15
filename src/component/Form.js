import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather} className="mt-5">
      <input
        type="text"
        className="form-control mt-3 w-25 ml-auto mr-auto"
        placeholder="Enter The City"
        name="city"
      />
      <input
        type="text"
        className="form-control mt-3 w-25 ml-auto mr-auto"
        placeholder="Enter The Country"
        name="Country"
      />
      <button className="btn btn-dark text-center mt-3">Show Weather</button>
    </form>
  );
};
export default Form;
