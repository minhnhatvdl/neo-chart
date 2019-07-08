import React, { useContext } from "react";
import AppContext from "../Contexts/AppContext";

export const withOptionsSelect = WrappedComponent => ({ ...props }) => {
  const { dataRaw } = useContext(AppContext);
  const orbitingBody = dataRaw.near_earth_objects.reduce((acc, ele) => {
    if (ele.close_approach_data.length > 0) {
      return acc.add(...ele.close_approach_data.map(e => e.orbiting_body));
    }
    return acc;
  }, new Set());
  const options = [...orbitingBody].map((e, i) => ({ id: i, name: e }));
  return (
    <WrappedComponent
      {...props}
      options={options}
      field="name"
      placeholder={"Orbiting body (Type to search)"}
    />
  );
};
