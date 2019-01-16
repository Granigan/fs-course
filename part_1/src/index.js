import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1.name} exercises = {props.part1.exercises} />
      <Part part = {props.part2.name} exercises = {props.part2.exercises} />
      <Part part = {props.part3.name} exercises = {props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Yhteensä {props.exercises1 + props.exercises2 + props.exercises3} tehtävää.
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = {
    name: 'Reactin perusteet',
    exercises: 10
  }
  const part2 = {
    name: 'Tiedonvälitys propseilla',
    exercises: 7
  }
  const part3 = {
    name: 'Komponenttien tila',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} 
        exercises3 = {part3.exercises} />
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'));