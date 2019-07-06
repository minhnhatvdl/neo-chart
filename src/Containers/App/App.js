import React from "react";
import BarChart from "../../Components/BarChart/BarChart";
// provider
import AppProvider from "../../Providers/AppProvider";
// HOCs
import { withData } from "../../HOCs/withData";
import { withOptions } from "../../HOCs/withOptions";

const App = () => {
  const BarChartWithDataOptions = withOptions(withData(BarChart));
  return (
    <AppProvider>
      <BarChartWithDataOptions />
    </AppProvider>
  );
};

export default App;
