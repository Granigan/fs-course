import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange
}) => (
  <form onSubmit={addPerson} name={newName}>
    <div>
      nimi: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      numero: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
);

export default PersonForm;
