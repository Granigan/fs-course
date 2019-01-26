import React, { useState } from "react";
import Details from "./component/Details";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "045-123456" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = event => setNewName(event.target.value);

  const handleNumberChange = event => setNewNumber(event.target.value);

  const addPerson = event => {
    event.preventDefault();
    const name = newName;
    const number = newNumber;
    if (persons.map(person => person.name).includes(name)) {
      window.alert(`${name} on jo luettelossa.`);
    } else {
      const personObject = {
        name: name,
        number: number
      };
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
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
      <h2>Numerot</h2>
      <Details persons={persons} />
    </div>
  );
};

export default App;
