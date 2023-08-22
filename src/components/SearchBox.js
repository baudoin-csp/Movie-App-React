import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4 mt-2">
      <input
        className="form-control"
        placeholder="Type to search..."
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
