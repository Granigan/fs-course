import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = props => {
  if (props.total === 0) {
    return <p>Yhtään palautetta ei ole vielä annettu.</p>;
  }
  return (
    <div>
      <p>
        Hyvä: {props.good}
        <br />
        Neutraali: {props.neutral}
        <br />
        Huono: {props.bad}
        <br />
        Yhteensä: {props.total}
        <br />
        Keskiarvo: {((props.good - props.bad) / props.total).toFixed(2)}
        <br />
        Positiivisia: {((props.good / props.total) * 100).toFixed(2)} %<br />
      </p>
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  return (
    <div>
      <h1>Anna palautetta!</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="Hyvä" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutraali" />
        <Button handleClick={() => setBad(bad + 1)} text="Huono" />
      </div>
      <h1>Tilastot</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
