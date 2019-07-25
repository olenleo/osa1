import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p> {props.name} {props.excersises} </p>

        </div>
    )

}

const Content = (props) => {
    return (
        <div>
            <Part name={props.name1} excersises={props.ex1} />
            <Part name={props.name2} excersises={props.ex2} />
            <Part name={props.name3} excersises={props.ex3} />
        </div>

    )


}

const Total = (props) => {
    return (
        <div>
            <p>
                {props.sum}
            </p>

        </div>

    )
}



const App = () => {

    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const excercises1 = 10
    const part2 = 'Using props to pass data'
    const excercises2 = 7
    const part3 = 'State of a component'
    const excercises3 = 14

    return (

        <div>
            <Header course={course} />
            <Content name1={part1} ex1={excercises1} name2={part2} ex2={excercises2} name3={part3} ex3={excercises3} />
            <Total sum={excercises1 + excercises2 + excercises3} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))