import React, { useState, useEffect } from "react";
import Details from "./component/Details";
import Title from "./component/Title";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Header from "./component/Header";
import personService from "./services/persons";
import Notice from "./component/Notice";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [filteredList, setNewFilteredList] = useState(persons);
  const [errorMessage, setNewErrorMessage] = useState(null);
  const [successMessage, setNewSuccessMessage] = useState(null);
  const noticeTime = 5000;

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons);
      setNewFilteredList(initialPersons);
    });
  }, []);

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);

  const handleFilterChange = event => {
    setNewFilter(event.target.value);
    setNewFilteredList(
      persons.filter(person =>
        person.name.toUpperCase().includes(event.target.value.toUpperCase())
      )
    );
  };

  const addPerson = event => {
    event.preventDefault();
    const name = newName;
    const number = newNumber;

    if (persons.map(person => person.name).includes(name)) {
      if (
        window.confirm(
          `${name} on jo luettelossa, korvataanko nykyinen numero uudella?`
        )
      ) {
        const id = persons.filter(person => person.name === name)[0].id;
        const personObject = {
          id: id,
          name: name,
          number: number
        };
        personService
          .update(id, personObject)
          .then(updatedPerson => {
            setPersons(
              persons.map(person => (person.id !== id ? person : updatedPerson))
            );
            setNewFilteredList(
              persons.map(person => (person.id !== id ? person : updatedPerson))
            );
            setNewFilter("");
            setNewSuccessMessage(`Käyttäjän ${name} numero on päivitetty.`);
            setTimeout(() => {
              setNewSuccessMessage(null);
            }, noticeTime);
          })
          .catch(error => {
            setNewErrorMessage(`Käyttäjää ${name} ei ole tietokannassa.`);
            setTimeout(() => {
              setNewErrorMessage(null);
            }, noticeTime);
          });
      }
      setNewName("");
      setNewNumber("");
    } else {
      const personObject = {
        name: name,
        number: number
      };
      personService.create(personObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewFilteredList(persons.concat(returnedPerson));
        setNewFilter("");
      });
      setNewName("");
      setNewNumber("");
      setNewSuccessMessage(`Käyttäjä ${name} on lisätty tietokantaan.`);
      setTimeout(() => {
        setNewSuccessMessage(null);
      }, noticeTime);
    }
  };

  const removePerson = ({ id, name }) => {
    if (window.confirm(`Are you sure you want to remove details for ${name}`)) {
      personService
        .remove(id)
        .then(response => {
          setNewSuccessMessage(`Käyttäjä ${name} poistettiin tietokannasta.`);
          setTimeout(() => {
            setNewSuccessMessage(null);
          }, noticeTime);
        })
        .catch(error => {
          setNewErrorMessage(
            `Käyttäjä ${name} oli jo poistettu tietokannasta.`
          );
          setTimeout(() => {
            setNewErrorMessage(null);
          }, noticeTime);
        });
      setNewFilteredList(filteredList.filter(person => person.id !== id));
      setPersons(persons.filter(person => person.id !== id));
    }
  };

  return (
    <div>
      <Title name="Puhelinluettelo" />
      <Notice message={errorMessage} type="error" />
      <Notice message={successMessage} type="success" />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Header name="Lisää uusi nimi luetteloon" />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Header name="Numerot" />
      <Details persons={filteredList} removePerson={removePerson} />
    </div>
  );
};

export default App;
