import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total exercises={course.parts.map(part => part.exercises)} />
  </div>
);

const Title = ( { name }) => <h1>{name}</h1>
const Header = ({ name }) => <h2>{name}</h2>;

const Total = ({ exercises }) => (
  <p>
    Yhteensä {exercises.reduce((total, amount) => total + amount)} tehtävää.
  </p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const App = () => {
  const courses = [
    {
      name: "Half Stack -sovelluskehitys",
      id: 1,
      parts: [
        {
          name: "Reactin perusteet",
          exercises: 10,
          id: 1
        },
        {
          name: "Tiedonvälitys propseilla",
          exercises: 7,
          id: 2
        },
        {
          name: "Komponenttien tila",
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 2,
          id: 1
        },
        {
          name: "Middlewaret",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      <Title name="Opetusohjelma" />
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
