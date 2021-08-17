import React, { useState } from 'react'


const Statistics = ({goodVal, neutralVal, badVal}) => {
  return (
  <div>
  <h1>Statistics</h1>
  <StatisticsLine text = "good" value = {goodVal} />
  <StatisticsLine text = "neutral" value = {neutralVal} />
  <StatisticsLine text = "bad" value = {badVal} />
  <StatisticsLine text = "total" value = {goodVal + neutralVal + badVal} />
  <StatisticsLine text = "average" value = {goodVal / (goodVal + badVal)} />
  <StatisticsLine text = "positives %" value = {100 * goodVal / (goodVal + neutralVal + badVal)} />
  
  
  </div>
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = ({ text, value }) => {
  return (
  <p>{text} : {value}</p>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


 
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick ={() =>setGood(good + 1)} text = "good"/>
      <Button handleClick ={() =>setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick ={() =>setBad(bad + 1)} text = "bad"/>
      <Statistics goodVal = {good} neutralVal = {neutral} badVal = {bad} />
    </div>
    
  )
}

export default App