import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({}) => {
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta!</h1>
      <div>
        <button>Hyvä</button>
        <button>Neutraali</button>
        <button>Huono</button>
      </div>
      <h1>Tilastot</h1>
      <div>
        <p>Hyvä: {good}</p>
        <p>Neutraali: {neutral}</p>
        <p>Huono: {bad}</p>
        </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
