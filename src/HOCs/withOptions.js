import React from "react";

export const withOptions = WrappedComponent => ({ ...props }) => {
  const options = {
    chartArea: { width: "50%" },
    hAxis: {
      title: "Min Estimated Diameter (km)",
      minValue: 0
    },
    vAxis: {
      title: "NEO Name"
    }
  };
  return <WrappedComponent {...props} options={options} />;
};
