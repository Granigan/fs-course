import React from "react";

const Filter = ({ newFilter, handleFilterChange }) => (
  <p>
    Hae nimiä: <input value={newFilter} onChange={handleFilterChange} />
  </p>
);

export default Filter;
