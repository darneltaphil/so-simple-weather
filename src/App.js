import React, { useState, useEffect } from "react";
import DayDisplay from "./components/DayDisplay";
function App() {
  const [weatherData, setWeatherData] = useState({});
  const [weatherDailyData, setWeatherDailyData] = useState([]);
  const [weatherTown, setWeatherTown] = useState("accra");

  const getWeather = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${weatherTown}&key=${process.env.REACT_APP_API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setWeatherData(result);
        setWeatherDailyData(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSelectTown = (e) => {
    e.preventDefault();
    const town = e.target.value;
    setWeatherTown(town);
  };

  useEffect(() => {
    getWeather();
  }, [weatherTown]);

  return (
    <div style={{ justifyContent: "center" }}>
      <form>
        <select
          name="town"
          onChange={handleSelectTown}
          style={{ padding: "10px", width: "200px", alignItems: "center" }}
        >
          <option value>Select town</option>
          <option value="Accra">Accra</option>
          <option value="London">London</option>
          <option value="madrid">Madrid</option>
        </select>
      </form>
      <div style={{ display: "table-row" }}>
        <div
          style={{
            display: "table-cell",
            width: "20%",
            fontWeight: "bold",
            fontSize: "14pt",
            padding: "10px",
          }}
        >
          {weatherData.city_name}
        </div>
        {weatherDailyData.slice(0, 5).map((value, i) => {
          return (
            <>
              <DayDisplay key={i} dailyData={value} idx={i} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
