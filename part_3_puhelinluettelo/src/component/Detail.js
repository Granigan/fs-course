import React from "react";
import RemoveButton from "./RemoveButton";

const Detail = ({ name, number, id, removePerson }) => (
  <div>
    {name} {number}
    <RemoveButton id={id} name={name} removePerson={removePerson} />
  </div>
);

export default Detail;
