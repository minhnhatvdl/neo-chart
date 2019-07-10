import React from "react";
import { apiGetModifiers } from "../APIs/api";
import { useFetch } from "../Hooks/useFetch";

export const withOptionsSelect = WrappedComponent => ({ ...props }) => {
  const [options] = useFetch(apiGetModifiers, []);
  return (
    <WrappedComponent
      {...props}
      options={options}
      field="name"
      placeholder="Orbiting body (Type to search)"
    />
  );
};
