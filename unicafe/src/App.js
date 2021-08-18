import React, { useState } from 'react'


const Statistics = ({goodVal, neutralVal, badVal}) => {
  return (
  <div>
  <h1>Statistics</h1>
  <table>
  
  <tr><StatisticsLine text = "good" value = {goodVal} /></tr>
  <tr><StatisticsLine text = "neutral" value = {neutralVal} /></tr>
  <tr><StatisticsLine text = "bad" value = {badVal} /></tr>
  <tr><StatisticsLine text = "total" value = {goodVal + neutralVal + badVal} /></tr>
  <tr><StatisticsLine text = "average" value = {goodVal / (goodVal + badVal)} /></tr>
  <tr><StatisticsLine text = "positives %" value = {100 * goodVal / (goodVal + neutralVal + badVal)} /></tr>
  </table>
  
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
  <td>{text} : {value}</td>
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