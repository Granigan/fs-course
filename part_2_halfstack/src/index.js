import React from "react";
import ReactDOM from "react-dom";
import Course from './components/Course'

const Title = ({ name }) => <h1>{name}</h1>;

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
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
