import React, { useContext } from "react";
import AppContext from "../Contexts/AppContext";

export const withHandleChange = WrappedComponent => ({ ...props }) => {
  const { dataRaw, setData } = useContext(AppContext);
  const handleChange = value => {
    let newData = [
      ["NEO Name", "Min Estimated Diameter (km)", "Max Estimated Diameter (km)"]
    ];
    let dataFilter = [];
    if (value.length > 0) {
      dataFilter = dataRaw.near_earth_objects
        .filter(
          ({ close_approach_data }) =>
            close_approach_data.length > 0 &&
            close_approach_data
              .map(e => e.orbiting_body.trim().toLowerCase())
              .includes(value[0].slug)
        )
        .map(
          ({
            name,
            estimated_diameter: {
              kilometers: { estimated_diameter_min, estimated_diameter_max }
            },
            close_approach_data
          }) => [name, estimated_diameter_min, estimated_diameter_max]
        );
    } else {
      dataFilter = dataRaw.near_earth_objects.map(
        ({
          name,
          estimated_diameter: {
            kilometers: { estimated_diameter_min, estimated_diameter_max }
          }
        }) => [name, estimated_diameter_min, estimated_diameter_max]
      );
    }
    // if we have results
    if (dataFilter.length > 0) {
      newData = [...newData, ...dataFilter];
      setData(newData);
    } else {
      if (value.length > 0) alert("No NEOs found!");
    }
  };
  return <WrappedComponent {...props} onChange={handleChange} />;
};
