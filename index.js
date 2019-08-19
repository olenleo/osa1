import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)



const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [voted, setVoted] = useState(new Array(6).fill(0))

    const generateNewAnecdote = newValue => {
        setSelected(newValue)
        generateNewRandomNumber()
    }
    const generateNewRandomNumber = () => {
        return (
            randomNumberGenerator()
        )
    }

    const getHighestScore = () => {
        let indexOfHighest = 0
        for (var i = 0; i < voted.length - 1; i++) {
            if (voted[i] > voted[indexOfHighest]) {
                indexOfHighest = i
            }
        }
        return ([indexOfHighest])

    }

    const vote = () => {
        const voteCopy = [...voted]
        voteCopy[selected] += 1
        return (voteCopy)
    }

    const randomNumberGenerator = () => {
        const rndNumber = Math.ceil(Math.random() * anecdotes.length - 1)
        return rndNumber
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <p> has {voted[selected]} votes</p>
            <p>
                <Button handleClick={() => setVoted(vote())}
                    text='Vote' />


                <Button handleClick={() => generateNewAnecdote(randomNumberGenerator(anecdotes.length))}
                    text='next anecdote' />
            </p>


            <h1>Anecdote with the most votes</h1>
            <p>{anecdotes[getHighestScore()]}</p>
            <p>Entire array: {voted}</p>


        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
