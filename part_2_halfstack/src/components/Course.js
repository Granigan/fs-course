import React from "react";

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total exercises={course.parts.map(part => part.exercises)} />
  </div>
);

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

export default Course;