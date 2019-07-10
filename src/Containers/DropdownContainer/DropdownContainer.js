import React from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
// HOCs
import { withOptionsSelect } from "../../HOCs/withOptionsSelect";
import { withHandleChange } from "../../HOCs/withHandleChange";
// css
import { dropdownContainer } from "./DropdownContainer.module.css";

const DropdownContainer = () => {
  const SelectWithHandleOptions = withHandleChange(withOptionsSelect(Dropdown));
  return (
    <div className={dropdownContainer}>
      <SelectWithHandleOptions />
    </div>
  );
};

export default DropdownContainer;
