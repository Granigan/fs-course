import React, { useState } from "react";
import Details from "./component/Details";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: event.target.name
    };
    setPersons(persons.concat(personObject));
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson} name={newName}>
        <div>
          nimi: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <Details persons={persons} />
    </div>
  );
};

export default App;
