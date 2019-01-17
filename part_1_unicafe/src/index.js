import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
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
        <p>Hyvä: {good}<br />
        Neutraali: {neutral}<br />
        Huono: {bad}<br />
        Yhteensä: {total}<br/>
        Keskiarvo: {((good - bad)/total).toFixed(2)}<br />
        Positiivisia: {(good/total*100).toFixed(2)} %<br />
        </p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
