import React from "react";

const RemoveButton = ({ id, name, removePerson }) => {
  return <button onClick={() => removePerson({ id, name })}>poista</button>;
};

export default RemoveButton;
