import React from "react";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import BarChartContainer from "../BarChartContainer/BarChartContainer";
// provider
import AppProvider from "../../Providers/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <DropdownContainer />
      <BarChartContainer />
    </AppProvider>
  );
};

export default App;
