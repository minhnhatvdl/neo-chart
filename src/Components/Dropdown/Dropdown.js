import React from "react";
import Select from "react-dropdown-select";

const Dropdown = ({ field, placeholder, options, onChange }) => (
  <Select
    labelField={field}
    valueField={field}
    sortBy={field}
    searchable={true}
    keepSelectedInList={true}
    clearable={true}
    placeholder={placeholder}
    options={options}
    onChange={onChange}
    style={{ maxWidth: "300px", margin: "20px auto" }}
  />
);

export default Dropdown;
