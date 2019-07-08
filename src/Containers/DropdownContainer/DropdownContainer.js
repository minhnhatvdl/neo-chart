import React from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
// HOCs
import { withOptionsSelect } from "../../HOCs/withOptionsSelect";
import { withHandleChange } from "../../HOCs/withHandleChange";

const DropdownContainer = () => {
  const SelectWithHandleOptions = withHandleChange(withOptionsSelect(Dropdown));
  return <SelectWithHandleOptions />;
};

export default DropdownContainer;
