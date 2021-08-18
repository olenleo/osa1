import React, { useState } from 'react'


const points = [0,0,0,0,0,0,0]
const copy = [...points]


function GetRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// lähde https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array/11301464
// Tuskailtuani tämän kanssa aivan liian kauan.
function getMax() {
  return copy.reduce((bestIndexSoFar, currentlyTestedValue, currentlyTestedIndex, array) => currentlyTestedValue > array[bestIndexSoFar] ? currentlyTestedIndex : bestIndexSoFar, 0);
  
}
  

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const DisplayAnecdote = ({ index, anecdotes }) => {
  console.log(index)
  return (
  
  <p>"<i>{anecdotes[index]}"</i> <br/> has {copy[index]} votes</p>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

 

  function handleVote() {
    copy[selected] += 1
   
  }
 
  

  return (
    <div>
      {anecdotes[selected]}
      <p><Button handleClick ={() => setSelected(GetRandomInt(0, anecdotes.length))} text = "Get New Anecdote"/>
      <Button handleClick ={() => handleVote() } text = "Vote"/></p>
    
      <h1>Top rated Anecdote</h1>
      <DisplayAnecdote index = {getMax()} anecdotes = {anecdotes} />
    </div>
  )
}

export default App