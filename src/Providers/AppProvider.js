import React, { useState, useEffect } from "react";
import Error from "../Components/Error/Error";
// context
import AppContext from "../Contexts/AppContext";
// hook
import { useFetch } from "../Hooks/useFetch";
// api
import { api } from "../APIs/api";

const AppProvider = ({ ...props }) => {
  // data
  const [data, setData] = useState([]);
  // error
  const [error, setError] = useState(false);
  // get data raw
  const [dataRaw] = useFetch(
    api,
    { near_earth_objects: [] },
    setError
  );
  // get data from api
  useEffect(() => {
    let newData = dataRaw.near_earth_objects.map(
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
  }, [dataRaw]);
  return (
    <AppContext.Provider value={{ data, setData, error }}>
      {error && <Error />}
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
