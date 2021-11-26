import React, { useContext } from "react";
import { RenderUsers } from "./RenderUsers";
import { searchContext } from "./searchContext";

const SearchBox = () => {
  const value = useContext(searchContext);

  return (
    <>
      <input
        type="text"
        placeholder="insert username"
        value={value.textValue}
        onChange={(e) => {
          value.setTextValue(e.target.value);
        }}
      />
      <RenderUsers />
    </>
  );
};
export default SearchBox;
