import React from "react";
import Chart from "react-google-charts";
import Loading from "../Loading/Loading";

const BarChart = ({ ...props }) => (
  <Chart
    height={"100%"}
    chartType="BarChart"
    loader={<Loading />}
    data={props.data}
    options={props.options}
  />
);

export default BarChart;
