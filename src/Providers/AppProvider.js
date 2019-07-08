import React, { useState, useEffect, Fragment } from "react";
import Loading from "../Components/Loading/Loading";
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
  // loading
  const [loading, setLoading] = useState(false);
  // error
  const [error, setError] = useState(false);
  // get data raw
  const [dataRaw] = useFetch(
    api,
    { near_earth_objects: [] },
    setLoading,
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
    <Fragment>
      {error && <Error />}
      {loading && <Loading />}
      {!error && !loading && (
        <AppContext.Provider value={{ data, dataRaw, setData, error }}>
          {props.children}
        </AppContext.Provider>
      )}
    </Fragment>
  );
};

export default AppProvider;
