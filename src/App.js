import React from "react";
import useFetchData from "./FetchData";
import "./styles.css";

function App() {
  const { data } = useFetchData(
    "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
  );
  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />

      {data.map((item, index) => (
        <p key={index}>{data}</p>
      ))}
    </div>
  );
}

export default App;
