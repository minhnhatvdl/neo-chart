import React, { useContext } from "react";
import AppContext from "../Contexts/AppContext";

export const withData = WrappedComponent => ({ ...props }) => {
  const { data } = useContext(AppContext);
  return <WrappedComponent {...props} data={data} />;
};
