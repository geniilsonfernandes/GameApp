import React from "react";

const InputNav = (props) => {
  const { placeholder, onChange, value } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputNav;
