import React from "react";
import BarChart from "../../Components/BarChart/BarChart";
// HOCs
import { withData } from "../../HOCs/withData";
import { withOptions } from "../../HOCs/withOptions";
// css
import {barChartContainer} from "./BarChartContainer.module.css"

const BarChartContainer = () => {
  const BarChartWithDataOptions = withOptions(withData(BarChart));
  return (
    <div className={barChartContainer}>
      <BarChartWithDataOptions />
    </div>
  );
};

export default BarChartContainer;
