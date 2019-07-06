import React, { useState, useEffect } from "react";
import AppContext from "../Contexts/AppContext";
import json from "../data.json";

const AppProvider = ({ ...props }) => {
  // data
  const [data, setData] = useState([]);
  // get data from api
  useEffect(() => {
    let newData = json.near_earth_objects.map(
      ({
        name,
        estimated_diameter: {
          kilometers: { estimated_diameter_min, estimated_diameter_max }
        }
      }) => [name, estimated_diameter_min, estimated_diameter_max]
    );
    // add header of data
    newData = [
      [
        "NEO Name",
        "Min Estimated Diameter (km)",
        "Max Estimated Diameter (km)"
      ],
      ...newData
    ];
    setData(newData);
  }, []);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
