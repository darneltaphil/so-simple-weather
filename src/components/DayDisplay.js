import React from "react";
import moment from "moment";
export default function DayDisplay({ dailyData, idx }) {
  console.log("dailyData: ", new Date());

  return (
    <div style={{ display: "table-cell" }}>
      <span style={{ color: "blue", fontWeight: "bold" }} id="day">
        {moment(dailyData.datetime).format("dddd")}
      </span>
      <br />
      <div className="container">
        <span className="" style={{ marginRight: "5px" }} id="icon">
          <img
            src={`https://www.weatherbit.io/static/img/icons/${dailyData.weather.icon}.png`}
            width="25%"
            alt="icon"
          />
        </span>
        <small style={{ marginRight: "5px" }} id="icon">
          {dailyData?.weather?.description}
        </small>
      </div>
      <br />
      <small style={{}} id="max-temp">
        Max Temp: {dailyData?.max_temp}&#176;
      </small>
      <br />
      <small style={{ display: "table-row" }} id="min-temp">
        Min Temp: {dailyData.min_temp}&#176;
      </small>
      <small style={{}} id="wind-speed">
        {dailyData?.wind_spd} mph
      </small>
    </div>
  );
}
