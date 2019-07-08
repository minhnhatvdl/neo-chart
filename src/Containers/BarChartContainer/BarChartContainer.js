import React from "react";
import BarChart from "../../Components/BarChart/BarChart";
// HOCs
import { withData } from "../../HOCs/withData";
import { withOptions } from "../../HOCs/withOptions";

const BarChartContainer = () => {
  const BarChartWithDataOptions = withOptions(withData(BarChart));
  return <BarChartWithDataOptions />;
};

export default BarChartContainer;
