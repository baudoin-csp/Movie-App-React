import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBox = (props) => {
  const searchBoxStyle = {
    backgroundColor: "#141413",
    width: "200px",
    textAlign: "start",
  };

  const onSearch = function (e) {
    props.setSearchValue(e.target.value);
  };

  return (
    <Search
      placeholder="Search films"
      allowClear
      onChange={onSearch}
      style={searchBoxStyle}
    />
  );
};

export default SearchBox;
