import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)


const Statistics = ({ good, neutral, bad, totalFeedbacks }) => {
    let sum = 0.0
    let positiveFeedbacks = 0
    totalFeedbacks.forEach(value => {
        sum = sum + parseInt(value, 10)
        if (value > 0) {
            positiveFeedbacks++
        }
    });

    if (totalFeedbacks.length === 0) {
        return (
            <div>

                <h1>Statistics:</h1>
                <p>No feedback given.</p>
            </div>

        )
    }
    return (
        <div>
            <h1>Statistics:</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Good:</td>
                        <td>{good}</td>
                    </tr>
                    <tr>
                        <td>Neutral:</td>
                        <td>{neutral} </td>
                    </tr>
                    <tr>
                        <td>Bad:</td>
                        <td>{bad}</td>
                    </tr>
                    <tr>
                        <td>All:</td>
                        <td>{totalFeedbacks.length}</td>
                    </tr>
                    <tr>
                        <td>Average:</td>
                        <td>{sum / totalFeedbacks.length}</td>
                    </tr>
                    
                    <tr>
                        <td>Positive:</td>
                        <td>{100 * positiveFeedbacks / totalFeedbacks.length}  %</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [totalFeedbacks, setTotalFeedbacks] = useState([])

    const setGoodFeedback = newValue => {
        setTotalFeedbacks(totalFeedbacks.concat('1'))
        setGood(newValue)
    }
    const setNeutralFeedback = newValue => {
        setTotalFeedbacks(totalFeedbacks.concat('0'))
        setNeutral(newValue)
    }
    const setBadFeedback = newValue => {
        setTotalFeedbacks(totalFeedbacks.concat('-1'))
        setBad(newValue)

    }

    return (
        <div>
            <h1>Give feedback:</h1>
            <Button
                handleClick={() => setGoodFeedback(good + 1)}
                text='Good' />
            <Button
                handleClick={() => setNeutralFeedback(neutral + 1)}
                text='Neutral' />
            <Button
                handleClick={() => setBadFeedback(bad + 1)}
                text='Bad' />
            <Statistics good={good} neutral={neutral} bad={bad} totalFeedbacks={totalFeedbacks} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
