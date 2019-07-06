import React from "react";
import Chart from "react-google-charts";
import Loading from "../Loading/Loading";

const BarChart = ({ data, options }) => (
  <Chart
    height={"100%"}
    chartType="BarChart"
    loader={<Loading />}
    data={data}
    options={options}
  />
);

export default BarChart;
