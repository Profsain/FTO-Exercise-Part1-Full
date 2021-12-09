import React, { useState } from "react";

//StatisticLine Component
const StatisticLine = ({ text, value, symbol }) => {
  return (
    <tr>
      <td style={{"padding":12}}>{ text}</td>
      <td>{value} {symbol}</td>
    </tr>
  )
}
//Statistics Component
const Statistics = ({ good, neutra, bad, total }) => {
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutra" value={neutra} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={(total / 3).toFixed(1)} />
      <StatisticLine text="Positive" value={((total / 100) * 100).toFixed(1)} symbol="%"/>
     
    </div>
  )
}
//Button Component
const Button = ({feeback, handler}) => {
  return (
    <button onClick={handler}>{ feeback}</button>
  )
}
//Main App Component
const App = () => {
  //feedbacl state
  const [good, setGood] = useState(0)
  const [neutra, setNeutra] = useState(0)
  const [bad, setBad] = useState(0)
  //Handler function
  const setGoodHandler = () => setGood(good + 1)
  const setNeutraHandler = () => setNeutra(neutra + 1)
  const setBadHandler = () => setBad(bad + 1)
  const total = good + neutra + bad
  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <Button
        feeback="Good"
        handler={setGoodHandler}
      />
      <Button
        feeback="Neutra"
        handler={setNeutraHandler}
      />
      <Button
        feeback="Bad"
        handler={setBadHandler}
      />

      <Statistics
        good={good}
        neutra={neutra}
        bad={bad}
        total={total}
      />
    </div>
  )
}
export default App;