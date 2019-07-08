import React from "react";
import Chart from "react-google-charts";

const BarChart = ({ data, options }) => (
  <Chart
    height="100%"
    chartType="BarChart"
    data={data}
    options={options}
  />
);

export default BarChart;
