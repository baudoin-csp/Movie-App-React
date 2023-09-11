import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBox = (props) => {
  const searchBoxStyle = {
    backgroundColor: "#141413",
    width: "200px",
    textAlign: "start",
  };

  const onSearch = function (value) {
    props.setSearchValue(value);
  };

  return (
    <Search
      placeholder="Search films"
      allowClear
      onSearch={onSearch}
      style={searchBoxStyle}
    />
  );
};

export default SearchBox;
